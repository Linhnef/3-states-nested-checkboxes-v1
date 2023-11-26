import { AccordionSummary, IconButton } from "@mui/material";
import { ChangeEvent, ReactNode, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PrimaryAccordion } from "./PrimaryAccordion";
import { PrimaryCheckBox } from "../checkboxs/PrimaryCheckBox";
import { CHECKED } from "../../type";

type Props = {
    children: ReactNode,
    checked: CHECKED,
    handleParentChange: (e: ChangeEvent<HTMLInputElement>, cIndex: number) => void,
    index: number,
    label: string,
}

export const AccordionExpandByClick = ({children, checked, handleParentChange, index, label}: Props) => {
    const [expand, setExpand] = useState(false);
    const toggleAcordion = () => {
      setExpand((prev) => !prev);
    };

    return <PrimaryAccordion expanded={expand}>
        <AccordionSummary
            expandIcon={<IconButton onClick={toggleAcordion}><ExpandMoreIcon /></IconButton>}
        >
            <PrimaryCheckBox isExpand={expand} checked={checked} handleParentChange={handleParentChange} index={index} label={label} />
        </AccordionSummary>
        {children}
  </PrimaryAccordion>
}