import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useIntersectionObserver } from '../useIntersectionObserver';

describe('useIntersectionObserver Hook', () => {
  beforeEach(() => {
    window.IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  });

  it('returns elementRef, isIntersecting, and hasRendered initial values', () => {
    const { result } = renderHook(() => useIntersectionObserver());
    expect(result.current.isIntersecting).toBe(false);
    expect(result.current.hasRendered).toBe(false);
    expect(result.current.elementRef).toBeDefined();
  });
});
