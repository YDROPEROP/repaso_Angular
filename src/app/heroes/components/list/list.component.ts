import { Component } from '@angular/core';

@Component({
  selector: 'app-hores-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public nombres : string[] = ["Hersey","Juan", "Wilder", "Heilmer", "Adrian", "Yiver"]
  public nombreEliminado? : string;
  eliminarDato():string|void{
    this.nombreEliminado = this.nombres.pop();
    return this.nombreEliminado;
  }
}
