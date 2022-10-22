import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Home.test.tsx', () => {
  it('Should render successfully', () => {
    render(<Home />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});
