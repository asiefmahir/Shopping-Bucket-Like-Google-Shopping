import React from 'react';
import PropTypes from 'prop-types';

/**
 * Our First Demo Component
 * @component
 * @example
 * const [name, setName] = React.useState('HM Nayem')
 * return <Demo name={name} onChange={() => setName(name)} />
 */
const Demo = ({ name, onChange }) => {
	return <input value={name} onChange={onChange} />;
};

Demo.propTypes = {
	/**
	 * Name: Input Value
	 */
	name: PropTypes.string.isRequired,
	/**
	 * onChange: Input Value Change Handler
	 */
	onChange: PropTypes.func.isRequired,
};

export default Demo;
