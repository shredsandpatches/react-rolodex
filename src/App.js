import './App.css';
import { Component } from 'react';

const API_URL = 'https://my-json-server.typicode.com/shredsandpatches/react-rolodex/';
const GAMES_ENDPOINT_URL = `${API_URL}/games`

const listGames = (collection = []) => collection.map(({id, title}) => <h1 key={id}>{title}</h1>);

class App extends Component {

  constructor() {
    super();
    // Initialise state.
    this.state= { games: [] };
  }

  componentDidMount() {
    return fetch(GAMES_ENDPOINT_URL)
    .then(response => response.json())
    .then(games => this.setState({ games }));
  }
  
  render() {
    return (
      <div className="App" data-testid="main-app">
        {listGames(this.state.games)}
      </div>
    );
  };
};

export default App;
