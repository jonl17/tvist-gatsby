import { createGlobalStyle } from "styled-components"
import { styles } from "../../constants"

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
    }
    p {
        font-size: 20px;
        color: ${styles.Black};
    }
    h2 {
        font-size: 25px;
        color: ${styles.Red};
        text-transform: uppercase;
    }
`
