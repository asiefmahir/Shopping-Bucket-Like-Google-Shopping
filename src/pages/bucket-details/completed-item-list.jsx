import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import DataTable from '../../components/data-table';
import TextCell from '../../components/data-table/text-cell';
import ActionCell from '../../components/data-table/actions-cell';

// Assets
import { icons } from '../../assets';

const CompletedItemList = ({
	bucketID,
	completedItems,
	totalCosts,
	deleteItemHandler,
	toggleComplete,
	updateCost,
}) => {
	// State
	const [hideTableBody, setHideTableBody] = useState(false);

	// Handler

	// Local Variables
	const theadItems = [
		<TextCell
			key='name-com'
			text={`Item Name (${completedItems.length})`}
			as='th'
		/>,
		<TextCell key='quantity-com' text='Quantity' as='th' />,
		<TextCell key='costs-com' text='Costs' as='th' />,
		<ActionCell
			key='actions-com'
			as='th'
			className='align-right'
			actions={[
				{
					name: 'Print',
					icon: icons.printerWhiteIcon2,
					handler: () => window.print(),
				},
				{
					name: 'Hide Table',
					icon: icons.downArrowWhiteIcon,
					handler: () => setHideTableBody(!hideTableBody),
				},
			]}
		/>,
	];

	const tbodyItems = completedItems.map((item) => [
		<TextCell key={`name-${item.id}`} text={item.name} />,
		<TextCell key={`quantity-${item.id}`} text={item.quantity} />,
		<TextCell key={`price-${item.id}`} text={`${item.price} BDT`} />,
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
					icon: icons.upArrowIcon,
					handler: () => {
						toggleComplete(item.id);
						updateCost(totalCosts - item.price);
					},
				},
			]}
		/>,
	]);

	return (
		<section className='section table table--success __shadow--sm'>
			<DataTable
				theadItems={theadItems}
				tbodyItems={tbodyItems}
				hideTableBody={hideTableBody}
				noItemMsg='Press The Tick Icon with A Price to Mark It Complete'
			/>
			<section className='table__footer'>
				<div className='table__footer-content'>
					{/* <PrintTrigger /> */}
					Total: {totalCosts} BDT
				</div>
			</section>
		</section>
	);
};

CompletedItemList.propTypes = {
	totalCosts: PropTypes.number.isRequired,
	completedItems: PropTypes.array.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	deleteItemHandler: PropTypes.func.isRequired,
	updateCost: PropTypes.func.isRequired,
};

export default CompletedItemList;
