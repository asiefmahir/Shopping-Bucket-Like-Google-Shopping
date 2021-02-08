import React from 'react';
import PropTypes from 'prop-types';

const TextCell = ({ text, className, as }) => {
	const As = as;
	return <As className={className}>{text}</As>;
};

TextCell.defaultProps = {
	className: '',
	as: 'td',
};

TextCell.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
	as: PropTypes.string,
};

export default TextCell;
