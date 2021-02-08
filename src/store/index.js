import { createStore } from 'easy-peasy';

import suggestionModel from './suggestionModel';
import bucketModel from './bucketModel';
import itemModel from './itemModel';
import uiModel from './uiModel';

const store = createStore({
	suggestions: suggestionModel,
	buckets: bucketModel,
	shoppingItems: itemModel,
	ui: uiModel,
});
export default store;
