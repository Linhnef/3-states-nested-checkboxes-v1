import { Checkbox, FormControlLabel } from "@mui/material"
import { CHECKED } from "../../type"
import { ChangeEvent } from "react"

type Props = {
    checked : CHECKED,
    handleParentChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void,
    index: number,
    label: string
}

export const PrimaryCheckBox = ({checked, handleParentChange, index, label}: Props) => {
    return  <FormControlLabel
                control={<Checkbox
                    indeterminate={checked === CHECKED.INDETERMINATE}
                    checked={checked === CHECKED.CHECKED}
                    onChange={(e) => {
                        handleParentChange(e, index)
                    }}
                />} 
                label={label} 
            />
}