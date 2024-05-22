// src/services/authService.ts
import axios from 'axios';

const API_URL = 'https://aws.amazon.com/'; // Replace with your backend API URL

export const register = async (username: string, email: string, password: string) => {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data;
};

export const login = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
};

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};