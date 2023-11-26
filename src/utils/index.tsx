import { CHECKED, CheckBoxGroupType } from "../type";

// input: (checkGroups : array of CheckBoxGroupType, checked : type to change)
// output: (array updated)
export const changeCheckedAllItems = (checkGroups: CheckBoxGroupType[] ,checked: CHECKED) => {
    for (let i = 0; i < checkGroups.length; i++) {
        if(checkGroups[i].checked !== CHECKED.INDETERMINATE) {
            checkGroups[i].checked = checked
        }

        var currentItems = checkGroups[i].items

        if(currentItems) {
            changeCheckedAllItems(currentItems, checked)
        }
        checkGroups[i].items = currentItems
    }

    return checkGroups;
}

// input: (checkGroups : array of CheckBoxGroupType)
// output: (count item)
const countItems = (checkGroups: CheckBoxGroupType[]) => {
    var count = 0
    for (let i = 0; i < checkGroups.length; i++) {
        count += 1
        if(checkGroups[i].items) {
            count += countItems(checkGroups[i].items ?? [])
        }
    }
    return count
}

// input: (checkGroups : array of CheckBoxGroupType)
// output: (count checked item)
const countChecked = (checkGroups: CheckBoxGroupType[]) => {
    var count = 0
    for (let i = 0; i < checkGroups.length; i++) {

        if (checkGroups[i].checked === CHECKED.CHECKED) count += 1
        if(checkGroups[i].items) {
            count += countChecked(checkGroups[i].items ?? [])
        }
    }
    return count
}

// input: (checkGroups : array of CheckBoxGroupType)
// output: (parent check type)
export const getParentCheckType = (checkGroups: CheckBoxGroupType[]) => {
    const itemLength = countItems(checkGroups)
    const checkedLength = countChecked(checkGroups)
    console.log(checkGroups, itemLength, checkedLength)
    return checkedLength === 0 ? CHECKED.UN_CHECKED : checkedLength === itemLength ? CHECKED.CHECKED : CHECKED.INDETERMINATE
}