class Expense {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.amount = data.amount;
        this.date = new Date(data.date);
        this.notes = data.notes;
    }

    // Method to display expense details
    displayExpense() {
        return `
        Expense ID: ${this.id}
        Title: ${this.title}
        Amount: ${this.amount} ${this.currency}
        Date: ${this.date.toLocaleDateString()}
        Notes: ${this.notes}
      `;
    }
}

export default Expense;