import { Divider, Box, AbsoluteCenter } from "@chakra-ui/react";

const CustomDivider = ({ text }: { text: string }) => {
  return (
    <Box position="relative">
      <Divider />
      <AbsoluteCenter px="4">{text}</AbsoluteCenter>
    </Box>
  );
};

export default CustomDivider;
