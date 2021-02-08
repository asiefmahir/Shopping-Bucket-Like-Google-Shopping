import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ components }) => {
	return (
		<tr>
			{components.map((comp) => {
				return comp;
			})}
		</tr>
	);
};

Row.propTypes = {
	components: PropTypes.array.isRequired,
};

export default Row;
