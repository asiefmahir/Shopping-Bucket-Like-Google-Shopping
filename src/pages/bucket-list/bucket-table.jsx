import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import DataTable from '../../components/data-table';
import TextCell from '../../components/data-table/text-cell';
import ActionCell from '../../components/data-table/actions-cell';
import BucketName from './bucket-name';

// Assets
import { icons } from '../../assets';

const BucketTable = ({ buckets, renameBucket, removeBucket }) => {
	// States
	const [editable, setEditable] = useState({});

	// Local Variables
	const theadItems = [
		<TextCell key='name' text='Bucket Name' as='th' />,
		<TextCell key='created' text='Created' as='th' />,
		<TextCell key='costs' text='Costs' as='th' />,
		<TextCell
			key='action'
			text='Actions'
			as='th'
			className='align-right'
		/>,
	];

	const tbodyItems = buckets.map((item) => [
		<BucketName
			bucket={item}
			editable={editable}
			renameBucket={renameBucket}
			setEditable={setEditable}
			key={`name-${item.id}`}
		/>,
		<TextCell
			key={`created-${item.id}`}
			text={item.created}
			className='text-secondary'
		/>,
		<TextCell key={`cost-${item.id}`} text={`${item.costs} BDT`} />,
		<ActionCell
			key={`action-${item.id}`}
			className='align-right'
			actions={[
				{
					name: 'Edit',
					icon: editable[item.id] ? icons.tickIcon : icons.editIcon,
					handler: () => {
						setEditable({
							...editable,
							[item.id]: !editable[item.id],
						});
					},
				},
				{
					name: 'Delete',
					icon: icons.deleteIcon,
					handler: () => removeBucket(item.id),
				},
			]}
		/>,
	]);

	return (
		<div className='section table __shadow--sm'>
			<DataTable theadItems={theadItems} tbodyItems={tbodyItems} />
		</div>
	);
};

BucketTable.propTypes = {
	buckets: PropTypes.array.isRequired,
};

export default BucketTable;
