import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the CookieClicker component', () => {
    render(<App />);
    // Assuming "Cookie Clicks" text is part of what CookieClicker renders
    const linkElement = screen.getByText(/Cookie Clicks/i);
    expect(linkElement).toBeInTheDocument();
  });
});
