import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.page.html',
  styleUrls: ['./choices.page.scss'],
})
export class ChoicesPage implements OnInit {
  public form =[
    {val: 'Pepperoni',isChecked: false},
    {val: 'Sausage',isChecked: false},
    {val: 'Mushroom',isChecked: false}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
