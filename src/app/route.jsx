import React from 'react';
import { Router } from '@reach/router';

import BucketList from '../pages/bucket-list';
import BucketDetails from '../pages/bucket-details';

const AppRouter = () => {
	return (
		<>
			<Router>
				<BucketList path='/' />
				<BucketDetails path='buckets/:bucketID' />
			</Router>
		</>
	);
};

export default AppRouter;
