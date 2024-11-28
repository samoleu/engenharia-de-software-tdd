export function intToRoman(num: number): string {
    // Lista de valores e seus símbolos romanos correspondentes
    const values: number[] = [
      1000, 900, 500, 400,
      100, 90, 50, 40,
      10, 9, 5, 4, 1
    ];
    const symbols: string[] = [
      'M', 'CM', 'D', 'CD',
      'C', 'XC', 'L', 'XL',
      'X', 'IX', 'V', 'IV', 'I'
    ];
  
    let roman = '';
    let i = 0;
  
    while (num > 0) {
      // Divida o número pelo valor atual para determinar quantos símbolos adicionar
      while (num >= values[i]) {
        roman += symbols[i];
        num -= values[i];
      }
      i++;
    }
  
    return roman;
  }
  