import React from "react";
import { shallow } from "enzyme";
import Page from "./index";

describe("<Page /> component", () => {
	it("render correctly", () => {
		const wrapper = shallow(<Page />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper).toHaveLength(1);
	});
});
