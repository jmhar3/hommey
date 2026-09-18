import { Button } from "@mantine/core";

import Theme from "../helpers/theme";

export interface NavButtonProps {
  label: string;
  onClick: () => void;
}

function NavButton({ label, onClick }: NavButtonProps) {
  const { contrastShadow } = Theme();

  return (
    <Button px="sm" h="44px" fz="1em" onClick={onClick} {...contrastShadow}>
      {label}
    </Button>
  );
}

export default NavButton;
