import React from "react";
import { shallow } from "enzyme";
import UserForm from "./index";

const VALUES = {
	id: 0,
	name: "",
	email: "",
	cpf: "",
	phone: ""
};

describe("<UserForm /> component", () => {
	it("render correctly", () => {
		const wrapper = shallow(<UserForm values={VALUES} errors={{}} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper).toHaveLength(1);
	});
});
