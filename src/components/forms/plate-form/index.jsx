import React from 'react';
import useForm from '../../../hooks/useForm';
import { densities } from '../../../utils/data';

const PlateForm = ({ init, handleForm }) => {
	const {
		formState: state,
		handleChange,
		handleSubmit,
	} = useForm({ init, validate: true });

	const cb = ({ values }) => {
		handleForm(values);
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
						value={state.material.value}
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
						type={'number'}
						name="density"
						id="density"
						disabled
						value={densities[state.material.value]}
					/>
				</div>
				<div>
					<label htmlFor="len">Length (m)</label>
					<input
						onChange={handleChange}
						type="number"
						name="len"
						id="len"
						value={state.len.value}
					/>
				</div>
				<div>
					<label htmlFor="width">Width (m)</label>
					<input
						onChange={handleChange}
						type="number"
						name="width"
						id="width"
						value={state.width.value}
					/>
				</div>
				<div>
					<label htmlFor="thickness">Thickness (mm)</label>
					<input
						onChange={handleChange}
						type="number"
						name="thickness"
						id="thickness"
						value={state.thickness.value}
					/>
				</div>
				<div>
					<label htmlFor="quantity">Quantity (pcs)</label>
					<input
						onChange={handleChange}
						type="number"
						name="quantity"
						id="quantity"
						value={state.quantity.value}
					/>
				</div>
				<button type="submit">Calculate</button>
			</form>
		</div>
	);
};

export default PlateForm;
