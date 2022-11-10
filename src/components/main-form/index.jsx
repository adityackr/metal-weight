import React, { useState } from 'react';
import { materials } from '../../utils/data';
import AngleForm from '../angle-form';
import BeamForm from '../beam-form';
import ChannelForm from '../channel-form';
import PipeForm from '../pipeForm';
import PlateForm from '../plate-form';
import RoundBarForm from '../roundbar-form';
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
			{material === 'angle' && <AngleForm />}
			{material === 'channel' && <ChannelForm />}
			{material === 'beam' && <BeamForm />}
			{material === 'roundBar' && <RoundBarForm />}
			{material === 'pipe' && <PipeForm />}
		</div>
	);
};

export default MainForm;
