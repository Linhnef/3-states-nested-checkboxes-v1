import { Accordion, AccordionDetails } from "@mui/material"
import { CHECKED, CheckBoxGroupType } from "../../type"
import styled from "styled-components";
import Box from '@mui/material/Box';
import { ChangeEvent } from "react";
import { AccordionSummaryWithCheckBox } from "./components/AccordionSummaryWithCheckBox";
import { AccordionExpandByClick } from "../Accordions/AccordionExpandByClickIcon";
import { changeCheckedAllItems } from "../../utils";

const AccordionItem = styled(Accordion)`
    .MuiPaper-root {
        box-shadow: none !important;
    }
`

type Props = {
    checkGroups: CheckBoxGroupType[]
    setChildrenCheckGroups: (data: CheckBoxGroupType[], index: number) => void
    index: number
}

export const PrimaryCheckboxChildrenGroup = ({ checkGroups, setChildrenCheckGroups, index } : Props) => {


    const handleParentChange = (e: ChangeEvent<HTMLInputElement>, cIndex: number) => {
        const isChecked = e.target.checked ? CHECKED.CHECKED : CHECKED.UN_CHECKED;
        const clone = JSON.parse(JSON.stringify(checkGroups)) as CheckBoxGroupType[]
        clone[cIndex].checked = isChecked
        clone[cIndex].items = changeCheckedAllItems((clone[cIndex].items ?? []), isChecked)
        setChildrenCheckGroups(clone, index)
    }

    const handleChildrenChange = (items: CheckBoxGroupType[], cIndex: number) => {
        const clone = JSON.parse(JSON.stringify(checkGroups)) as CheckBoxGroupType[]
        clone[cIndex].items = items
        setChildrenCheckGroups(clone, index)
    }

    return <Box>
    {
        checkGroups.map((item, index) => <div key={`${item.label}-${index}`}>
            {
                !(item.items ?? []).length ? 
                <AccordionSummaryWithCheckBox
                    index={index}
                    handleParentChange={handleParentChange}
                    checked={item.checked}
                    label={item.label}
                />
                :
                <AccordionItem>
                    <AccordionExpandByClick
                    checked={item.checked}
                    handleParentChange={handleParentChange}
                    index={index} label={item.label}
                    >
                    <AccordionDetails>
                        <PrimaryCheckboxChildrenGroup checkGroups={item.items ?? []} index={index} setChildrenCheckGroups={handleChildrenChange}  />
                    </AccordionDetails>
                    </AccordionExpandByClick>
                </AccordionItem>
            }
        </div>)
    }
    </Box>
}