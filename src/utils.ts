
const amountFormat = (amount: number): string => amount.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

export default amountFormat
