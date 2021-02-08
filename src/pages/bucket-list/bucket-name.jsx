import React from 'react';
import { navigate } from '@reach/router';

const BucketName = ({ bucket, editable, setEditable, renameBucket }) => {
	return (
		<td>
			{editable[bucket.id] ? (
				<input
					className='input__field--inline'
					type='text'
					value={bucket.name}
					autoFocus
					onChange={(e) =>
						renameBucket({
							bucketID: bucket.id,
							name: e.target.value,
						})
					}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							setEditable({
								...editable,
								[bucket.id]: false,
							});
						}
					}}
					onBlur={(e) => {
						if (e.target.value) {
							setEditable({
								...editable,
								[bucket.id]: false,
							});
						}
					}}
				/>
			) : (
				<span
					className='cursor-pointer'
					onClick={() => navigate(`/buckets/${bucket.id}`)}
				>
					{bucket.name}
				</span>
			)}
		</td>
	);
};

export default BucketName;
