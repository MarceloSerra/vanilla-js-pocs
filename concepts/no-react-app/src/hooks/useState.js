/**
 * A reinterpration of useState high-order function hook
 * without using complex hidden context features built in
 * @param {*} defaultValue
 * @returns {[Function, Function]}
 */

const useState = (defaultValue) => {
	/* 
    We have a variable _state and two closures (_getState and _setState)
    that access the lexical scope of useState and retrive or modify the variable
    */
	let _state = defaultValue;

	const _getState = () => _state;

	const _setState = (value) => (_state = value);

	/* We're returning a tuple with _getState instead _state
    to avoid declaring the return as let and keep it stateless
	 */
	return [_getState, _setState];
};

export default useState;
