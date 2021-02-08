import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import useShoppingItems from '../../hooks/useShoppingItem';

// Assets
import { icons } from '../../assets';

const SearchOverlay = () => {
	const { createItem } = useShoppingItems();

	// State
	const searchItems = useStoreState((state) => state.suggestions.search);
	const searchTerm = useStoreState((state) => state.suggestions.searchTerm);
	const focus = useStoreState((state) => state.ui.searchOverlayFocus);

	// Actions
	const setFocus = useStoreActions(
		(actions) => actions.ui.setSearchOverlayFocus
	);
	const changeSearchTerm = useStoreActions(
		(actions) => actions.suggestions.changeSearchTerm
	);

	// Hooks
	useEffect(() => {
		if (searchTerm && searchItems.length > 0) {
			setFocus(true);
		} else {
			setFocus(false);
		}
	}, [searchTerm, setFocus, searchItems]);

	// Handlers
	const handleClick = (sug) => {
		if (createItem(sug.text, sug)) {
			changeSearchTerm('');
		}
	};

	return (
		<div
			className={
				focus
					? 'add-item__filter-overlay'
					: 'add-item__filter-overlay hide'
			}
		>
			<ul className='add-item__filter-list'>
				{searchItems.map((sug) => (
					<li
						key={sug.id}
						className='add-item__filter-item'
						onClick={() => handleClick(sug)}
					>
						<div className='add-item__filter-content'>
							<img
								className='add-item__filter-icon'
								src={icons.searchIcon}
								alt='Search Icon'
							/>
							{sug.text}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SearchOverlay;
