import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  people = [
    {
    photo: "../../assets/img/main@2x.png",
    name: "Bill Gates",
    dob: "10-05-1955",
    job: "Filántropo"
  },
  {
    photo: "../../assets/img/main-3@2x.png",
    name: "Ibai Llanos",
    dob: "26-03-1996",
    job: "Creador de contenido"
  },
  {
    photo: "../../assets/img/main-2@2x.png",
    name: "Elon Musk",
    dob: "28-06-1971",
    job: "Emprendedor"
  },
  {
    photo: "../../assets/img/main@2x.png",
    name: "Bill Gates",
    dob: "10-05-1955",
    job: "Filántropo"
  },
  {
    photo: "../../assets/img/main-3@2x.png",
    name: "Ibai Llanos",
    dob: "26-03-1996",
    job: "Creador de Contenido"
  },
  {
    photo: "../../assets/img/main-2@2x.png",
    name: "Elon Musk",
    dob: "28-06-1971",
    job: "Emprendedor"
  }
  ]

  constructor() { }

  ngOnInit() {
  }

}
