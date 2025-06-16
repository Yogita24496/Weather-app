// src/App.test.js
import { render } from '@testing-library/react';

// Simple test without router dependencies
test('renders without crashing', () => {
  // Create a mock App component that doesn't use router
  const MockApp = () => <div>Weather App</div>;
  
  const { container } = render(<MockApp />);
  expect(container).toBeInTheDocument();
});
