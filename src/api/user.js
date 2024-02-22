import axios from 'axios';
import { BASE_API } from '../utils/constants';

export async function loginApi(formValue) {
    try {
        const url = `${BASE_API}/api/auth/login/`;

        const response = await axios.post(url, formValue, {
            headers: {  'Content-Type': 'application/json',  },
        });

        if (response.status !== 200) {  throw new Error('Error en el login'); }

        return response.data;

    } catch (error) { throw error; }
}

export async function getMeApi(token) {
    try {
        const url = `${BASE_API}/api/auth/me/`;
        const params = {
            headers: { Authorization: `Bearer ${token}`, }
        }
        const response = await axios.get(url, params);
        return response.data;
    }catch (error) { throw error; }
}


export async function getUsersApi(token) {
    try {
        const url = `${BASE_API}/api/users/`;
        const params = {
            headers: { Authorization: `Bearer ${token}`, }
        }
        const response = await axios.get(url, params);
        return response.data;
    }catch (error) { throw error; }
}


export async function addUserApi(data, token) {
    try {
        const url = `${BASE_API}/api/users/`;

        const params = {
            headers: { 
                Authorization: `Bearer ${token}`, 
                'Content-Type': 'application/json',
            },
        }

        const response = await axios.post(url, data, params);

        return response.data;
        
    }catch (error) { throw error; }
}

export const getAllUsers = () => {
    return axios.get('http://localhost:8000/api/users/');
}