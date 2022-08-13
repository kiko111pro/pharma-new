import React from "react";
import {
  Typography as Text,
  Stack,
  Container,
  Divider,
  Rating,
} from "@mui/material";
import "./style.css";
import dummy from "../../assets/images/dummy.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";

function Banner() {
  return (
    <Stack direction={"row"} className={"banner"}>
      <Container maxWidth="xl">
        <Stack
          justifyContent={"space-between"}
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ sm: "center", xs: "flex-start" }}
        >
          <Stack spacing={1}>
            <Stack
              direction="row"
              justifyContent={"flex-start"}
              alignItems={"flex-end"}
              sx={{ float: "left" }}
            >
              <p
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "2.4rem",
                  // backgroundColor: "red",
                  textAlign: "left",
                  display: "inline-block",
                }}
                color="#fff"
              >
                Chemozone Pharma{" "}
                <sub style={{ fontSize: "1rem", display: "inline" }}>
                  (Manufacturer)
                </sub>
                {` `}
                <Text variant="subtitle1" color="#fff">
                  {` `}
                </Text>
              </p>
            </Stack>
            <Stack
              textAlign="center"
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
            >
              <Stack gap={1} direction="row" alignItems="center">
                <LocationOnIcon color="action" />
                <Text variant="subtitle2" color="#fff">
                  Panchkula, Haryana
                </Text>
              </Stack>
              <Divider flexItem orientation="verical" />
              <Stack gap={1} direction="row" alignItems="center">
                <CheckCircleIcon color="success" />
                <Text variant="subtitle2" color="#fff">
                  <strong>GST</strong> - FAD1322SDSAA
                </Text>
              </Stack>
              <Divider orientation="verical" />
              <Stack gap={1} direction="row" alignItems="center">
                <ThumbUpIcon color="action" />
                <Text color="#fff">4.8/5</Text>
                <Rating sx={{ color: "yellow" }} value={4} />
              </Stack>
            </Stack>
          </Stack>
          <img src={dummy} alt="dummy" className="banner__image" />
        </Stack>
      </Container>
    </Stack>
  );
}

export default Banner;
