
const amountFormat = (amount: number): string => amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

export default amountFormat
