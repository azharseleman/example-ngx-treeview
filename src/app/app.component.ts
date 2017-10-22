import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from '../app/lib';
import { DataService } from './data/data.service';
const childrenCategory = new TreeviewItem({
  text: 'Children', value: 1, collapsed: true, children: [
      { text: 'Baby 3-5', value: 11 },
      { text: 'Baby 6-8', value: 12 },
      { text: 'Baby 9-12', value: 13 }
  ]
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'app';
  dropdownEnabled = true;
  items: TreeviewItem[];
  values: number[];
  //selectedTreeviewItems: TreeviewItem[];
  config = TreeviewConfig.create({
      hasAllCheckBox: false,
      hasFilter: true,
      hasCollapseExpand: true,
      decoupleChildFromParent: false,
      maxHeight: 400
  });

  constructor(private service: DataService) { }

  ngOnInit() {
    this.items = this.service.getBooks();
  }

  // onSelectedChange(selectedTreeviewItems: TreeviewItem[]) {
  //   this.selectedTreeviewItems = selectedTreeviewItems;
  //   selectedTreeviewItems.forEach(selectedTreeviewItem => {
  //     //const value = selectedTreeviewItem;
  //     console.log('checked: ' + selectedTreeviewItem);
  //   })
  // }

  onSelectedChange(values: number[]) {
      console.log('checked: ' + values);
    }

}
