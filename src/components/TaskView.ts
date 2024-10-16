import { createElement as h } from "react";
import { useParams } from "react-router-dom";

const TaskView = () => {
	const { taskId } = useParams();

	return h("div", null, `Task ${taskId}`);
};

export default TaskView;
