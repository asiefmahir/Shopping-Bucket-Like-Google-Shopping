import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import CreateItem from '../../components/create-item';

// Hooks
import useShoppingItem from '../../hooks/useShoppingItem';

const AddShoppingItem = ({ searchTerm, changeSearchTerm }) => {
	// States
	const [itemName, setItemName] = useState('');

	// Hooks
	const { createItem } = useShoppingItem();

	useEffect(() => {
		if (!searchTerm) {
			setItemName('');
		}
	}, [searchTerm]);

	// Handlers
	const createHandler = (e) => {
		if (e.key === 'Enter') {
			if (itemName.length === 0) {
				alert('Item Name Can Not Be Empty');
			} else if (itemName.length > 30) {
				alert('Item Name Length is Too Big');
			} else {
				createItem(itemName);
				setItemName('');
			}
		}
	};

	return (
		<CreateItem
			searchOverlay
			showSuggestions
			value={itemName}
			onChange={(e) => {
				setItemName(e.target.value);
				changeSearchTerm(e.target.value);
			}}
			onKeyPress={(e) => createHandler(e)}
		/>
	);
};

export default AddShoppingItem;

AddShoppingItem.propTypes = {
	searchTerm: PropTypes.string.isRequired,
	changeSearchTerm: PropTypes.func.isRequired,
};
