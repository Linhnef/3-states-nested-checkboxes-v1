import { AccordionSummary } from "@mui/material";
import { ChangeEvent } from "react";
import styled from "styled-components";
import { CHECKED } from "../../../type";
import { PrimaryCheckBox } from "../PrimaryCheckBox";

const LabelContainer = styled.div`
    display: flex;
`;

type Props = {
    label: string
    handleParentChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void,
    checked: CHECKED,
    index: number
}

export const AccordionSummaryWithCheckBox = ({ handleParentChange, checked, index, label} : Props) => {
    return <AccordionSummary>
        <LabelContainer>
            {
                checked === CHECKED.INDETERMINATE ? "-" : <PrimaryCheckBox checked={checked} handleParentChange={handleParentChange} index={index} label={label} />
            }
        </LabelContainer>
    </AccordionSummary>
}