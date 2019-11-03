import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import { User } from "../../store/ducks/users/types";
import * as UserActions from "../../store/ducks/users/actions";
import { ApplicationState } from "../../store";
import UserItem from "../UserItem";

interface StateProps {
	users: User[];
}

interface DispatchProps {
	loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class UserList extends Component<Props> {
	componentDidMount = () => {
		const { loadRequest } = this.props;

		loadRequest();
	};

	render() {
		const { users } = this.props;
		console.log(users);
		return (
			<ul>
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</ul>
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
