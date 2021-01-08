import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.params!=null) {
      this.activatedRoute.params.subscribe(param=>{
        alert("NULL AMK");
      });
    } else {
        alert("NOT NULL FULL BRO")
    }


  }

}
