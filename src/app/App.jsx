import React from 'react';
import { StoreProvider } from 'easy-peasy';

import Router from './route';
import store from '../store';

/**
 * App component is the root of our React application. From here we will route and provide all necessary context and states
 * @component
 */
const App = () => {
	return (
		<StoreProvider store={store}>
			<Router />
		</StoreProvider>
	);
};

export default App;
