export const makeDebounceFunction = () => {
	let timer: NodeJS.Timeout;

	return (callback: () => void, delay: number) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			callback();
		}, delay);
	};
};
