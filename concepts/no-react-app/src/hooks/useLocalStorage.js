import useState from "./useState.js";

/**
 * A interpretation of useLocalStorage high-order function hook
 * @param {*} key
 * @param {*} initialValue
 * @returns {[Function, Function]}
 */

const useLocalStorage = (key, initialValue) => {
	/* 
    We have a variable _storedOrInitialValue that retrieves the current value by key 
	or use the inital value
    */
	const _storedOrInitialValue =
		window.localStorage.getItem(key) ?? initialValue;

	/* 
    Here we use my useState implementation as an auxiliar to handle the storage state
    */
	const [_storedState, _setStoredState] = useState(_storedOrInitialValue);

	/* 
    Here we declare a closure _setStore that access the lexical scope of useLocalStorage 
	that modifies the _storedState and update the local storage
    */
	const _setStored = (value) => {
		_setStoredState(value);
		window.localStorage.setItem(key, _storedState());
	};

	return [_storedState, _setStored];
};

export default useLocalStorage;
