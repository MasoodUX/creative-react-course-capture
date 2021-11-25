import { createGlobalStyle } from "styled-components"



const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box
}
body{
    background:#1b1b1b
}
button{
    font-weight:bold;
    font-size:1.1rem;
    cursor:pointer;
    padding:1rem 2rem;
    border:3px solid #23d997;
    color:#fff;
    background:transparent;
    transition:all 0.5s ease;
    &:hover{
        background-color:#23d997;
        color:#fff;
    }
}
h2{
    color:#fff;
}
p{
    padding:3rem 0rem;
    color:#ccc;
    font-size:1.4rem;
    line-height:150%
}
h3{
    color:#fff;
}
span{
      font-weight:bold;
color:#23d997
}
h4{
    font-weight:bold;

}
1{
    font-size:1.1rem
}
`

export default GlobalStyle