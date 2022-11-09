import React, { useState } from 'react';

const init = {
	material: { name: 'steel', density: 7850 },
	len: 1,
	width: 1,
	thickness: 1,
	quantity: 1,
};

const App = () => {
	const [state, setState] = useState(init);
	const [weight, setWeight] = useState(0);

	const weightCalculation = (state) => {
		const lenNum = parseFloat(state.len);
		const widthNum = parseFloat(state.width);
		const thicknessNum = parseFloat(state.thickness);
		const quantityNum = parseInt(state.quantity);
		const densityNum = parseFloat(state.material.density);

		const result =
			lenNum * widthNum * (thicknessNum / 1000) * quantityNum * densityNum;

		return result;
	};

	const handleChange = (e) => {
		setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setWeight(weightCalculation(state));
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="material">Material type</label>
					<select onChange={handleChange} name="material" id="material">
						<option value="steel">Steel</option>
					</select>
				</div>
				<div>
					<label htmlFor="density">
						Density (kg/m<sup>2</sup>)
					</label>
					<input
						type={'number'}
						name="density"
						id="density"
						disabled
						value={state.material.density}
					/>
				</div>
				<div>
					<label htmlFor="len">Length (m)</label>
					<input
						onChange={handleChange}
						type="number"
						name="len"
						id="len"
						value={state.len}
					/>
				</div>
				<div>
					<label htmlFor="width">Width (m)</label>
					<input
						onChange={handleChange}
						type="number"
						name="width"
						id="width"
						value={state.width}
					/>
				</div>
				<div>
					<label htmlFor="thickness">Thickness (mm)</label>
					<input
						onChange={handleChange}
						type="number"
						name="thickness"
						id="thickness"
						value={state.thickness}
					/>
				</div>
				<div>
					<label htmlFor="quantity">Quantity (pcs)</label>
					<input
						onChange={handleChange}
						type="number"
						name="quantity"
						id="quantity"
						value={state.quantity}
					/>
				</div>
				<button type="submit">Calculate</button>
			</form>
		</div>
	);
};

export default App;
