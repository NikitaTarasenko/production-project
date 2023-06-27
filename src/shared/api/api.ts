import axios from 'axios';
import { LOCAL_STORAGE_THEME_KEY } from '@/app/providers/ThemeProvider/lib/ThemeContext';

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || 'app_dark_theme';
    }
    return config;
});
