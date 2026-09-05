import { Button } from "@mantine/core";

interface NavButtonProps {
  onClick: () => void;
  label: string;
}

function NavButton({ label, onClick }: NavButtonProps) {
  return (
    <Button
      bdrs="3"
      bg="linen"
      c="crimson"
      onClick={onClick}
      bd="solid 2px crimson"
    >
      {label.toUpperCase()}
    </Button>
  );
}

export default NavButton;
