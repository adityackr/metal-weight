import React, { useState } from 'react';
import useForm from '../../../hooks/useForm';
import { densities } from '../../../utils/data';

const init = {
	material: 'steel',
	len: 1,
	width: 1,
	thickness: 1,
	quantity: 1,
};

const PlateForm = () => {
	const [weight, setWeight] = useState(0);

	const { formState: state, handleChange, handleSubmit } = useForm({ init });

	const weightCalculation = (state) => {
		const lenNum = parseFloat(state.len);
		const widthNum = parseFloat(state.width);
		const thicknessNum = parseFloat(state.thickness);
		const quantityNum = parseInt(state.quantity);
		const densityNum = parseFloat(densities[state.material]);

		const result =
			lenNum * widthNum * (thicknessNum / 1000) * quantityNum * densityNum;

		return parseFloat(result.toFixed(2));
	};

	const cb = () => {
		setWeight(weightCalculation(state));
	};

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e, cb)}>
				<div>
					<label htmlFor="material">Material type</label>
					<select
						onChange={handleChange}
						name="material"
						id="material"
						value={state.material}
					>
						{Object.keys(densities).map((m) => (
							<option key={m} value={m}>
								{m}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor="density">
						Density (kg/m<sup>2</sup>)
					</label>
					<input
						onChange={handleChange}
						type={'number'}
						name="density"
						id="density"
						disabled
						value={densities[state.material]}
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

export default PlateForm;
