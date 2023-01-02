import {createTheme} from "@mui/material"


let theme;

 theme = createTheme ({

//palette is where the default colors are, primary secondary etc etc
 palette:{
    primary:{
        main: "#1760a5",
        light:"skyblue"
    },
   
    secondary:{
        main: "#15c630"
    },

    otherColor:{
        main: "#999"
    }
    
 }
})

export default theme