import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import UserEdit from "./index";

describe("<UserEdit /> component", () => {
	it("render correctly", () => {
		const wrapper = shallow(
			<Provider store={{
				subscribe: (__: any) => __,
				dispatch:  (__: any) => __,
				getState:  (__: any) => __,
				replaceReducer:  (__: any) => __,
			}}>
				<UserEdit />
			</Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper).toHaveLength(1);
	});
});
