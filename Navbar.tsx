import { Box, Button, TextField, MenuItem ,Typography, Toolbar } from "@mui/material";

export default function Navbar() {
    return (
        <>
        <Box  sx={{ flexGrow: 1 }} > 
            <Toolbar>
                <Box 
                component='img'
                src="../public/image/c7b17836c1b9887df3e25afc0d53fb274b8aca99"
                sx={{ width : '100'}}
                
                >
                </Box>
                    <Typography> Wether dashabord  </Typography>
            </Toolbar>
             <TextField
                    select
                    label="Language"
                    defaultValue={10}
                    variant="standard"
                    sx={{ m: 1, width: '25ch' }}
                >
                    <MenuItem  value={10}>iran</MenuItem>
                    <MenuItem  value={20}>londan</MenuItem>
                    <MenuItem  value={20}>londan</MenuItem>

                <Button > icone MUI
                    <MenuItem  value={20}>londan</MenuItem>
                    <MenuItem  value={20}>londan</MenuItem>
                    <MenuItem  value={20}>londan</MenuItem>

                     </Button>

                </TextField>
        </Box>
        </>
    )
}