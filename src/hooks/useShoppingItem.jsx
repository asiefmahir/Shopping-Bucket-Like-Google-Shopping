import { useParams } from '@reach/router';
import shortid from 'shortid';
import { useStoreActions, useStoreState, useStoreRehydrated } from 'easy-peasy';

const useShoppingItems = () => {
	// URL Params
	const { bucketID } = useParams();

	// States
	const isRehydrated = useStoreRehydrated();
	const bucket = useStoreState((state) => state.buckets.items[bucketID]);
	const shoppingItems = useStoreState((state) => state.shoppingItems.items);
	const suggestions = useStoreState((state) => state.suggestions.items);

	// Actions
	const addShoppingIDToBucket = useStoreActions(
		(actions) => actions.buckets.addItem
	);
	const createShoppingItem = useStoreActions(
		(actions) => actions.shoppingItems.create
	);
	const changeSearchTerm = useStoreActions(
		(actions) => actions.suggestions.changeSearchTerm
	);
	const addSuggestion = useStoreActions((actions) => actions.suggestions.add);
	const setSearchOverlayFocus = useStoreActions(
		(actions) => actions.ui.setSearchOverlayFocus
	);

	const isFound = (text) => {
		let isFound = false;
		bucket.shoppingItems.forEach((itemID) => {
			if (shoppingItems[itemID].name === text.toLowerCase())
				isFound = true;
		});
		return isFound;
	};

	const createItem = (itemName, suggestion) => {
		if (!isFound(itemName)) {
			if (suggestion) {
				addSuggestion({ ...suggestion });
			} else {
				addSuggestion({ text: itemName });
			}

			const newItem = {
				name: itemName.toLowerCase(),
				id: shortid.generate(),
			};
			createShoppingItem(newItem);
			addShoppingIDToBucket({
				bucketID: bucket.id,
				itemID: newItem.id,
			});
			setSearchOverlayFocus(false);
			changeSearchTerm('');
			return true;
		} else {
			return false;
		}
	};

	const getSuggestions = () => {
		if (!isRehydrated) {
			return [];
		}
		return Object.values(suggestions)
			.reduce((acc, cur) => {
				if (!isFound(cur.text)) {
					acc.push(cur);
				}
				return acc;
			}, [])
			.sort((a, b) => b.appeared - a.appeared)
			.slice(0, 15);
	};

	const getShoppingItems = () => {
		if (!isRehydrated) {
			return {
				completedItems: [],
				inCompletedItems: [],
			};
		}

		const completedItems = [];
		const inCompletedItems = [];
		bucket.shoppingItems.forEach((itemID) => {
			if (shoppingItems[itemID].isCompleted) {
				completedItems.push(shoppingItems[itemID]);
			} else {
				inCompletedItems.push(shoppingItems[itemID]);
			}
		});

		return {
			completedItems,
			inCompletedItems,
		};
	};

	return { createItem, getShoppingItems, getSuggestions, bucket };
};

export default useShoppingItems;
