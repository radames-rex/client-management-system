import api from "./api";

export default class UserService {
	index = () => api.get("users");
	show = (id: Number) => api.get(`users/${id}`);
	create = (json: any) => api.post("users", json);
	update = (json: any) => api.put(`users/${json.id}`, json);
	destroy = (id: Number) => api.delete(`users/${id}`);
}
