import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (data) => {
		setInputValue(data);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if(inputValue.trim().length > 2) {
			setCategories(state => [inputValue, ...state]);
			setInputValue('');
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputValue}
				onChange={e => handleInputChange(e.target.value)}
			/>
		</form>
	)
}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
}