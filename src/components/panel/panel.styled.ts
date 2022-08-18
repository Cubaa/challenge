import { CSSObject } from "@mui/material";
import { CSSProperties } from "react";

export const panelStyle: CSSObject = {
  backgroundColor: "#FFF9EE",
};

export const inputStyle: CSSObject = {
  "& label.Mui-focused": {
    color: "#F18225",
  },
  "& .css-1a1fmpi-MuiInputBase-root-MuiInput-root.Mui-focused:after": {
    borderBottom: "2px solid #F9C699",
  },
  "& .MuiInputBase-root:hover > div .MuiButtonBase-root .MuiSvgIcon-root": {
    color: "#F18225",
  },
};

export const inputLabelStyle: CSSObject = {
  color: "#F18225",
  fontWeight: "bold",
};

export const inputPropsStyle: CSSProperties = {
  color: "#F17C1A",
  fontWeight: "bold",
};

export const formStyle: CSSObject = {
  backgroundColor: "transparent",
};

export const formButtonStyle: CSSObject = {
  color: "#F07510",
  fontWeight: "bold",
  "&:hover": {
    bgcolor: "transparent",
  },
};

export const headerButtonStyle: CSSObject = {
  border: "2px solid #F6AC6C",
  color: "#F07510",
  fontWeight: "bold",
  "&:hover": {
    bgcolor: "transparent",
    border: "2px solid #F6AC6C",
  },
};

export const headerButtonIconStyle: CSSObject = {
  color: "#EF6C00",
};
