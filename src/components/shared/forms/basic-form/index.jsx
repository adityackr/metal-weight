import React from 'react';
import { densities } from '../../../../utils/data';
import NumberInput from '../../../ui/number-input';
import SelectInput from '../../../ui/select-input';
import classes from './index.module.css';

const BasicForm = ({ onSubmit, handleChange, state, children, weight }) => {
	return (
		<div>
			<form className={classes.form} onSubmit={onSubmit}>
				<SelectInput
					handleChange={handleChange}
					label={'Material Type'}
					name={'material'}
					value={state.material}
				>
					{Object.keys(densities).map((m) => (
						<option key={m} value={m}>
							{m}
						</option>
					))}
				</SelectInput>
				<NumberInput
					handleChange={handleChange}
					label={`Density (kg/sq. m)`}
					name={'density'}
					value={densities[state.material]}
					disabled={true}
				/>

				{children}

				<NumberInput
					handleChange={handleChange}
					label={'Quantity (pcs)'}
					name={'quantity'}
					value={state.quantity}
				/>

				<button className={classes.btnSubmit} type="submit">
					Calculate
				</button>
			</form>
			{weight > 0 && (
				<div className={classes.total}>
					<p>Total weight is {weight} kg</p>
				</div>
			)}
		</div>
	);
};

export default BasicForm;
