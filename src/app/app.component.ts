import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //Component'e dair herhangi bir işlemi buradan yapıyoruz.
constructor(private toastr: ToastrService,private spinner:NgxSpinnerService ) {}

ngOnInit() {
  this.toastr.success("Sigarayı bıraktığın gibi! ve Dikkat dağıtıcardan  UZAK DUR!!","ASLA PES ETME!")
  this.spinner.show();
  setTimeout(() => {
    this.spinner.hide();
  },1500);
}
  title = 'my-app';
}
