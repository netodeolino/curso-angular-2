import { Component, Input } from '@angular/core';

@Component({
    selector: 'contador',
    template: `
      <div>
        <button type="button" class="btn btn-primary"
        (click)="decrementa()">-</button>
        <input type="text" [value]="valor"  readonly>
        <button type="button" class="btn btn-primary"
        (click)="incrementa()">+</button>
      </div>
    `
})
export class OutputPropertyComponent {

    valor: number = 0;

    constructor () { }

    incrementa () {
        this.valor++;
    }

    decrementa () {
        this.valor--;
    }

}