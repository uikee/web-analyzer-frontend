import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_PORT;

export const analyzePage = async (url: string) => {
    const response = await axios.get(`${API_BASE_URL}/analyze`, {
        params: { url },
    });
    return response.data;
};