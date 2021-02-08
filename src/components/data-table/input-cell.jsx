import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputCell = ({ value, unit, id, name, updateData, className, as }) => {
	const [editable, setEditable] = useState(false);
	const [tempValue, setTempValue] = useState(value);

	const checkValidity = (value, name) => {
		const { error, msg } = updateData(value, name);
		if (error) {
			alert(msg);
			return;
		}
		setTempValue('');
		setEditable(false);
	};

	const As = as;
	return (
		<As className={className}>
			<div className='table__item-input'>
				{editable ? (
					<input
						className='input__field--inline'
						onKeyPress={(e) => {
							if (e.key === 'Enter') {
								checkValidity(tempValue, e.target.dataset.name);
							}
						}}
						onBlur={(e) => {
							if (e.target.value) {
								checkValidity(tempValue, e.target.dataset.name);
							}
						}}
						value={tempValue}
						autoFocus
						onChange={(e) => {
							if (e.target.value.length <= 10) {
								setTempValue(e.target.value);
							} else {
								alert('Too Long Text');
							}
						}}
						data-id={id}
						data-name={name}
					/>
				) : (
					<span
						onClick={() => {
							setEditable(true);
							setTempValue(value);
						}}
						title='Click on Text to Edit'
					>{`${value} ${unit}`}</span>
				)}
			</div>
		</As>
	);
};

InputCell.defaultProps = {
	className: '',
	as: 'td',
	unit: '',
};

InputCell.propTypes = {
	value: PropTypes.string.isRequired,
	id: PropTypes.string,
	name: PropTypes.string,
	unit: PropTypes.string.isRequired,
	className: PropTypes.string,
	as: PropTypes.string,
	updateData: PropTypes.func,
};

export default InputCell;
