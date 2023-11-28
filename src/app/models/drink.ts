export class Drink {
    public id: number;
    public categoryId: number;
    public name: string;
    public priceText: string;
    public contentText: string;
  
    constructor(id: number, categoryId: number, name: string, priceText: string, contentText: string) {
      this.id = id;
      this.categoryId = categoryId;
      this.name = name;
      this.priceText = priceText;
      this.contentText = contentText;
    }
  }