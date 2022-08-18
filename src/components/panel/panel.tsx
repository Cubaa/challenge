import React, { FC } from "react";
import { Accordion } from "@mui/material";
import { PanelForm } from "./panel-form/panel-form";
import { PanelHeader } from "./panel-header/panel-header";
import { panelStyle } from "./panel.styled";

export const Panel: FC = () => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleClick = (): void => {
    setExpanded((expanded: boolean) => !expanded);
  };

  return (
    <>
      <Accordion expanded={expanded} sx={panelStyle}>
        <PanelHeader handleClick={handleClick} />
        <PanelForm />
      </Accordion>
    </>
  );
};
