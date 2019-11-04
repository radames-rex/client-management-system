import React from "react";
import { Form } from "formik";
import { Link } from "react-router-dom";
import { Grid, TextField, Button, InputLabel, FormHelperText } from "@material-ui/core";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";

const UserForm = ({ values, handleSubmit, setFieldValue, errors, isValid }: any) => (
	<>
		{((values.id && values.name) || !values.id) && (
			<Form onSubmit={handleSubmit} autoComplete="off">
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<InputLabel htmlFor="name">Name</InputLabel>
						<TextField
							fullWidth
							value={values.name}
							onChange={e => setFieldValue("name", e.target.value)}
						/>
						<FormHelperText className="fieldErrorMessage" error={true}>
							{errors['name']}
						</FormHelperText>
					</Grid>
					<Grid item xs={6}>
						<InputLabel htmlFor="email">Email</InputLabel>
						<TextField
							fullWidth
							value={values.email}
							onChange={e => setFieldValue("email", e.target.value)}
						/>
						<FormHelperText className="fieldErrorMessage" error={true}>
							{errors['email']}
						</FormHelperText>
					</Grid>
					<Grid item xs={6}>
						<InputLabel htmlFor="cpf">CPF</InputLabel>
						<TextField
							fullWidth
							value={values.cpf}
							onChange={e => setFieldValue("cpf", e.target.value)}
						/>
						<FormHelperText className="fieldErrorMessage" error={true}>
							{errors['cpf']}
						</FormHelperText>
					</Grid>
					<Grid item xs={6}>
						<InputLabel htmlFor="phone">PHONE NUMBER</InputLabel>
						<TextField
							fullWidth
							value={values.phone}
							onChange={e => setFieldValue("phone", e.target.value)}
						/>
					</Grid>
					<Grid item xs={8} />
					<Grid item container spacing={2} xs={4}>
						<Grid item xs={6}>
							<Button
								fullWidth
								variant="contained"
								type="submit"
								color="primary"
								disabled={!isValid}
							>
								<SaveOutlinedIcon /> Salvar
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Link to={"/"}>
								<Button
									fullWidth
									variant="contained"
									type="button"
									color="default"
								>
									Cancelar
								</Button>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Form>
		)}
	</>
);

export default UserForm;
