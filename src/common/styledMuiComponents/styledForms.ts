import { Button, styled, TextField } from "@mui/material";


export const StyledContainedBtn = styled(Button)({
    fontWeight: "bold",
    background: "#fece00",
    marginTop: "20px",
    color: "#0e0e0e",
    ":hover": {
              background: "#ff0"
            }
})



export const StyledOutlinedBtn = styled(Button)({
    fontWeight: "bold",
    color: "#fece00",
    borderColor: "#fece00",
    marginTop: "20px",
    borderWidth: "2px",
    ":hover": {
      color: "#ff0",
      borderColor: "#ff0",
      borderWidth: "2px",
    }
})

export const StyledInput = styled(TextField)({
    '& .MuiInputLabel-root': {
        color: "#fff",
    },
    '& .MuiInput-root': {
        '&:before, &:after':{
            borderColor: "#fff",
        },
    },
    '& .Mui-focused': {
        color: "#fff"
    },
    
})


// ':hover': {
//     borderColor: "#fff"
// }



