import axios from "axios";

const instance = axios.create({
        baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1/",
        withCredentials: false
});

export const usersAPI = {
    getUsers(page = 1) {
        return instance.get(`users?page=${page}&count=6`);
    },
    submitUser(token, name, email, phone, position_id, photo) {
        const accessToken = token;

        const formData = new FormData();
        formData.append('token', token);
        formData.append('photo', photo);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('position_id', position_id);
        return instance.post(`users`, formData, {headers:{
            'Content-Type': 'multipart/form-data',
                'Token': accessToken
        }});
    }
}
export const positionsAPI = {
    getPositions() {
        return instance.get(`positions`);
    }
}
export const tokenAPI = {
    getToken() {
        return instance.get(`token`);
    }
}