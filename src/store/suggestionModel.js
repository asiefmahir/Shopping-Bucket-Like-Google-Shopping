import { action, computed, persist } from 'easy-peasy';
import shortid from 'shortid';

const suggestedItems = [
	'rice',
	'chips',
	'potato',
	'coke',
	'water',
	'cake',
	'burger',
	'pizza',
	'apple',
	'medicine',
	'chocolate',
	'biscuit',
	'ice cream',
	'tomato',
	'orange',
	'onion',
];

const generateSuggestions = () => {
	const items = {};
	suggestedItems.forEach((item) => {
		const sugItem = {
			text: item,
			id: shortid.generate(),
			appeared: 0,
		};
		items[sugItem.id] = sugItem;
	});
	return items;
};

const suggestions = generateSuggestions();

const suggestionModel = persist(
	{
		items: { ...suggestions },
		searchTerm: '',
		add: action((state, payload) => {
			if (payload.id) {
				state.items[payload.id].appeared++;
				return;
			}

			for (let i in state.items) {
				if (state.items[i].text === payload.text) {
					state.items[i].appeared++;
					return;
				}
			}

			payload.id = shortid.generate();
			payload.text.toLowerCase();
			payload.appeared = 1;
			state.items[payload.id] = payload;
		}),
		topSuggestions: computed((state) => {
			return Object.values(state.items)
				.sort((a, b) => b.appeared - a.appeared)
				.slice(0, 15);
		}),
		changeSearchTerm: action((state, payload) => {
			state.searchTerm = payload.toLowerCase();
		}),
		search: computed((state) => {
			const items = [];
			for (let i in state.items) {
				if (state.items[i].text.includes(state.searchTerm)) {
					items.push(state.items[i]);
				}
			}
			return items;
		}),
		load: action((state, payload) => {
			state.items = {
				...payload,
			};
		}),
	},
	{ storage: localStorage }
);

export default suggestionModel;
