import { useState } from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import "../locales/config.ts"
import DashboardPage from "../Pages/DashboardPage.tsx";
import LoginPage from "../Pages/Loginpage.tsx";
import Login from "../Pages/Login.tsx";

interface GeoLocation {
    name: string;
    lat: number;
    lon: number;
    country: string;
    state?: string;
    local_names?: Record<string, string>;
}

export default function App() {
     const [selectedCity, setSelectedCity] =
    useState<GeoLocation | null>({
      name: "Iran",
      country: "IR",
      lat: 35.6892,
      lon: 51.389,
    });

return (
    <>
    <Navbar
      selectedCity={selectedCity}
        onCitySelect={setSelectedCity}
        />
    <DashboardPage selectedCity={selectedCity} /> 
    {/* <LoginPage/> */}
    <Login/>
    
    
    </>
)
}
  


