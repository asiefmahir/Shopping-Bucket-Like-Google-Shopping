import React from 'react';
import useShoppingItems from '../../hooks/useShoppingItem';

const Suggestions = () => {
	const { createItem, getSuggestions } = useShoppingItems();

	// Handler
	const handleClick = (sug) => {
		createItem(sug.text, sug);
	};

	// Local Variables
	const suggestions = getSuggestions();

	return (
		<div style={{ width: '100%', paddingRight: '2rem' }}>
			<div className='add-item__suggestions'>
				<div className='add-item__suggestion-chips'>
					{suggestions.length > 0 &&
						suggestions.map((sug) => (
							<div
								key={sug.id}
								className='add-item__suggestion-chip-item'
								onClick={() => handleClick(sug)}
							>
								{sug.text}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Suggestions;
