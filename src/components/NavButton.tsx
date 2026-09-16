import { Button } from "@mantine/core";

import { contrastInset } from "../helpers/theme";

export interface NavButtonProps {
  label: string;
  onClick: () => void;
}

function NavButton({ label, onClick }: NavButtonProps) {
  return (
    <Button px="sm" h="44px" fz="1em" onClick={onClick} {...contrastInset}>
      {label}
    </Button>
  );
}

export default NavButton;
