import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { User } from "../../store/ducks/users/types";
import * as UserActions from "../../store/ducks/users/actions";
import { ApplicationState } from "../../store";
import { TableList } from "../commons";
import { Button } from "@material-ui/core";

interface StateProps {
	users: User[];
}

interface DispatchProps {
	userListRequest(): void;
	userDestroyRequest(data: any): void;
}

type Props = StateProps & DispatchProps;

class UserList extends Component<Props> {
	componentDidMount = () => {
		const { userListRequest } = this.props;

		userListRequest();
	};

	handleDelete = (id: number) => {
		const { userDestroyRequest } = this.props;
		userDestroyRequest({ id: id });
	};

	render() {
		const { users } = this.props;
		return (
			<>
				<TableList users={users} deleteUsers={this.handleDelete} />
				<Link to={`/add`}>
					<Button fullWidth variant="contained" color="primary">
						Novo cliente
					</Button>
				</Link>
			</>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => ({
	users: state.users.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(UserActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList);
