import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Discover new products",
    description: `Search for the high-potential products in the largest humancurated CTD database. Narrow your search applying the industryspecific filter that helps sort products by GMP approvals, country of origin, dossier type, dossier status, stability, and other valuable features.`,
  },
  {
    label: "Get Offers from Manufacturers",
    description: "",
  },
  {
    label: "Connect with qualified manufacturers directly",
    description: ``,
  },
];

export default function VerticalLinearStepper() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={0} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <Typography sx={{ fontWeight: 500, fontSize: 25 }}>
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography sx={{ color: "#656565" }}>
                {step.description}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <Button variant="contained" sx={{ mt: 2, ml: 4 }}>
        Go to the Marketplace
      </Button>
    </Box>
  );
}
