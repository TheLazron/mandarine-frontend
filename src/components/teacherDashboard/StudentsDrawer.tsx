import {
  useDisclosure,
  Button,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Drawer,
  Box,
  Flex,
  DrawerOverlay,
} from "@chakra-ui/react";
import { IconArrowBadgeUp } from "@tabler/icons-react";
import { useState } from "react";
import StudentTabElement from "../ui/StudentTabElement";
const students: number[] = [1, 2, 3, 4, 5, 6, 41, 23, 11, 15, 17, 12, 13];
const StudentsDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [placement, setPlacement] = useState("right");

  return (
    <>
      <Button
        boxShadow="5rem 2rem 150rem 10rem rgba(0, 0, 0, 0.6)"
        mb={5}
        py={6}
        px={3}
        rounded={"full"}
        variant={"yellow"}
        onClick={onOpen}
      >
        <IconArrowBadgeUp />
      </Button>
      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor={"t_dark"} color="primary">
          <DrawerHeader borderBottomWidth="1px">
            Member Submissions
          </DrawerHeader>
          <DrawerBody bgColor={"t_dark"} color="white">
            <Flex gap={4}>
              {students.map((student) => (
                <Box maxHeight="96" minWidth={"52"} key={student}>
                  <StudentTabElement key={student} />
                </Box>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default StudentsDrawer;
