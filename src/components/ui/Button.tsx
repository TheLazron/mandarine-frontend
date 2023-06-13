import {
  Button,
  ButtonProps,
  ChakraComponent,
  Spinner,
} from "@chakra-ui/react";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant: string;
  flex: number;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    { isLoading, flex, children, variant, ...props }: CustomButtonProps,
    ref
  ) => {
    return (
      <Button
        variant={variant}
        ref={ref}
        {...props}
        disabled={isLoading}
        flex={flex}
      >
        {isLoading ? <Spinner /> : children}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
