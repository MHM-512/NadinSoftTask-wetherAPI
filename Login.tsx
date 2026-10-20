import { Box, Button, TextField, Typography } from "@mui/material";

import { grey,lightBlue } from '@mui/material/colors';
export default function Login() {

    return (
        <>
            <Box sx={{ height: '100vh', width: '100%', bgcolor: lightBlue[50], display : 'flex'  , flexDirection : "column" , justifyContent : "center" , alignItems : 'center'} }>
                <Box sx={{
                    // boxSizing:'border-box',
                    width: '960px',
                    height: '560px',
                    // top : 0 , 
                    // right : 0 , 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",
                    // borderRadius: 12,
                }}>
                    <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: "center", width: '100%', height: '100%',  }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', margin: 5, width: '50%', height: '100%'}}>

                            <Typography variant="subtitle1" sx={{ fontSize: 32, display: "flex", alignContent: 'center', justifyContent: 'center', margin: 10 }} > Login </Typography>

                            <TextField sx={{ display: "flex", alignContent: 'center', justifyContent: 'center', width: '100%', marginBottom: 20 }}
                                label="Enter Your Name"
                                variant="outlined"
                            ></TextField>
                            <Button variant="contained" >LOGIN</Button>
                        </Box>
                        <Box sx={{ bgcolor: '#c7dbe4', width: '50%', height: '100%', display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}>
                            <Box
                                component="img"
                                src='../public/image/06509ff97ca4966e34e878881cc49db475d84799.png'
                                alt="imge1"

                                sx={{ position: 'absolute', top: 1, right: 0, width: 250 }}
                            >
                            </Box>
                           
                            <Box
                                component="img"
                                src='../public/image/52e7a10c792d6dd947742b32d669accc2f1a969a.png'
                                alt="imge2"

                                sx={{ position: 'absolute', width: 250, left: 0 }}

                            >
                            </Box>
                            <Box
                                component="img"
                                src='../public/image/dc5674da7415fc93ad3656c3d4ca4a2379e80c63.png'
                                alt="imge3"

                                sx={{ position: 'absolute', right: 0, bottom: 0, width: 250 }}
                            >
                            </Box>

                        </Box>
                    </Box>
                </Box>
                <TextField
                    select
                    label="Language"
                    defaultValue={10}
                    variant="standard"
                    sx={{ m: 1, width: '25ch' }}
                >
                    <option value={10}>English</option>
                    <option value={20}>farsi</option>

                </TextField>
            </Box>
        </>
    )
}