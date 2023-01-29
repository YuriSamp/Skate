export function handleQuantity(
  number: number,
  operation: string,
  setQuantity: (value: React.SetStateAction<number>) => void
) {
  const rangeOfSum = number >= 1 && number < 10;
  const rangeOfSubtraction = number > 1 && number <= 10;
  if (operation === 'SUM' && rangeOfSum) {
    setQuantity(number + 1);
  }

  if (operation === 'SUBTRACTION' && rangeOfSubtraction)
    setQuantity(number - 1);
}
