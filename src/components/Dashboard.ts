import { createElement as h } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
	const boards = [
		{ id: 1, name: "Board 1" },
		{ id: 2, name: "Board 2" },
	];

	return h(
		"div",
		null,
		h("div", null, "Dashboard"),
		h(
			"ul",
			null,
			boards.map(board =>
				h(
					"li",
					{ key: board.id },
					h(Link, { to: `/board/${board.id}` }, board.name)
				)
			)
		)
	);
};

export default Dashboard;
