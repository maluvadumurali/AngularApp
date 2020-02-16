import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  title = "My Assignment App";
  enabled = false;
  name:string;
  assignments =[{name:'One',dueDate:'2018-01-01',submitted:true},
                {name:'Two',dueDate:'2019-01-01',submitted:false}]
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.enabled = true;
    },2000);
  }

  onSubmit(name : string){
    console.log(name);
  }

}
