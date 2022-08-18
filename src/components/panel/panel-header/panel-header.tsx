import React, { FC } from "react";
import { AccordionSummary, Button, Grid, Typography } from "@mui/material";
import { headerButtonIconStyle, headerButtonStyle } from "../panel.styled";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import { IPanelHeaderProps } from "./panel-header.interface";

export const PanelHeader: FC<IPanelHeaderProps> = (props) => {
  const { handleClick } = props;

  return (
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold" color="#43413E">
          Personal Data
        </Typography>
        <Button
          variant="outlined"
          onClick={handleClick}
          disableRipple
          disableFocusRipple
          startIcon={<EditLocationIcon sx={headerButtonIconStyle} />}
          sx={headerButtonStyle}
        >
          change
        </Button>
      </Grid>
    </AccordionSummary>
  );
};
