class Account {
	bank: string;
	name: string;
	type: string;
	amount: number;
	constructor(bank: string, name: string, type:string, amount: number) {
		this.bank = bank;
		this.name = name;
		this.type = type;
		this.amount = amount;
	}
}

export default Account