import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import { User } from "../../store/ducks/users/types";
import * as UserActions from "../../store/ducks/users/actions";
import { ApplicationState } from "../../store";
import { TableList } from "../commons";

interface StateProps {
	users: User[];
}

interface DispatchProps {
	userListRequest(): void;
}

type Props = StateProps & DispatchProps;

class UserList extends Component<Props> {
	componentDidMount = () => {
		const { userListRequest } = this.props;

		userListRequest();
	};

	render() {
		const { users } = this.props;
		return <TableList users={users} />;
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
