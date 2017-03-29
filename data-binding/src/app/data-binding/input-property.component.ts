import { Component, Input } from '@angular/core';

@Component({
    selector: 'curso',
    template: '{{ nomeCurso }}'
})
export class InputPropertyComponent {

    /* Forma de expor só 'nome' */
    @Input('nome') nomeCurso : string = '';

    constructor () { }

}