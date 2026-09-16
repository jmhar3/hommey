import { ActionIcon } from "@mantine/core";
import { FaEdit } from "react-icons/fa";
import { contrastInset } from "../helpers/theme";

interface EditButtonProps {
  onClick: () => void;
}
function EditButton({ onClick }: EditButtonProps) {
  return (
    <ActionIcon h="44px" w="48px" {...contrastInset} onClick={onClick}>
      <FaEdit />
    </ActionIcon>
  );
}

export default EditButton;
