import { Button, styled, TextField } from "@mui/material";


export const StyledContainedBtn = styled(Button)({
    fontWeight: "bold",
    background: "#8601AF",
    marginTop: "20px",
    color: "#fff",
    ":hover": {
              background: "#C91BFE"
            }
})



export const StyledOutlinedBtn = styled(Button)({
    fontWeight: "bold",
    color: "#8601AF",
    borderColor: "#8601AF",
    marginTop: "20px",
    borderWidth: "2px",
    ":hover": {
      color: "#C91BFE",
      borderColor: "#C91BFE",
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



