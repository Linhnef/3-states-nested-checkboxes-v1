import { Checkbox, FormControlLabel, Typography } from "@mui/material"
import { CHECKED } from "../../type"
import { ChangeEvent } from "react"
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import styled from "styled-components";

type Props = {
    checked : CHECKED,
    handleParentChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void,
    index: number,
    label: string,
    isExpand?: boolean
}

const FlexContainer = styled.div`
    display: flex;
`

const IconContainer = styled.div`
    margin-right: 10px;
`

export const PrimaryCheckBox = ({checked, handleParentChange, index, label, isExpand}: Props) => {
    return <>
        {
            checked === CHECKED.INDETERMINATE ? 
            <FlexContainer>
                <IconContainer>
                    {
                        isExpand ? <IndeterminateCheckBoxIcon /> :
                        <AddBoxIcon /> 
                    }
                </IconContainer>
                <Typography>{label}</Typography>
            </FlexContainer>
            :
            <FormControlLabel
                control={<Checkbox
                    checked={checked === CHECKED.CHECKED}
                    onChange={(e) => {
                        handleParentChange(e, index)
                    }}
                />} 
                label={label} 
            />
        }
    </>
}