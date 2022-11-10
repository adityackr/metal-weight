import React, { useState } from 'react';
import { materials } from '../../utils/data';
import PlateForm from '../plate-form';
import SelectInput from '../ui/select-input';
import classes from './index.module.css';

const MainForm = () => {
	const [material, setMaterial] = useState('');

	const handleMaterial = (e) => {
		setMaterial(e.target.value);
	};

	return (
		<div className={classes.mainForm}>
			<div>
				<SelectInput
					defaultValue={'heading'}
					handleChange={handleMaterial}
					name="materialType"
					customClass={classes.select}
				>
					<option disabled value={'heading'}>
						Select material
					</option>
					{Object.keys(materials).map((m) => (
						<option key={m} value={m}>
							{materials[m]}
						</option>
					))}
				</SelectInput>
			</div>
			{material === 'plate' && <PlateForm />}
		</div>
	);
};

export default MainForm;
