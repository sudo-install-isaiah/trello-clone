import { createElement as h } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardView from "./components/BoardView";
import TaskView from "./components/TaskView";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

const AppRoutes = () => {
	return h(
		Router,
		null,
		h(
			Routes,
			null,
			h(Route, { path: "/", element: h(Dashboard) }),
			h(Route, { path: "/board/:boardId", element: h(BoardView) }),
			h(Route, { path: "/task/:taskId", element: h(TaskView) }),
			h(Route, { path: "/settings", element: h(Settings) })
		)
	);
};

export default AppRoutes;
