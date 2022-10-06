import './CardList.styles.css';
import { Card } from '../Card/Card.component';

const sortGamesByTitle = (a, b) =>
	a.title < b.title ? -1 : a.title > b.title ? 1 : 0;

export const CardList = ({ collection = [], sortFn = sortGamesByTitle }) => (
	<div className="card-list">
		{collection.sort(sortFn).map((props) => (
			<Card {...props} key={props.id} />
		))}
	</div>
);
