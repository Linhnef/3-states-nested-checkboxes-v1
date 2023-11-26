import { CHECKED, CheckBoxGroupType } from "../type";

export const mocks : CheckBoxGroupType[] = [
    {
        label: "Country 1",
        checked: CHECKED.CHECKED,
        items: [
            {
                label: "state 1.1",
                checked: CHECKED.CHECKED,
                items: []
            },
            {
                label: "state 1.2",
                checked: CHECKED.CHECKED,
                items: [
                    {
                        label: "state 1.2.1",
                        checked: CHECKED.CHECKED,
                        items: [
                            {
                                label: "state 1.2.1.1",
                                checked: CHECKED.CHECKED,
                                items: []
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        label: "Country 2",
        checked: CHECKED.INDETERMINATE,
        items: [
            {
                label: "state 2.1",
                checked: CHECKED.UN_CHECKED,
                items: []
            },
            {
                label: "state 2.2",
                checked: CHECKED.UN_CHECKED,
                items: [
                    {
                        label: "state 2.2.1",
                        checked: CHECKED.UN_CHECKED,
                        items: []
                    },
                ]
            },
        ]
    },
    {
        label: "Country 3",
        checked: CHECKED.CHECKED,
        items: [
            {
                label: "state 3.1",
                checked: CHECKED.CHECKED,
                items: []
            },
            {
                label: "state 3.2",
                checked: CHECKED.CHECKED,
                items: []
            },
        ]
    }
]

