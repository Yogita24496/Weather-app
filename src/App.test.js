// src/App.test.js
import { render } from '@testing-library/react';
import App from './App';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: () => <div>Route</div>,
  Link: ({ children, to }) => <a href={to}>{children}</a>
}));

test('renders without crashing', () => {
  render(<App />);
});