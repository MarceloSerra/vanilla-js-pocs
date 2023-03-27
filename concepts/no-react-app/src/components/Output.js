const Output = ({ value }) => {
	const outputElement = document.createElement("p");
	outputElement.setAttribute("id", "output");

	const handleOutputChange = (value) => {
		outputElement.innerHTML = value;
	};

	handleOutputChange(value);

	return [outputElement, handleOutputChange];
};

export default Output;
