import React from "react";

import { User } from "../../store/ducks/users/types";

interface OwnProps {
	user: User;
}

export default function UserItem({ user }: OwnProps) {
	return <li>{user.name}</li>;
}
