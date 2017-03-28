import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'https://netodeolino.github.io/';
  cursoAngular:boolean = true;
  urlImagem = 'http://lorempixel.com/output/technics-q-c-640-480-7.jpg';

  conteudoAtual;
  //conteudoAtual : string = '';

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

  constructor() { }

  ngOnInit() {
  }

}
