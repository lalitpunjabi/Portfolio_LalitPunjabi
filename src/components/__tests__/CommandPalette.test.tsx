import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CommandPalette from '../CommandPalette';

describe('CommandPalette Component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    onOpenResume: vi.fn(),
    currentTheme: 'cyan',
    onThemeChange: vi.fn(),
    onToggleRecruiterMode: vi.fn(),
  };

  it('renders search input and filters sections based on query', () => {
    render(<CommandPalette {...defaultProps} />);
    
    const input = screen.getByPlaceholderText(/Search sections or commands/i);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'projects' } });
    expect(screen.getByText(/Production Projects & Case Studies/i)).toBeInTheDocument();
  });

  it('triggers onClose when ESC key is pressed', () => {
    const mockClose = vi.fn();
    render(<CommandPalette {...defaultProps} onClose={mockClose} />);

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(mockClose).toHaveBeenCalledTimes(1);
  });
});
