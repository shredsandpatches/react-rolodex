import './SearchBox.styles.css';

export const SearchBox = ({
	className = '',
	placeholder = 'Search by title..',
	onChangeHandler,
}) => (
	<input
		className={`search-box ${className}`}
		type="search"
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
);
