import { ActionIcon } from "@mantine/core";
import { FaEdit } from "react-icons/fa";
import Theme from "../helpers/theme";

interface EditButtonProps {
  onClick: () => void;
}
function EditButton({ onClick }: EditButtonProps) {
  const { contrastInset } = Theme();

  return (
    <ActionIcon h="44px" w="48px" {...contrastInset} onClick={onClick}>
      <FaEdit />
    </ActionIcon>
  );
}

export default EditButton;
