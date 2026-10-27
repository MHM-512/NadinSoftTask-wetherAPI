import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const client = axios.create({
    baseURL: "https://api.openweathermap.org",
    timeout: 10000,
});
export interface CityLocation {
    name: string;
    country: string;
    lat: number;
    lon: number;
}

export interface CurrentWeather {
    name: string;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
    };
}

export interface ForecastItem {
    dt: number;
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
    };
    weather: {
        id: number;
        description: string;
        icon: string;
    }[];
    dt_txt: string;
}

export interface ForecastResponse {
    list: ForecastItem[];
    city: {
        name: string;
        country: string;
        timezone: number;
    };
}

export async function searchCities(
    city: string
): Promise<CityLocation[]> {
    const { data } = await client.get<CityLocation[]>(
        "/geo/1.0/direct",
        {
            params: {
                q: city,
                limit: 5,
                appid: API_KEY,
            },
        }
    );

    return data;
}

export async function getCurrentWeather(
    lat: number,
    lon: number,
    language: "fa" | "en" = "en"
): Promise<CurrentWeather> {
    const { data } = await client.get<CurrentWeather>(
        "/data/2.5/weather",
        {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units: "metric",
                lang: language,
            },
        }
    );

    return data;
}

export async function getForecast(
    lat: number,
    lon: number,
    language: "fa" | "en" = "en"
): Promise<ForecastResponse> {
    const { data } = await client.get<ForecastResponse>(
        "/data/2.5/forecast",
        {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units: "metric",
                lang: language,
            },
        }
    );

    return data;
}
