import { ButtonHTMLAttributes } from "react";
import { useToast } from "@chakra-ui/react";
import CustomButton from "./Button";
import { IconCopy } from "@tabler/icons-react";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton = ({
  valueToCopy,
  className,
  ...props
}: CopyButtonProps): JSX.Element => {
  const Toast = useToast();

  return (
    <CustomButton
      {...props}
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);

        Toast({
          title: "Copied",
          description: "API key copied to clipboard",
          variant: "solid",
          status: "success",
        });
      }}
      variant=""
    >
      <IconCopy />
    </CustomButton>
  );
};

export default CopyButton;
