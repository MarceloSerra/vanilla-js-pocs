import useLocalStorage from "../hooks/useLocalStorage.js";
import Button from "./Button.js";
import Output from "./Output.js";

const Counter = () => {
	const [storedCounter, setStoredCounter] = useLocalStorage("counter", 0);

	const [OutputComponent, handleOutputComponentChange] = Output({
		value: storedCounter(),
	});

	const handleCounterChange = (value) => {
		setStoredCounter(value);
		handleOutputComponentChange(storedCounter());
	};

	const ButtonComponent = Button({
		text: "Click me!",
		onClick: () => handleCounterChange(+storedCounter() + 1),
	});

	return [OutputComponent, ButtonComponent];
};

export default Counter;
