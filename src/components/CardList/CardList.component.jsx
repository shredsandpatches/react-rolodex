const sortGamesByTitle = (a, b) =>
	a.title < b.title ? -1 : a.title > b.title ? 1 : 0;

export const CardList = ({ collection = [], sortFn = sortGamesByTitle }) =>
	collection.sort(sortFn).map(({ id, title }) => <h1 key={id}>{title}</h1>);
