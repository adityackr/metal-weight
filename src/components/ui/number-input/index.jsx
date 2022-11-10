import React from 'react';
import classes from './index.module.css';

const NumberInput = ({
	label,
	handleChange,
	value,
	name,
	disabled = false,
}) => {
	return (
		<div className={classes.numberInput}>
			<label className={classes.label}>{label}</label>
			<input
				className={classes.input}
				onChange={handleChange}
				type={'number'}
				name={name}
				disabled={disabled}
				value={value}
			/>
		</div>
	);
};

export default NumberInput;
