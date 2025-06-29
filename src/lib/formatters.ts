export const formatCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  });
  return formatter.format(value);
}