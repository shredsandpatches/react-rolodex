import './SearchBox.styles.css';

export const SearchBox = ({
	className = '',
	placeholder = 'Search games...',
	onChangeHandler,
}) => (
	<input
		className={`search-box ${className}`}
		type="search"
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
);
