import React from 'react';
import PropTypes from 'prop-types';

// Components
import DataTable from '../../components/data-table';
import TextCell from '../../components/data-table/text-cell';
import InputCell from '../../components/data-table/input-cell';
import ActionCell from '../../components/data-table/actions-cell';

// Assets
import { icons } from '../../assets';

const ItemList = ({
	inCompletedItems,
	totalCosts,
	updateShoppingItems,
	deleteItemHandler,
	toggleComplete,
	updateCost,
}) => {
	// Local Variables
	const theadItems = [
		<TextCell
			key='name'
			text={`Item Name (${inCompletedItems.length})`}
			as='th'
		/>,
		<TextCell key='quantity' text='Quantity' as='th' />,
		<TextCell key='costs' text='Costs' as='th' />,
		<TextCell
			key='actions'
			text='Actions'
			as='th'
			className='align-right'
		/>,
	];

	const tbodyItems = inCompletedItems.map((item) => [
		<TextCell key={`name-${item.id}`} text={item.name} />,
		<InputCell
			key={`quantity-${item.id}`}
			value={item.quantity}
			id={item.id}
			name='quantity'
			updateData={(value, name) => {
				if (value) {
					updateShoppingItems({
						itemID: item.id,
						key: name,
						value,
					});
					return {
						error: false,
					};
				}
				return {
					error: true,
					msg: 'Invalid Quantity',
				};
			}}
		/>,
		<InputCell
			key={`price-${item.id}`}
			value={item.price.toFixed(2)}
			id={item.id}
			name='price'
			unit='BDT'
			updateData={(value, name) => {
				value = parseFloat(value);
				if (value && value < 1000000000) {
					updateShoppingItems({
						itemID: item.id,
						key: name,
						value,
					});
					return {
						error: false,
					};
				}
				return {
					error: true,
					msg: 'Invalid Price',
				};
			}}
		/>,
		<ActionCell
			key={`action-${item.id}`}
			className='align-right'
			actions={[
				{
					name: 'Delete',
					icon: icons.deleteIcon,
					handler: () => deleteItemHandler(item.id),
				},
				{
					name: 'Complete',
					icon: icons.tickIcon,
					handler: () => {
						toggleComplete(item.id);
						updateCost(totalCosts + item.price);
					},
				},
			]}
		/>,
	]);

	return (
		<section className='section table no-print __shadow--sm'>
			<DataTable theadItems={theadItems} tbodyItems={tbodyItems} />
		</section>
	);
};

ItemList.propTypes = {
	inCompletedItems: PropTypes.array.isRequired,
	totalCosts: PropTypes.number.isRequired,
	updateShoppingItems: PropTypes.func.isRequired,
	deleteItemHandler: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	updateCost: PropTypes.func.isRequired,
};

export default ItemList;
