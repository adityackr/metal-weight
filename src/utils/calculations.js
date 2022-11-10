import { densities } from './data';

export const plateWeight = (state) => {
	const lenNum = parseFloat(state.len);
	const widthNum = parseFloat(state.width);
	const thicknessNum = parseFloat(state.thickness);
	const quantityNum = parseInt(state.quantity);
	const densityNum = parseFloat(densities[state.material]);

	const result =
		lenNum * widthNum * (thicknessNum / 1000) * quantityNum * densityNum;

	return parseFloat(result.toFixed(2));
};
