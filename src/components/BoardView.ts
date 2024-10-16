import { createElement as h } from "react";
import { useParams } from "react-router-dom";

const BoardView = () => {
	const { boardId } = useParams();

	return h("div", null, `Board ${boardId}`);
};

export default BoardView;
