
// 1 : checked | 0 : unchecked | -1 : indeterminate

export enum CHECKED {
    CHECKED = 1,
    UN_CHECKED = 0, 
    INDETERMINATE = -1,
}

export type CheckBoxGroupType = {
    label: string,
    checked: CHECKED,
    items?: CheckBoxGroupType[]
}