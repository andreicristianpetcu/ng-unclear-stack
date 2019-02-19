import { Component, OnInit } from '@angular/core';
import { TreeModule } from 'angular-tree-component';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  constructor(private treeModule: TreeModule) { }

  ngOnInit() {
    // throw new Error("Some error");
  }

}
