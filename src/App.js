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
		this.state = { games: [], searchValue: '' };
	}

	componentDidMount() {
		fetchGames().then((games) => this.setState({ games }));
	}

	render() {
		const filteredGames = this.state.games.filter((game) =>
			game.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
		);

		return (
			<div className="App" data-testid="main-app">
				<input
					className="search-box"
					type="search"
					placeholder="Search games..."
					onChange={(event) =>
						this.setState({ searchValue: event.target.value.trim() })
					}
				/>
				{listGames(filteredGames)}
			</div>
		);
	}
}

export default App;
