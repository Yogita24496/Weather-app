// src/App.test.js
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders navigation links', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(getByText(/Home/i)).toBeInTheDocument();
  expect(getByText(/About/i)).toBeInTheDocument();
});
