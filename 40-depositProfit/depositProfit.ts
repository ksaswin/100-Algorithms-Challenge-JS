export function depositProfit(deposit: number, rate: number, threshold: number): number {
  let years = 0;
  let amount = deposit;

  while (amount <= threshold) {
    years++;

    amount += (amount * rate * 0.01);
  }

  return years;
}

