import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useTypewriter } from '../useTypewriter';

describe('useTypewriter Hook', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts typing the first word character by character', () => {
    const { result } = renderHook(() => useTypewriter(['DevOps', 'Cloud'], 100, 50, 2000));
    expect(result.current).toBe('');

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current).toBe('D');
  });
});
