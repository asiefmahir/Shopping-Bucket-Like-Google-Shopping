import React from 'react';
import PropTypes from 'prop-types';

// Components
import CreateItem from '../../components/create-item';

const AddBucket = ({ bucketName, setBucketName, createBucket }) => {
	return (
		<CreateItem
			value={bucketName}
			placeholder='Press Enter to Create A New Bucket'
			onChange={(e) => setBucketName(e.target.value)}
			onKeyPress={(e) => {
				if (e.key === 'Enter') {
					if (bucketName.length === 0) {
						alert('Bucket Name Can Not Be Empty');
					} else if (bucketName.length > 30) {
						alert('Bucket Name Length is Too Big');
					} else {
						createBucket(bucketName);
						setBucketName('');
					}
				}
			}}
		/>
	);
};

AddBucket.propTypes = {
	bucketName: PropTypes.string.isRequired,
	setBucketName: PropTypes.func.isRequired,
	createBucket: PropTypes.func.isRequired,
};

export default AddBucket;
