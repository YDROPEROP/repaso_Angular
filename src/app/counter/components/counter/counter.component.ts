import { Component} from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
<hr>
<h2>hello, soy  counter.component.ts</h2>

<p>Bienvenidos a angular version: <strong>{{counter}}</strong></p>

<button class="btn btn-secondary mx-1" (click)="incrementar(+1)">+1</button>
<button class="btn btn-warning " (click)="reset(true)">Reset</button>
<button class="btn btn-secondary mx-1" (click)="incrementar(-1)">-1</button>

<hr>

  `
})

export class CounterComponent{
  counter = 16;

  incrementar(value : number):void{
    this.counter += value;
  }

  reset(value:boolean=false):void{
    this.counter=16;
  }
}
