import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  beforeEach(() => {
    window.IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  });

  it('renders branding title and navigation links', () => {
    render(
      <Navbar
        currentTheme="cyan"
        onThemeChange={vi.fn()}
      />
    );
    expect(screen.getByText('LALIT PUNJABI')).toBeInTheDocument();
  });

  it('triggers onToggleRecruiterMode when recruiter toggle button is clicked', () => {
    const mockToggle = vi.fn();
    render(
      <Navbar
        currentTheme="cyan"
        onThemeChange={vi.fn()}
        isRecruiterMode={false}
        onToggleRecruiterMode={mockToggle}
      />
    );

    const recruiterBtn = screen.getByTitle(/Switch to Recruiter Mode/i);
    fireEvent.click(recruiterBtn);
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});
