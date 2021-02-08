import { action, persist } from 'easy-peasy';

const itemModel = persist(
	{
		items: {},
		create: action((state, payload) => {
			const item = {};
			item.id = payload.id;
			item.name = payload.name;
			item.quantity = 0;
			item.price = 0;
			item.isCompleted = false;
			state.items[item.id] = item;
			return item.id;
		}),
		remove: action((state, payload) => {
			delete state.items[payload];
		}),
		update: action((state, payload) => {
			state.items[payload.itemID][payload.key] = payload.value;
		}),
		toggleComplete: action((state, payload) => {
			state.items[payload].isCompleted = !state.items[payload]
				.isCompleted;
		}),
	},
	{ storage: localStorage }
);

export default itemModel;
