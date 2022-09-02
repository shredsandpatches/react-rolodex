import './App.css';
import { Component } from 'react';
import { CardList } from './components/CardList/CardList.component';
import { SearchBox } from './components/SearchBox/SearchBox.component';

const API_URL =
	'https://my-json-server.typicode.com/shredsandpatches/react-rolodex';
const GAMES_ENDPOINT_URL = `${API_URL}/games`;

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

	componentDidMount = () =>
		fetchGames().then((games) => this.setState({ games }));

	inputOnChange = (event) =>
		this.setState({ searchValue: event.target.value.trim() });

	render() {
		const { state, inputOnChange } = this;

		const filteredGames = state.games.filter((game) =>
			game.title.toLowerCase().includes(state.searchValue.toLowerCase())
		);

		return (
			<div className="App" data-testid="main-app">
				<SearchBox onChange={inputOnChange} />
				<CardList collection={filteredGames} />
			</div>
		);
	}
}

export default App;
