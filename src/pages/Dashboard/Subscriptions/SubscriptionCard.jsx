import {
  Paper,
  Stack,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";
import React from "react";
import { colors } from "../../../mui_theme/theme";
function SubscriptionCard({ active, price, plan, planDetails }) {
  return (
    <Paper sx={{ py: 1, px: 2, maxWidth: 800, position: "relative" }}>
      <Stack gap={1} sx={{ width: "80%" }}>
        {active && (
          <Typography sx={{ fontSize: 28, fontWeight: 500, maxWidth: "40%" }}>
            Subscription Plan
          </Typography>
        )}
        <Stack sx={{}}>
          <Typography
            sx={{
              fontSize: 26,
              fontWeight: 500,
              color: colors.primary,
              //   wordWrap: "break-word",
              //   maxWidth: "40%",
            }}
          >
            {plan}
          </Typography>
          <Typography
            sx={{ color: "#444", maxWidth: "70%" }}
            variant="subtitle2"
          >
            {planDetails}
          </Typography>
        </Stack>

        <List
          sx={{
            listStyleType: "disc",
            // bgcolor: "blue",
            listStylePosition: "inside",
          }}
          dense={true}
        >
          <ListItem sx={{ display: "list-item", width: "fit-content" }}>
            Get fastest delivery of the ordered product
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Get exclusive details
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Get special offer valid for you
          </ListItem>
        </List>
        <Typography
          sx={{
            color: colors.primary,
            fontSize: 36,
            fontWeight: 500,
            position: "absolute",
            textAlign: "right",
            top: 10,
            right: 10,
          }}
        >
          &#8377; {price} /
          <Typography sx={{ display: "inline" }} variant="h6">
            month
          </Typography>
        </Typography>

        {!active && (
          <Button
            variant="contained"
            sx={{
              position: { xs: "static", sm: "absolute" },
              bottom: 10,
              right: 10,
              // alignSelf: "end",
              width: { xs: "50%", sm: "initial" },
            }}
          >
            Upgrade
          </Button>
        )}
      </Stack>
    </Paper>
  );
}

export default SubscriptionCard;
