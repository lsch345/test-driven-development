import { formatDuration } from "./duration";

describe('formatDuration', () => {
  test('should format 33 seconds as "33s"', () => {
      expect(formatDuration(33)).toBe('33s');
  });

  test('should format 123 seconds as "2m3s"', () => {
      expect(formatDuration(123)).toBe('2m3s');
  });

  test('should format 500 seconds as "8m20s"', () => {
      expect(formatDuration(500)).toBe('8m20s');
  });

  test('should format 3600 seconds as "1h"', () => {
      expect(formatDuration(3600)).toBe('1h');
  });

  test('should format 3999 seconds as "1h6m30s"', () => {
      expect(formatDuration(3999)).toBe('1h6m39s');
  });

  test('should format 0 seconds as "0s"', () => {
      expect(formatDuration(0)).toBe('0s');
  });

  test('should throw an error for negative seconds', () => {
      expect(() => formatDuration(-1)).toThrow('Negative values are not allowed');
  });

  test('should round seconds to the nearest integer', () => {
      expect(formatDuration(123.45)).toBe('2m3s');
  });
});  