import { Box, Typography } from "@mui/material";

export default function ForecastDay() {
    return (
        <>
            <Box sx={{
                margin: '0 auto',
                width: '1650px',
                height: '350px',
                bgcolor: '#E1E9EE',
                borderRadius: '24px',
                padding: 3,
                boxSizing: 'border-box'
            }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        top: 0
                    }}
                >
                    5 day Forecas
                </Typography>
                <Box
                    sx={{
                        display: 'flex ',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: "20px"
                    }}
                >
                    {/* انجا باید مپ زد  */}
                    <Box
                        sx={{
                            height: "220px",
                            width: "100px",
                            borderRadius: '24px',
                            bgcolor: '#CDD9E0',
                            padding: 2,
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: "center",
                            justifyContent : "space-around",

                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '24px',
                                borderBottom: '1px solid'
                            }}
                        >
                            day
                        </Typography>
                        <Box> icon </Box>
                        <Typography> temp </Typography>
                    </Box>
                </Box>

            </Box>

        </>
    )
}