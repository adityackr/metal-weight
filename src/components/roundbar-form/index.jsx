import React, { useState } from 'react';
import roundBar from '../../assets/round-bar.gif';
import useForm from '../../hooks/useForm';
import { roundBarWeight } from '../../utils/calculations';
import BasicForm from '../shared/forms/basic-form';
import NumberInput from '../ui/number-input';

const init = {
	material: 'steel',
	len: 1,
	dia: 1,
	quantity: 1,
};

const RoundBarForm = () => {
	const [weight, setWeight] = useState(0);

	const { formState: state, handleChange, handleSubmit } = useForm({ init });

	const cb = () => {
		setWeight(roundBarWeight(state));
	};

	return (
		<div>
			<BasicForm
				handleChange={handleChange}
				onSubmit={(e) => handleSubmit(e, cb)}
				state={state}
				weight={weight}
			>
				<img height={'200px'} src={roundBar} alt="beam" />
				<NumberInput
					handleChange={handleChange}
					label={'Length (mm)'}
					name={'len'}
					value={state.len}
				/>

				<NumberInput
					handleChange={handleChange}
					label={'Diameter (mm)'}
					name={'dia'}
					value={state.dia}
				/>
			</BasicForm>
		</div>
	);
};

export default RoundBarForm;
