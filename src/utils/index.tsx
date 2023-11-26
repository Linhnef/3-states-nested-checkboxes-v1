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