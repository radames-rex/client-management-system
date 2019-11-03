import React from "react";
import { Link } from "react-router-dom";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	IconButton
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { User } from "../../../store/ducks/users/types";
import "./styles.scss";

interface OwnProps {
	users: User[];
}

const renderCommands = (id: Number) => {
	return (
		<>
			<Link to={`/edit/${id}`}>
				<IconButton aria-label="Edit">
					<EditIcon />
				</IconButton>
			</Link>

			<IconButton aria-label="Delete">
				<DeleteIcon />
			</IconButton>
		</>
	);
};

export default function UserItem({ users }: OwnProps) {
	return (
		<Paper>
			<Table className="table">
				<TableHead>
					<TableRow>
						<TableCell className="tableCell">Name</TableCell>
						<TableCell className="tableCell">Email</TableCell>
						<TableCell className="tableCell">CPF</TableCell>
						<TableCell className="tableCell">Phone Number</TableCell>
						<TableCell className="tableCell" />
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map(user => (
						<TableRow key={user.id}>
							<TableCell>{user.name}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.cpf}</TableCell>
							<TableCell>{user.phone}</TableCell>
							<TableCell>{renderCommands(user.id)}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
}
