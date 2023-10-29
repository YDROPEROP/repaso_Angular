import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nombre : string = "Yiver";
  public edad : number = 30;

  get CapitalizarNombre() : string{
    return this.nombre.toUpperCase();
  }

  getHeroeDescription() : string{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarDatos(nombre:boolean=false, edad:boolean=false) : void{
     if(nombre){
      this.nombre = "Adrian";
     }
     else if(edad){
      this.edad = 33;
     }
  }

}
