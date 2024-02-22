import {useState} from 'react';
import { getMeApi, getUsersApi, addUserApi } from '../api/user';
export function useUser() {
    const {auth} = useAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState(null);

    const getMe = async (token) => {
        try {
            const response = await getMeApi(token);
            return response;
        }catch (error) { throw error; }
    }

    const getUsers = async () => {
        try {
            setLoading(true);
            //obtenemos un arreglo de objetos con los datos de todos los usuarios registrados para pintarlos en el datatable
            const response = await getUsersApi(auth.token);
            setLoading(false);

            console.log(response);
            setUsers(response);
            return response;
        }catch (error) { 
            setLoading(false);
            setError(error);
            //throw error; 
        }
    }

    const addUser = async (data) => {
        try {
            setLoading(true);
            await addUserApi(data, auth.token);
            setLoading(false);
        }catch (error) {setLoading(false),  setError(error); }
    }

    return { 
        //estados
        loading,
        error,
        users,
        //metodos
        getMe,
        getUsers,  
        addUser      
     };
}