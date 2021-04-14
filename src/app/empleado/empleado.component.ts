import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  
  public nombre: string = '';
  public apellido: string = '';
  public edad: string = '';
  //public empresa: string = ''; 

  constructor() {}

  ngOnInit(): void {
   
  }

  showData() {
    console.log(this.nombre, ' ', this.apellido, ' ', this.edad, ' ');
  }

}
