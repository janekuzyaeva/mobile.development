export class purchases {
    public name: string;
    public amount: number;
    public state: string;
    public id: number;
    constructor(
        name: string,
        amount: number,
        state: string,
        id: number
    ) {
      this.name = name;
      this.amount = amount;
      this.state = state;
      this.id = id;
    }
  }
  