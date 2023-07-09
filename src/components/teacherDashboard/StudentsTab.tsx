import { Card, Grid, Box } from "@chakra-ui/react";
import StudentTabElement from "../ui/StudentTabElement";

const StudentsTab = () => {
  //array of students
  const students: number[] = [1, 2, 3, 4, 5, 6, 41, 23, 11, 15, 17, 12, 13];
  return (
    <Card
      bgColor="t_dark"
      color="white"
      rounded={"2xl"}
      w="full"
      p={2}
      justifyContent={"flex-start"}
      h="full"
      boxShadow="0 0 10px 5px rgba(0, 0, 0, 0.2)"
    >
      <Grid
        gap={6}
        overflowY={"auto"}
        p={8}
        my={2}
        h={"full"}
        w={"full"}
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
      >
        {students.map((student) => (
          <Box maxHeight="96" key={student}>
            <StudentTabElement key={student} />
          </Box>
        ))}
      </Grid>
    </Card>
  );
};

export default StudentsTab;
