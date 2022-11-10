import React, { useState } from 'react';
import { materials } from '../../../utils/data';
import PlateForm from '../plate-form';

const MainForm = () => {
	const [material, setMaterial] = useState('');

	const handleMaterial = (e) => {
		setMaterial(e.target.value);
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
			{material === 'plate' && <PlateForm />}
		</div>
	);
};

export default MainForm;
