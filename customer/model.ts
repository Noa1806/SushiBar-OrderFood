class Product {
  uid: string;
  constructor(
    public name: string,
    public imgLink: string,
    public details: string,
    public price: number,
  ) {
    this.uid = uid();
  }
}

