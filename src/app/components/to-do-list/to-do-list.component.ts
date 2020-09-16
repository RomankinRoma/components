import { Component, OnInit } from '@angular/core';
import {Item} from '../../../models/Item';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }
  items = [new Item(true, 'First Item') , new Item(false, 'Second Item'), new Item(true,'Third Item')];
  ngOnInit(): void {
  }

  delete(item: Item){
    const index = this.items.indexOf(item, 0);
    this.items.slice(index, 1);
    alert('Deleted\n' + this.items.length);
  }
}
