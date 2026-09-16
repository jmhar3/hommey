import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherApi } from "openmeteo";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    const params = {
      latitude: -37.77291081891222,
      longitude: 144.89326587892137,
      daily: [
        "weather_code",
        "sunrise",
        "sunset",
        "uv_index_max",
        "precipitation_sum",
        "precipitation_hours",
        "temperature_2m_max",
        "temperature_2m_min",
        "apparent_temperature_max",
        "apparent_temperature_min",
        "wind_speed_10m_max",
        "wind_gusts_10m_max",
      ],
      hourly: [
        "temperature_2m",
        "relative_humidity_2m",
        "dew_point_2m",
        "precipitation",
        "weather_code",
        "wind_gusts_10m",
        "apparent_temperature",
      ],
      models: "bom_access_global",
      timezone: "Australia/Sydney",
      forecast_days: 3,
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const latitude = response.latitude();
    const longitude = response.longitude();
    const elevation = response.elevation();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const utcOffsetSeconds = response.utcOffsetSeconds();

    console.log(
      `\nCoordinates: ${latitude}°N ${longitude}°E`,
      `\nElevation: ${elevation}m asl`,
      `\nTimezone: ${timezone} ${timezoneAbbreviation}`,
      `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
    );

    const hourly = response.hourly();
    const daily = response.daily();

    // Define Int64 variables so they can be processed accordingly
    const sunrise = daily?.variables(1);
    const sunset = daily?.variables(2);

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      hourly: {
        time: Array.from(
          {
            length:
              (Number(hourly?.timeEnd()) - Number(hourly?.time())) /
              (hourly?.interval() || 0),
          },
          (_, i) =>
            new Date(
              (Number(hourly?.time()) +
                i * (hourly?.interval() || 0) +
                utcOffsetSeconds) *
                1000,
            ),
        ),
        temperature_2m: hourly?.variables(0)?.valuesArray(),
        relative_humidity_2m: hourly?.variables(1)?.valuesArray(),
        dew_point_2m: hourly?.variables(2)?.valuesArray(),
        precipitation: hourly?.variables(3)?.valuesArray(),
        weather_code: hourly?.variables(4)?.valuesArray(),
        wind_gusts_10m: hourly?.variables(5)?.valuesArray(),
        apparent_temperature: hourly?.variables(6)?.valuesArray(),
      },
      daily: {
        time: Array.from(
          {
            length:
              (Number(daily?.timeEnd()) - Number(daily?.time())) /
              (daily?.interval() || 0),
          },
          (_, i) =>
            new Date(
              (Number(daily?.time()) +
                i * (daily?.interval() || 0) +
                utcOffsetSeconds) *
                1000,
            ),
        ),
        weather_code: daily?.variables(0)?.valuesArray(),
        // Map Int64 values to according structure
        sunrise: [...Array(sunrise?.valuesInt64Length())].map(
          (_, i) =>
            new Date(
              (Number(sunrise?.valuesInt64(i)) + utcOffsetSeconds) * 1000,
            ),
        ),
        // Map Int64 values to according structure
        sunset: [...Array(sunset?.valuesInt64Length())].map(
          (_, i) =>
            new Date(
              (Number(sunset?.valuesInt64(i)) + utcOffsetSeconds) * 1000,
            ),
        ),
        uv_index_max: daily?.variables(3)?.valuesArray(),
        precipitation_sum: daily?.variables(4)?.valuesArray(),
        precipitation_hours: daily?.variables(5)?.valuesArray(),
        temperature_2m_max: daily?.variables(6)?.valuesArray(),
        temperature_2m_min: daily?.variables(7)?.valuesArray(),
        apparent_temperature_max: daily?.variables(8)?.valuesArray(),
        apparent_temperature_min: daily?.variables(9)?.valuesArray(),
        wind_speed_10m_max: daily?.variables(10)?.valuesArray(),
        wind_gusts_10m_max: daily?.variables(11)?.valuesArray(),
      },
    };
    console.log(weatherData);
    // The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
    // console.log("\nHourly data:\n", weatherData.hourly);
    // console.log("\nDaily data:\n", weatherData.daily);
    return weatherData;
  },
);
