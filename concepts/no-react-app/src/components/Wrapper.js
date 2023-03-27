const Wrapper = (...nodes) => {
	const wrapperElement = document.querySelector("#wrapper");

	const appendNodes = (nodes) => {
		nodes.forEach((node) => {
			Array.isArray(node)
				? appendNodes(node)
				: wrapperElement.appendChild(node);
		});
	};

	appendNodes(nodes);
};

export default Wrapper;
