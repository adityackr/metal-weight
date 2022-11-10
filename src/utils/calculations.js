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

	const result =
		len * (height + width - thickness) * thickness * quantity * density;

	return parseFloat(result.toFixed(2));
};

export const channelWeight = (state) => {
	const len = parseFloat(state.len) / 1000;
	const width = parseFloat(state.width) / 1000;
	const height = parseFloat(state.height) / 1000;
	const webThickness = parseFloat(state.webThickness) / 1000;
	const flangeThickness = parseFloat(state.flangeThickness) / 1000;
	const quantity = parseFloat(state.quantity);
	const density = parseFloat(densities[state.material]);

	const heightVolume = (height - webThickness) * flangeThickness * 2 * len;
	const widthVolume = width * len * webThickness;

	const result = (heightVolume + widthVolume) * quantity * density;

	return parseFloat(result.toFixed(2));
};

export const beamWeight = (state) => {
	const len = parseFloat(state.len) / 1000;
	const width = parseFloat(state.width) / 1000;
	const height = parseFloat(state.height) / 1000;
	const webThickness = parseFloat(state.webThickness) / 1000;
	const flangeThickness = parseFloat(state.flangeThickness) / 1000;
	const quantity = parseFloat(state.quantity);
	const density = parseFloat(densities[state.material]);

	const heightVolume = (height - flangeThickness * 2) * webThickness * len;
	const widthVolume = width * len * flangeThickness * 2;

	const result = (heightVolume + widthVolume) * quantity * density;

	return parseFloat(result.toFixed(2));
};

export const roundBarWeight = (state) => {
	const len = parseFloat(state.len) / 1000;
	const dia = parseFloat(state.dia) / 1000;
	const quantity = parseFloat(state.quantity);
	const density = parseFloat(densities[state.material]);

	const result = 3.1416 * (dia / 2) ** 2 * len * quantity * density;

	return parseFloat(result.toFixed(2));
};

export const pipeWeight = (state) => {
	const len = parseFloat(state.len) / 1000;
	const dia = parseFloat(state.dia) / 1000;
	const thickness = parseFloat(state.thickness) / 1000;
	const quantity = parseFloat(state.quantity);
	const density = parseFloat(densities[state.material]);

	const result =
		3.1416 *
		len *
		((dia / 2) ** 2 - (dia / 2 - thickness) ** 2) *
		quantity *
		density;

	return parseFloat(result.toFixed(2));
};
