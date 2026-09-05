import { Button } from "@mantine/core";

interface NavButtonProps {
  onClick: () => void;
  label: string;
}

function NavButton({ label, onClick }: NavButtonProps) {
  return <Button onClick={onClick}>{label}</Button>;
}

export default NavButton;
