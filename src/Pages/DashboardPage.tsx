
import {
    Box,
    TextField,
    Typography,
} from "@mui/material";
import RoomIcon from '@mui/icons-material/Room';
import TemperatureChart from "../components/TemperatureChart";
import ForecastDay from "../components/ForecastDay";
import { Footer } from "../components/Footer";


interface GeoLocation {
    name: string;
    lat: number;
    lon: number;
    country: string;
}

interface DashboardPageProps {
    selectedCity: GeoLocation | null;
}
{/* <h1>
    {selectedCity
        ? `Weather in ${selectedCity.name}`
        : "Select a location"}
</h1> */}

export default function DashboardPage({ selectedCity, }: DashboardPageProps) {
    return (
        <Box
            sx={{
                boxSizing: 'border-box',
                marginTop: '20px'
            }}
        >
            <Box
            sx={{
                display : 'flex ' , 
                alignItems  : 'center', 
                justifyContent : 'space-around' , 

            }}
            >
                {/* کارت آب‌وهوای فعلی  */}
                <Box
                    sx={{
                        width: '600px',
                        height: '230px',
                        bgcolor: '#E1E9EE',
                        borderRadius: '24px',
                        padding: 3
                    }}
                >
                    <Box
                        sx={{
                            width: '150px',
                            height: '25px',
                            display: 'flex ',
                            alignItems: 'center',
                            borderRadius: 50,
                            bgcolor: '#CDD9E0',
                            padding: "8px",


                        }}
                    >
                        <RoomIcon />
                        <Typography >
                            {selectedCity
                                ? `${selectedCity.name}`
                                : "Select a location"}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '20px'
                        }}
                    >
                        <Typography variant="h4"> Mondy </Typography>
                        <Box
                            component="img"
                            src="/img/Frame30.png"
                            sx={{
                                width: "100px"
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'start',
                            justifyContent: 'start',
                            gap: '20px'
                        }}
                    >
                        <Typography sx={{ fontSize: '14px' }}> 24 Dec, 2023 </Typography>
                        <Typography sx={{ fontSize: '14px' }}> 11:45 AM </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '10px'
                        }}
                    >
                        <Typography variant="h4"> 26 C </Typography>
                        <Typography variant="h4"> cloudy </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '10px'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <Typography sx={{ fontSize: '14px' }}> High: 27</Typography>
                            <Typography sx={{ fontSize: '14px' }}>  Low: 10</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '14px' }}> Feels Like 26 </Typography>
                    </Box>

                </Box>
                {/* Monthly temperature Chart*/}
                <Box>
                    <TemperatureChart />
                </Box>
            </Box>
            {/* Forecast 5 Day */}
            <Box 
            sx={{
                marginTop : "35px",
                marginBottom : '30px'
            }}
            >
                <ForecastDay/>
            </Box>
            <Footer/>
        </Box>
    );
}
