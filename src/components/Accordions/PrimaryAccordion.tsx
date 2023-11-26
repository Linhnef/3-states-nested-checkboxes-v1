import { Accordion } from "@mui/material";
import styled from "styled-components";


export const PrimaryAccordion = styled(Accordion).attrs((props) => ({...props}))`
    .MuiPaper-root {
        box-shadow: none !important;
    }
`