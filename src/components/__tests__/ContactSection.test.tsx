import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactSection from '../ContactSection';
import emailjs from '@emailjs/browser';

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn().mockResolvedValue({ status: 200, text: 'OK' }),
  },
}));

describe('ContactSection Component', () => {
  it('renders contact section headers and form fields with accessible labels', () => {
    render(<ContactSection />);
    
    expect(screen.getByRole('heading', { level: 2, name: /Get In Touch/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
  });

  it('updates form inputs on user typing and handles form submission', async () => {
    render(<ContactSection />);

    const nameInput = screen.getByLabelText(/Your Name/i);
    const emailInput = screen.getByLabelText(/Your Email/i);
    const messageInput = screen.getByLabelText(/Your Message/i);
    const submitBtn = screen.getByRole('button', { name: /send_message\.sh/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello DevOps!' } });

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('Hello DevOps!');

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledTimes(1);
    });
  });
});
