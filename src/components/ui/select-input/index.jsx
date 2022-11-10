import React from 'react';
import classes from './index.module.css';

const SelectInput = ({
	children,
	handleChange,
	name,
	value,
	label,
	defaultValue,
	customClass,
}) => {
	return (
		<div className={classes.selectInput}>
			<label className={classes.label}>{label}</label>
			<select
				defaultValue={defaultValue}
				className={`${classes.select} ${customClass}`}
				onChange={handleChange}
				name={name}
				value={value}
			>
				{children}
			</select>
		</div>
	);
};

export default SelectInput;
