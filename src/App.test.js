// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { add, total } from './App';

test('add', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});

test('total', () => {
  expect(total(5, 20)).toBe('$25');
});
