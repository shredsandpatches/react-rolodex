import './ResultsCounter.styles.css';

export const ResultsCounter = ({ count = 0 }) => (
	<p className="results-counter">{`${count} ${
		count === 1 ? 'entry' : 'entries'
	} found.`}</p>
);
