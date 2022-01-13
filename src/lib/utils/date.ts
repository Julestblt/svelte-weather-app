export const getFormatedDate = (value) => {
	let date = new Date(value);
	let currentDay = new Date().toString().split(' ')[2];
	let dateTokens = date.toString().split(' ');
	if (parseInt(currentDay) + 1 === parseInt(dateTokens[2])) return 'Tomorrow';
	return `${dateTokens[0]}, ${dateTokens[2]} ${dateTokens[1]}`;
};
