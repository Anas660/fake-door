import {
  Box,
  Container,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import React from "react";
import GoBackIcon from "../assets/Icons/GoBackIcon";
import LessonsList from "./LessonsList";
import { useGetLessons } from "../hooks/useGetLessons";
import Image from "next/image"; // Import Image if you're using Next.js
import Lesson from "./Lesson";

const Home = () => {
  const { data, isLoading } = useGetLessons();

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 5,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          height: { xs: "auto", md: "70vh" },
        }}
        mb={4}
      >
        <Grid item xs={12} md={4} sx={{ overflowY: "auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
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
            <>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <>
                  {data?.content.slice(0, 6).map((lesson, index) => (
                    <LessonsList
                      key={lesson.id}
                      lesson={lesson}
                      index={index}
                    />
                  ))}
                </>
              )}
            </>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            {/* <Image
              src={"https://fakedoor.com/assets/images/space.svg"}
              alt="img"
              width={45}
              height={45}
            /> */}
            <Lesson />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
