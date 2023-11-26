import { CHECKED, CheckBoxGroupType } from "../../type"
import Box from '@mui/material/Box';
import { ChangeEvent } from "react";
import { changeCheckedAllItems, getParentCheckType } from "../../utils";
import { PrimaryCheckBox } from "./PrimaryCheckBox";
import styled from "styled-components";


type Props = {
    checkGroups: CheckBoxGroupType[]
    setChildrenCheckGroups: (data: CheckBoxGroupType[], index: number) => void
    index: number
}

const Container = styled(Box)`
    margin: 0 30px;
`

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
        clone[cIndex].checked = getParentCheckType(items ?? [])
        setChildrenCheckGroups(clone, index)
    }

    return <Container>
    {
        checkGroups.map((item, index) => <div key={`${item.label}-${index}`}>
            <PrimaryCheckBox
                index={index}
                handleParentChange={handleParentChange}
                checked={item.checked}
                label={item.label}
            />
            <PrimaryCheckboxChildrenGroup checkGroups={item.items ?? []} index={index} setChildrenCheckGroups={handleChildrenChange}  />
        </div>)
    }
    </Container>
}