import { Button } from "@mantine/core";

import { contrastShadow } from "../helpers/theme";

export interface NavButtonProps {
  label: string;
  onClick: () => void;
}

function NavButton({ label, onClick }: NavButtonProps) {
  return (
    <Button px="sm" h="44px" fz="1em" onClick={onClick} {...contrastShadow}>
      {label}
    </Button>
  );
}

export default NavButton;
