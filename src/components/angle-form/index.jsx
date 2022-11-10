import React, { useState } from 'react';
import angle from '../../assets/angle.gif';
import useForm from '../../hooks/useForm';
import { angleWeight } from '../../utils/calculations';
import BasicForm from '../shared/forms/basic-form';
import NumberInput from '../ui/number-input';

const init = {
	material: 'steel',
	len: 1,
	height: 1,
	width: 1,
	thickness: 1,
	quantity: 1,
};

const AngleForm = () => {
	const [weight, setWeight] = useState(0);

	const { formState: state, handleChange, handleSubmit } = useForm({ init });

	const cb = () => {
		setWeight(angleWeight(state));
	};

	return (
		<div>
			<BasicForm
				handleChange={handleChange}
				onSubmit={(e) => handleSubmit(e, cb)}
				state={state}
				weight={weight}
			>
				<img height={'100px'} src={angle} alt="plate" />
				<NumberInput
					handleChange={handleChange}
					label={'Length (mm)'}
					name={'len'}
					value={state.len}
				/>

				<NumberInput
					handleChange={handleChange}
					label={'Height (mm)'}
					name={'height'}
					value={state.height}
				/>

				<NumberInput
					handleChange={handleChange}
					label={'Width (mm)'}
					name={'width'}
					value={state.width}
				/>
			</BasicForm>
		</div>
	);
};

export default AngleForm;
