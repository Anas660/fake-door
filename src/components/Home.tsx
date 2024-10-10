import { Box, Container, Typography } from "@mui/material";
import React from "react";
import GoBackIcon from "../assets/Icons/GoBackIcon";
import LessonsList from "./LessonsList";
import { useGetLessons } from "../hooks/useGetLessons";

const Home = () => {
  const { data } = useGetLessons();
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", flexDirection: "column", mt: 5, gap: 4 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#EEEEEE",
            width: "max-content",
            paddingY: 1,
            paddingX: 1.2,
            borderRadius: "50%",
          }}
        >
          <GoBackIcon />
        </Box>
        <Typography variant="body2" fontWeight={"600"} color="secondary">
          Go Back
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 5,
          gap: 2,
          height: "70vh", // Set a fixed height
          overflowY: "auto", // Enable vertical scrolling
        }}
      >
        {data?.content.slice(0, 6).map((lesson, index) => (
          <LessonsList key={lesson.id} lesson={lesson} index={index} />
        ))}
      </Box>
    </Container>
  );
};

export default Home;
