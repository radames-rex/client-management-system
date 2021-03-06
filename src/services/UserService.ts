import api from "./api";

export default class UserService {
	index = () => api.get("users");
	create = (json: any) => api.post("users", json);
	update = (json: any) => api.put(`users/${json.id}`, json);
	destroy = (id: number) => api.delete(`users/${id}`);
}
