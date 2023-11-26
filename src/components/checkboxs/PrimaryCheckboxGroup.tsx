import { AccordionDetails } from "@mui/material"
import { CHECKED, CheckBoxGroupType } from "../../type"
import Box from '@mui/material/Box';
import { ChangeEvent, SetStateAction } from "react";
import { PrimaryCheckboxChildrenGroup } from "./PrimaryCheckboxChildrenGroup";
import { AccordionExpandByClick } from "../Accordions/AccordionExpandByClickIcon";
import { AccordionSummaryWithCheckBox } from "./components/AccordionSummaryWithCheckBox";
import { changeCheckedAllItems } from "../../utils";


type Props = {
    checkGroups: CheckBoxGroupType[]
    setCheckGroups: (data: SetStateAction<CheckBoxGroupType[]>) => void
}

export const PrimaryCheckboxGroup = ({ checkGroups, setCheckGroups } : Props) => {

    const handleParentChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const isChecked = e.target.checked ? CHECKED.CHECKED : CHECKED.UN_CHECKED;
        setCheckGroups((prev) => {
            const clone = JSON.parse(JSON.stringify(prev)) as CheckBoxGroupType[]
            clone[index].checked = isChecked
            clone[index].items = changeCheckedAllItems((clone[index].items ?? []), isChecked)
            return clone
        })
    }

    const handleChildrenArrayChange = (items: CheckBoxGroupType[], index: number) => {
        setCheckGroups((prev) => {
            const clone = JSON.parse(JSON.stringify(prev)) as CheckBoxGroupType[]
            clone[index].items = items
            return clone
        })
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
                    <AccordionExpandByClick
                        checked={item.checked} 
                        handleParentChange={handleParentChange} 
                        index={index} 
                        label={item.label}
                    >
                         <AccordionDetails>
                            <PrimaryCheckboxChildrenGroup checkGroups={item.items ?? []} index={index} setChildrenCheckGroups={handleChildrenArrayChange} />
                        </AccordionDetails>
                    </AccordionExpandByClick>
            }
        </div>)
    }
    </Box>
}