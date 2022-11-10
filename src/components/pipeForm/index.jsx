import React, { useState } from 'react';
import pipe from '../../assets/pipe.jpg';
import useForm from '../../hooks/useForm';
import { pipeWeight } from '../../utils/calculations';
import BasicForm from '../shared/forms/basic-form';
import NumberInput from '../ui/number-input';

const init = {
	material: 'steel',
	len: 1,
	dia: 1,
	thickness: 1,
	quantity: 1,
};

const PipeForm = () => {
	const [weight, setWeight] = useState(0);

	const { formState: state, handleChange, handleSubmit } = useForm({ init });

	const cb = () => {
		setWeight(pipeWeight(state));
	};

	return (
		<div>
			<BasicForm
				handleChange={handleChange}
				onSubmit={(e) => handleSubmit(e, cb)}
				state={state}
				weight={weight}
			>
				<img height={'200px'} src={pipe} alt="beam" />

				<NumberInput
					handleChange={handleChange}
					label={'Outside Diameter (mm)'}
					name={'dia'}
					value={state.dia}
				/>

				<NumberInput
					handleChange={handleChange}
					label={'Length (mm)'}
					name={'len'}
					value={state.len}
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

export default PipeForm;
