export const SearchBox = ({
	className = 'search-box',
	placeholder = 'Search games...',
	onChange,
}) => (
	<input
		className={className}
		type="search"
		placeholder={placeholder}
		onChange={onChange}
	/>
);
