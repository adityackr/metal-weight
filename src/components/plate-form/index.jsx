import React, { useState } from 'react';
import plate from '../../assets/plate.png';
import useForm from '../../hooks/useForm';
import { plateWeight } from '../../utils/calculations';
import BasicForm from '../shared/forms/basic-form';
import NumberInput from '../ui/number-input';

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

	const cb = () => {
		setWeight(plateWeight(state));
	};

	return (
		<div>
			<BasicForm
				handleChange={handleChange}
				onSubmit={(e) => handleSubmit(e, cb)}
				state={state}
				weight={weight}
			>
				<img width={'300px'} src={plate} alt="plate" />
				<NumberInput
					handleChange={handleChange}
					label={'Length (mm)'}
					name={'len'}
					value={state.len}
				/>

				<NumberInput
					handleChange={handleChange}
					label={'Width (mm)'}
					name={'width'}
					value={state.width}
				/>

				<NumberInput
					handleChange={handleChange}
					label={'Thickness (mm)'}
					name={'thickness'}
					value={state.thickness}
				/>
			</BasicForm>
		</div>
	);
};

export default PlateForm;
