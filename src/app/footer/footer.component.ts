import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links = [
    {name: "Aviso legal",
    href: "#"},
    {name: "Política de privacidad",
    href: "#"},
    {name: "Política de cookies",
    href: "#"}
  ]


  constructor() { }

  ngOnInit() {
  }

}
