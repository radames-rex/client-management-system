import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { isValid as isValidCpf } from "@fnando/cpf";
import { Typography, Paper } from "@material-ui/core";

import { User } from "../../store/ducks/users/types";
import * as UserActions from "../../store/ducks/users/actions";
import { ApplicationState } from "../../store";
import { UserForm } from "../commons";
import "./styles.scss";

const validationSchema = Yup.object({
	name: Yup.string().required("O nome é obrigatório"),
	email: Yup.string().required("O email é obrigatório"),
	cpf: Yup.string()
		.required("O CPF é obrigatório")
		.test("cpf-is-valid", "O CPF deve ser válido", (cpf: String) => {
			return !!cpf ? isValidCpf(cpf) : true;
		})
});

interface StateProps {
	users: User[];
}

interface DispatchProps {
	userShowRequest(data: any): void;
	userUpdateRequest(data: any): void;
}

type Props = StateProps & DispatchProps;

class UserEdit extends Component<Props> {
	componentDidMount = () => {
		const { userShowRequest } = this.props;
		userShowRequest({ id: 1 });
	};

	update = (json: any) => {
		const { userUpdateRequest } = this.props;
		userUpdateRequest({ user: json });
	};

	render() {
		const { users } = this.props;
		console.log(users);
		return (
			<Paper className="editContent">
				<Typography variant="h6" gutterBottom>
					Edição do Cliente
				</Typography>
				<Formik
					render={props => <UserForm {...props} />}
					initialValues={users}
					validationSchema={validationSchema}
					enableReinitialize={true}
					onSubmit={(values, { setSubmitting }) => {
						this.update(values);
					}}
				/>
			</Paper>
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
)(UserEdit);
