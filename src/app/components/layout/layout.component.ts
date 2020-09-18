import { Component, OnInit } from '@angular/core';
import {Item} from '../../../models/Item';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor() { }
  items = [new Item(true, 'First Item') , new Item(false, 'Second Item'), new Item(true,'Third Item')];
  name: string;
  checked: boolean;

  ngOnInit(): void {
  }

  addItem(name:string, checked:boolean){
    this.items.push(new Item(checked, name));
  }
  removeItem(value){
      const index: number = this.items.indexOf(value);
      this.items.splice(index, 1);
    }
}
