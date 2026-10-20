import { Box, Button, TextField, MenuItem, Typography, Toolbar } from "@mui/material";

export default function singe() {
    return (
        <>
            <Box sx={{ width: 220, height: 240 , borderRadius : 5, padding : 1, border: "solid 1px", display : 'flex' , flexDirection:'column' , justifyContent : 'center' , alignItems : 'center'  }}>
                <Typography variant="h6"> Mode </Typography>
                <Box>
                    <Button variant="contained"> lihgt </Button>
                    <Button> Darck </Button>
                </Box>
                <Typography variant="h6" sx={{marginTop : 1}}> Language </Typography>
                <Box sx={{marginBottom : 2}} >
                    <Button variant="contained">En </Button>
                    <Button> Fa </Button>
                </Box>
                <Button> Exit + icon </Button>
            </Box>
        </>
    )
}