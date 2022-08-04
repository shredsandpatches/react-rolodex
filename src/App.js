import './App.css';
import { Component } from 'react';

const API_URL =
	'https://my-json-server.typicode.com/shredsandpatches/react-rolodex';
const GAMES_ENDPOINT_URL = `${API_URL}/games`;

const sortGamesByTitle = (a, b) =>
	a.title < b.title ? -1 : a.title > b.title ? 1 : 0;

const listGames = (collection = [], sortFn = sortGamesByTitle) =>
	collection.sort(sortFn).map(({ id, title }) => <h1 key={id}>{title}</h1>);

const fetchGames = async () => {
	try {
		const response = await fetch(GAMES_ENDPOINT_URL);
		return await response.json();
	} catch (err) {
		console.log(err);
	}
};

class App extends Component {
	constructor() {
		super();
		// Initialise state.
		this.state = { games: [] };
	}

	componentDidMount() {
		fetchGames().then((games) => this.setState({ games }));
	}

	render() {
		return (
			<div className="App" data-testid="main-app">
				{listGames(this.state.games)}
			</div>
		);
	}
}

export default App;
