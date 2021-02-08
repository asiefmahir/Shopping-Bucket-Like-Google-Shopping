import React from 'react';
import PropTypes from 'prop-types';

const ActionCell = ({ actions, className, as }) => {
	const As = as;
	return (
		<As className={className}>
			{actions.map((action) => {
				return (
					<button
						key={action.name}
						onClick={action.handler}
						className='icon-button'
					>
						<img
							className='icon-button__icon'
							src={action.icon}
							alt={action.name}
						/>
					</button>
				);
			})}
		</As>
	);
};

ActionCell.defaultProps = {
	className: '',
	as: 'td',
};

ActionCell.propTypes = {
	actions: PropTypes.array.isRequired,
	className: PropTypes.string,
	as: PropTypes.string,
};

export default ActionCell;
