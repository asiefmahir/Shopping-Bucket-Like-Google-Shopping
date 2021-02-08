import { action, persist } from 'easy-peasy';
import shortid from 'shortid';

const bucketModel = persist(
	{
		items: {},
		create: action((state, payload) => {
			const bucket = {};
			bucket.name = payload;
			bucket.id = shortid.generate();
			bucket.shoppingItems = [];
			bucket.created = new Date().toLocaleDateString();
			bucket.costs = 0;
			state.items[bucket.id] = bucket;
		}),
		remove: action((state, payload) => {
			delete state.items[payload];
		}),
		addItem: action((state, payload) => {
			state.items[payload.bucketID].shoppingItems.push(payload.itemID);
		}),
		removeItem: action((state, payload) => {
			const bucket = state.items[payload.bucketID];
			const index = bucket.shoppingItems.findIndex(
				(id) => id === payload.itemID
			);
			bucket.shoppingItems.splice(index, 1);
		}),
		rename: action((state, payload) => {
			state.items[payload.bucketID].name = payload.name;
		}),
		updateCost: action((state, payload) => {
			state.items[payload.bucketID].costs = payload.costs;
		}),
	},
	{ storage: localStorage }
);

export default bucketModel;
