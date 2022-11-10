import React, { useState } from 'react';
import channel from '../../assets/channel.gif';
import useForm from '../../hooks/useForm';
import { channelWeight } from '../../utils/calculations';
import BasicForm from '../shared/forms/basic-form';
import NumberInput from '../ui/number-input';

const init = {
	material: 'steel',
	len: 1,
	height: 1,
	width: 1,
	webThickness: 1,
	flangeThickness: 1,
	quantity: 1,
};

const ChannelForm = () => {
	const [weight, setWeight] = useState(0);

	const { formState: state, handleChange, handleSubmit } = useForm({ init });

	const cb = () => {
		setWeight(channelWeight(state));
	};

	return (
		<div>
			<BasicForm
				handleChange={handleChange}
				onSubmit={(e) => handleSubmit(e, cb)}
				state={state}
				weight={weight}
			>
				<img height={'200px'} src={channel} alt="channel" />
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

				<NumberInput
					handleChange={handleChange}
					label={'Web Thickness (mm)'}
					name={'webThickness'}
					value={state.webThickness}
				/>

				<NumberInput
					handleChange={handleChange}
					label={'Flange Thickness (mm)'}
					name={'flangeThickness'}
					value={state.flangeThickness}
				/>
			</BasicForm>
		</div>
	);
};

export default ChannelForm;
