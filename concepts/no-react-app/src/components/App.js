import Counter from "./Counter.js";
import Wrapper from "./Wrapper.js";

// Just an IIFE to bootstrap the app
export const App = (() => {
	Wrapper(Counter());
})();
