const Button = ({ text, onClick }) => {
	const btnElement = document.createElement("button");
	btnElement.setAttribute("id", "btn");
	btnElement.innerText = text;

	btnElement.addEventListener("click", () => onClick());

	return btnElement;
};

export default Button;
