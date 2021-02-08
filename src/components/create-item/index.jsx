import React from 'react';
import PropTypes from 'prop-types';

// Components
import Suggestions from '../suggestions';
import SearchOverlay from './search-overlay';

// Assets
import { icons } from '../../assets';

const CreateItem = ({
	searchOverlay,
	showSuggestions,
	value,
	placeholder,
	onChange,
	onKeyPress,
}) => {
	return (
		<section className='section add-item no-print __shadow--sm'>
			<div className='add-item__relative'>
				<div className='add-item__input'>
					<img
						className='add-item__icon'
						src={icons.plusIcon}
						alt='Create New Bucket'
					/>
					<input
						className='add-item__input-field'
						type='text'
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						onKeyPress={onKeyPress}
					/>
				</div>
				{searchOverlay && <SearchOverlay text={value} />}
			</div>
			<div className='horizontal-line'></div>
			{showSuggestions && <Suggestions />}
		</section>
	);
};

export default CreateItem;

CreateItem.defaultProps = {
	searchOverlay: false,
	showSuggestions: false,
	placeholder: 'Press Enter to Add New Item',
};

CreateItem.propTypes = {
	searchOverlay: PropTypes.bool.isRequired,
	showSuggestions: PropTypes.bool.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onKeyPress: PropTypes.func,
};
