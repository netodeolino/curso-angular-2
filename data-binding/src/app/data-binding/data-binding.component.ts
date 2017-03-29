import { Component } from '@angular/core';
import { InputPropertyComponent } from './input-property.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url:string = 'https://netodeolino.github.io/';
  cursoAngular:boolean = true;
  urlImagem = 'http://lorempixel.com/output/technics-q-c-640-480-7.jpg';

  conteudoAtual;
  //conteudoAtual : string = '';
  conteudoSalvo : string = '';
  isMouseOver = false;
  nome: string = '';
  pessoa = {nome: '', idade: 18};

  getValor () {
    return 45;
  }

  getCurtirCurso () {
    return true;
  }

  onClick () {
    alert('Botão clicado!');
  }

  onKeyUp (event) {
    console.log(event);
    this.conteudoAtual = event.target.value;
    //console.log(this.conteudoAtual);
  }

  onSave (valor : string) {
    this.conteudoSalvo = valor;
  }

  onMouseSpan () {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

}
