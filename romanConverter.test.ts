import { intToRoman } from './romanConverter';

describe('Roman Numeral Converter', () => {
  test('converts single digit numbers', () => {
    expect(intToRoman(1)).toBe('I');
    expect(intToRoman(5)).toBe('V');
    expect(intToRoman(10)).toBe('X');
    expect(intToRoman(50)).toBe('L');
    expect(intToRoman(100)).toBe('C');
    expect(intToRoman(500)).toBe('D');
    expect(intToRoman(1000)).toBe('M');
  });

  test('handles combinations correctly', () => {
    expect(intToRoman(2)).toBe('II');
    expect(intToRoman(4)).toBe('IV');
    expect(intToRoman(9)).toBe('IX');
    expect(intToRoman(19)).toBe('XIX');
    expect(intToRoman(40)).toBe('XL');
    expect(intToRoman(90)).toBe('XC');
    expect(intToRoman(400)).toBe('CD');
    expect(intToRoman(900)).toBe('CM');
  });

  test('handles complex numbers', () => {
    expect(intToRoman(58)).toBe('LVIII');
    expect(intToRoman(1994)).toBe('MCMXCIV');
    expect(intToRoman(2024)).toBe('MMXXIV');
  });
});
