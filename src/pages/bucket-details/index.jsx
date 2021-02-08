import React, { useEffect } from 'react';
import { useParams } from '@reach/router';
import { useStoreActions, useStoreState, useStoreRehydrated } from 'easy-peasy';
import Loader from 'react-loader-spinner';

// Components
import Nav from '../../components/nav';
import AddShoppingItem from './add-shopping-item';
import ItemList from './item-list';
import CompletedItemList from './completed-item-list';

// Hooks
import useShoppingItem from '../../hooks/useShoppingItem';

// Assets
import { brand } from '../../assets';

const BucketDetails = () => {
	// Route Params
	const { bucketID } = useParams();
	const { getShoppingItems } = useShoppingItem();
	// State
	const bucket = useStoreState((state) => state.buckets.items[bucketID]);
	const searchTerm = useStoreState((state) => state.suggestions.searchTerm);
	const searchOverlayFocus = useStoreState(
		(state) => state.ui.searchOverlayFocus
	);
	const isRehydrated = useStoreRehydrated();

	// Actions
	const removeShoppingIDFromBucket = useStoreActions(
		(actions) => actions.buckets.removeItem
	);
	const updateCost = useStoreActions((actions) => actions.buckets.updateCost);
	const removeShoppingItem = useStoreActions(
		(actions) => actions.shoppingItems.remove
	);
	const toggleComplete = useStoreActions(
		(actions) => actions.shoppingItems.toggleComplete
	);
	const updateShoppingItems = useStoreActions(
		(actions) => actions.shoppingItems.update
	);
	const changeSearchTerm = useStoreActions(
		(actions) => actions.suggestions.changeSearchTerm
	);
	const setSearchOverlayFocus = useStoreActions(
		(actions) => actions.ui.setSearchOverlayFocus
	);

	// Effects
	useEffect(() => {
		changeSearchTerm('');
	}, [changeSearchTerm]);

	// Handlers
	const deleteItemHandler = (itemID) => {
		removeShoppingItem(itemID);
		removeShoppingIDFromBucket({ bucketID: bucket.id, itemID });
	};

	// Local Variables
	const { completedItems, inCompletedItems } = getShoppingItems();

	return (
		<div
			onClick={() => {
				if (searchOverlayFocus) {
					setSearchOverlayFocus(false);
				}
			}}
		>
			<Nav
				brandLogo={brand.brandLogo}
				name={isRehydrated ? bucket.name : 'Stack Bucket'}
				showMenu
			/>

			{/* <!-- Main Page Content --> */}

			<main className='container __margin--ylg'>
				{isRehydrated ? (
					<>
						{/* Add New Item */}
						<AddShoppingItem
							searchTerm={searchTerm}
							changeSearchTerm={changeSearchTerm}
						/>
						{/* Item List */}
						<ItemList
							inCompletedItems={inCompletedItems}
							totalCosts={bucket.costs}
							updateShoppingItems={updateShoppingItems}
							deleteItemHandler={deleteItemHandler}
							toggleComplete={toggleComplete}
							updateCost={(costs) =>
								updateCost({ bucketID, costs })
							}
						/>
						{/* Completed List */}
						<CompletedItemList
							bucketID={bucketID}
							completedItems={completedItems}
							totalCosts={bucket.costs}
							toggleComplete={toggleComplete}
							deleteItemHandler={deleteItemHandler}
							updateCost={(costs) =>
								updateCost({ bucketID, costs })
							}
						/>{' '}
					</>
				) : (
					<Loader
						type='Puff'
						color='#00BFFF'
						height={100}
						width={100}
						timeout={3000} //3 secs
					/>
				)}
			</main>
		</div>
	);
};

export default BucketDetails;
