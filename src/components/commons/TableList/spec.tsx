import React from "react";
import { shallow } from "enzyme";
import TableList from "./index";

describe("<TableList /> component", () => {
	it("render correctly", () => {
		const wrapper = shallow(
			<TableList users={[]} deleteUsers={(__: any) => __} />
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper).toHaveLength(1);
	});
});
