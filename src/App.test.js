import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const wrapperDiv = screen.getByTestId('main-app');
	expect(wrapperDiv).toBeInTheDocument();
});
