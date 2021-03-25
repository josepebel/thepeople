import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  flag!: boolean;

  ChangeBgBusqueda(){
    this.flag = true;
  }

  ChangeBgInicio(){
    this.flag = false;

  }


  constructor(private router: Router) { }

  ngOnInit() {
  }

  newUpload(){
    this.router.navigate(["/detail"])
  }

}
