import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source-code-constants-collection',
  templateUrl: './source-code-constants-collection.component.html',
  styleUrls: ['./source-code-constants-collection.component.scss']
})
export class SourceCodeConstantsCollectionComponent implements OnInit {

  stringCollection: string[];
  numberCollection: string[];

  constructor() {
    this.stringCollection = ['a', 'b', 'c', 'd'];
    this.numberCollection = ['1', '3', '4', '7'];
  }

  ngOnInit() {
  }

}
