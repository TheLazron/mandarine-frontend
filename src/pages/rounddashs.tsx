import DrawingDash from "@/components/teacherDashboard/DrawingDash";
import FabricCanvas from "@/components/FabricCanvas";
import StudentsDrawer from "@/components/teacherDashboard/StudentsDrawer";
import StudentsTab from "@/components/teacherDashboard/StudentsTab";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import StudentPanel from "@/components/studentDashboard/StudentPanel";

const RoundDashT = () => {
  return (
    <Box
      _before={{
        content: '""',
        position: "absolute",
        bgColor: "rgba(0, 0, 1, 0)",
        top: -10,
        left: 25,
        width: "2px",
        height: "2px",
        boxShadow: "5rem 2rem 1000rem 15rem rgba(255, 216, 108, 0.4)",
      }}
      bg="secondary"
      position={"relative"}
      minH={"100vh"}
      height={"100vh"}
      overflow={"auto"}
    >
      <Grid
        p={{ base: 1, sm: 4, md: "16" }}
        bgColor={"red"}
        h={"full"}
        w={"full"}
        templateColumns={{
          base: "repeat(5, 1fr)",
          sm: "repeat(5, 1fr)",
          md: "repeat(5, 1fr)",
        }}
        gap={12}
        bg="secondary"
        templateRows={{
          base: "repeat(2, auto)",
          md: "repeat(2, auto)",
        }}
      >
        <GridItem
          colSpan={{ base: 5, sm: 5, md: 3 }}
          rowSpan={{ base: 1, md: 1 }}
        >
          <DrawingDash />
        </GridItem>
        <GridItem
          //   boxShadow="0 0 10px 5px rgba(0, 0, 0, 0.2)"
          //   rounded={"2xl"}
          colSpan={{ base: 5, sm: 5, md: 2 }}
          rowSpan={{ base: 2, md: 2 }}
          overflow={"auto"}
          display={{ base: "none", md: "block" }}
          // rowSpan={{ base: 1, md: 2 }}
        >
          <Box h="full">
            <StudentPanel />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default RoundDashT;
