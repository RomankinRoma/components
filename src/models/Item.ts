export class Item{
  private static default = false;
  checked: boolean;
  name: string;
  constructor(checked: boolean , name: string) {
    if (checked != true && checked != false) {
      checked = Item.default;
    }
    this.checked = checked;
    this.name = name;
  }
}
