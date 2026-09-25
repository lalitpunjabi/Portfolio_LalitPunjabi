import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from '../ProjectsSection';

describe('ProjectsSection Component', () => {
  it('renders flagship production projects section and cards', () => {
    render(<ProjectsSection />);
    
    expect(screen.getByText(/Featured DevOps & Cloud Projects/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /DEPLOYMATE/i })).toBeInTheDocument();
  });
});
