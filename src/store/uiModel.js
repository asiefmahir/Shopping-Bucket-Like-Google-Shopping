import { action, persist } from 'easy-peasy';

const uiModel = persist(
	{
		searchOverlayFocus: false,
		setSearchOverlayFocus: action((state, payload) => {
			state.searchOverlayFocus = payload;
		}),
	},
	{ storage: localStorage }
);

export default uiModel;
