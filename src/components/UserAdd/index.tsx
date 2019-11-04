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
	user: User;
}

interface DispatchProps {
	userCreateRequest(data: any): void;
}

type Props = StateProps & DispatchProps;

class UserAdd extends Component<Props> {
	save = (json: any) => {
		const { userCreateRequest } = this.props;
		userCreateRequest({ user: json });
	};

	render() {
    const { user } = this.props;

		return (
			<Paper className="addContent">
				<Typography variant="h6" gutterBottom>
					Novo Cliente
				</Typography>
				<Formik
					render={props => <UserForm {...props} />}
					initialValues={user}
					validationSchema={validationSchema}
					enableReinitialize={true}
					onSubmit={(values, { setSubmitting }) => {
						this.save(values);
					}}
				/>
			</Paper>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => ({
	user: {
		id: 0,
		name: '',
		email: '',
		cpf: '',
		phone: ''
	}
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(UserActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserAdd);
