import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchText:string;

  @Input() result:string;

  @Output() clicked=new EventEmitter<string>();
  constructor() { 
    
  }

  ngOnInit() {
  }

  searchSkill(searchText:string){
   
    this.clicked.emit(searchText);
  }

}
