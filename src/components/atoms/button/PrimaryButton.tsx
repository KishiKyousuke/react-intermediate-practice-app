import { Button } from "@chakra-ui/react";
import { memo, FC, ReactNode } from "react";

type Props = {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick, disabled = true, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ cursor: "pointer" }}
      onClick={onClick}
      isLoading={loading}
      isDisabled={disabled}
    >
      {children}
    </Button>
  );
});
