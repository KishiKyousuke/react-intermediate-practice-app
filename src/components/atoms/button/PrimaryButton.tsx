import { Button } from "@chakra-ui/react";
import { memo, FC, ReactNode } from "react";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ cursor: "pointer" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
