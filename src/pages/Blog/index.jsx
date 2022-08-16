import React from "react";
import Banner from "../../components/BannerWithTitle";
import { Container, Paper } from "@mui/material";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <>
      <Banner title={"Our Blogs"} />
      <Container>
        <Paper sx={{ display: "flex", flexWrap: "wrap", p: 3, gap: 2, mt: 2 }}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Paper>
      </Container>
    </>
  );
}

export default Blog;
