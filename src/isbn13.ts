export function isValid(isbn: string): boolean {
  if (isbn.length !== 13) {
    throw new Error('ISBN-13 muss genau 13 Ziffern lang sein');
  }

  if (!/^\d{13}$/.test(isbn)) {
    throw new Error('ISBN-13 darf nur Ziffern enthalten');
  }

  let prüfsumme = 0;

  for (let position = 0; position < 12; position++) {
    const ziffer = parseInt(isbn[position]);
    let gewichtung;

    if (position % 2 === 0) {
      gewichtung = 1;
    } else {
      gewichtung = 3;
    }

    prüfsumme += ziffer * gewichtung;
  }

  const berechnetePrüfziffer = (10 - (prüfsumme % 10)) % 10;
  const tatsächlichePrüfziffer = parseInt(isbn[12]);

  return berechnetePrüfziffer === tatsächlichePrüfziffer;
}