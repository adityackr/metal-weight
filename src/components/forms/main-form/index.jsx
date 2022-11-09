import React, { useState } from 'react';
import { densities, materials } from '../../../utils/data';
import PlateForm from '../plate-form';

const init = {
	material: 'steel',
	len: 1,
	width: 1,
	thickness: 1,
	quantity: 1,
};

const MainForm = () => {
	const [inits, setInits] = useState({ ...init });
	const [material, setMaterial] = useState('');
	const [weight, setWeight] = useState(0);

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

	const handleMaterial = (e) => {
		setMaterial(e.target.value);
	};

	const handleForm = (inits) => {
		setInits(inits);
		setWeight(weightCalculation(inits));
	};

	return (
		<div>
			<div>
				<select
					defaultValue={'heading'}
					onChange={handleMaterial}
					name="materialType"
					id="materialType"
				>
					<option disabled value={'heading'}>
						Choose you material type
					</option>
					{Object.keys(materials).map((m) => (
						<option key={m} value={m}>
							{materials[m]}
						</option>
					))}
				</select>
			</div>
			{material === 'plate' && (
				<PlateForm init={inits} handleForm={() => handleForm(inits)} />
			)}
		</div>
	);
};

export default MainForm;
