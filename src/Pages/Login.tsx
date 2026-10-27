import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { grey, lightBlue } from '@mui/material/colors';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

type LoginFormValues = {
    name: string;
};

export default function Login() {

    const { t, i18n } = useTranslation();
    const {
        register,
        handleSubmit,
    } = useForm<LoginFormValues>({
        mode: "onBlur",
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = (data: LoginFormValues) => {
        onLogin(data.name.trim());
    };
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ height: '100vh', width: '100%', bgcolor: lightBlue[50], display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                <Box sx={{
                    width: '960px',
                    height: '560px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: "center", width: '100%', height: '100%', }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', margin: 5, width: '50%', height: '100%' }}>

                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontSize: 32, display: "flex", alignContent: 'center', justifyContent: 'center', margin: 10
                                }}
                            >
                                {t("login.title")}
                            </Typography>

                            <TextField sx={{ display: "flex", alignContent: 'center', justifyContent: 'center', width: '100%', marginBottom: 20 }}
                                label={t("login.nameRequired")}
                                variant="outlined"
                                {...register("name", {
                                    required: 'Name is required' ,
                                })}
                            ></TextField>
                            <Button variant="contained" >{t("login.submit")}</Button>
                        </Box>
                        <Box sx={{ bgcolor: '#c7dbe4', width: '50%', height: '100%', display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}>
                            <Box
                                component="img"
                                src='/img/dc5674da7415fc93ad3656c3d4ca4a2379e80c63.png'
                                alt="imge1"

                                sx={{ position: 'absolute', top: 1, right: 0, width: 250 }}
                            >
                            </Box>

                            <Box
                                component="img"
                                src='/img/06509ff97ca4966e34e878881cc49db475d84799.png'
                                alt="imge2"

                                sx={{ position: 'absolute', width: 250, left: 0 }}

                            >
                            </Box>
                            <Box
                                component="img"
                                src='/img/52e7a10c792d6dd947742b32d669accc2f1a969a.png'
                                alt="imge3"
                                sx={{ position: 'absolute', right: 0, bottom: 0, width: 250 }}
                            >
                            </Box>

                        </Box>
                    </Box>
                </Box>
                <TextField
                    select
                    label={t("login.language")}
                    defaultValue={10}
                    variant="standard"
                    sx={{ m: 2, width: '25ch', marginTop: 2 }}
                >
                    <MenuItem value={10} onClick={() => void i18n.changeLanguage("en")} >{t("login.languageEn")} </MenuItem>
                    <MenuItem value={20} onClick={() => void i18n.changeLanguage("fa")}>{t("login.languageFa")}</MenuItem>

                </TextField>
            </Box>
        </form>

    )
}