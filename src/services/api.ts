import axios from "axios";

const api = axios.create({
	baseURL: "https://private-7a4ec-radamesrex.apiary-mock.com"
});

export default api;
