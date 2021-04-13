import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thepeople';

  constructor(private router: Router){

  }

  isLogin!: boolean;
  ngOnInit(){

    this.router.events.subscribe (route=>{
      if(route instanceof NavigationEnd){
        if(route.url == "/login" || route.url == "/register"){
          this.isLogin = true
        } else {
          this.isLogin = false
        }
      }
    })
  }
}
