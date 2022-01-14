/**
 * Allow to delay a function.
 * @param func The function to delay
 * @param timeout The delay.
 * @returns The delayed function.
 */
const debounce = (func: Function, timeout = 250) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => func.apply(this, args), timeout);
	};
};

export { debounce };
