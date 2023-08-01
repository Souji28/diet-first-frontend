import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  users:any;
  constructor(private http:HttpClient){}
  ngOnInit(){
    let res=this.http.get("https://jsonplaceholder.typicode.com/users");
    res.subscribe(
      resData=>this.users=resData
    );
  }

}
