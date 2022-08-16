import React from "react";
import { Paper, Stack, Typography, Box } from "@mui/material";
import { colors } from "../../mui_theme/theme";

function Card({ title = "Plan", children, right = false }) {
  return (
    <Paper
      sx={{
        width: "100%",
        p: 1,
        maxWidth: 360,
        position: "relative",
        minHeight: 150,
        maxHeight: "fit-content",
      }}
    >
      <Stack justifyContent={"space-between"}>
        <Typography sx={{ fontSize: 26, fontWeight: 500, maxWidth: "80%" }}>
          {title}
        </Typography>
        <Box
          sx={{
            textAlign: "right",
            position: "absolute",
            bottom: !right ? 10 : 0,
            right: 10,
          }}
        >
          {!!right ? (
            <Typography
              sx={{
                fontSize: 44,
                fontWeight: 500,
                color: colors.primary,
                // lea,
              }}
            >
              {right}
            </Typography>
          ) : (
            children
          )}
        </Box>
      </Stack>
    </Paper>
  );
}

export default Card;
