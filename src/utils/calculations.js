import { densities } from './data';

export const plateWeight = (state) => {
	const lenNum = parseFloat(state.len) / 1000;
	const widthNum = parseFloat(state.width) / 1000;
	const thicknessNum = parseFloat(state.thickness) / 1000;
	const quantityNum = parseInt(state.quantity);
	const densityNum = parseFloat(densities[state.material]);

	const result = lenNum * widthNum * thicknessNum * quantityNum * densityNum;

	return parseFloat(result.toFixed(2));
};

export const angleWeight = (state) => {
	const len = parseFloat(state.len) / 1000;
	const width = parseFloat(state.width) / 1000;
	const height = parseFloat(state.height) / 1000;
	const thickness = parseFloat(state.thickness) / 1000;
	const quantity = parseFloat(state.quantity);
	const density = parseFloat(densities[state.material]);

	const result = len * (height + width) * thickness * quantity * density;

	return parseFloat(result.toFixed(2));
};
