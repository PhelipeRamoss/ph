import { Component } from '@angular/core';
import { IonInput } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

   //atributos
   resultado: string = '';
   display: string = '';
   oper:string = '';
   

  constructor() {}
  
  //métodos
  operacao(){
    this.resultado = eval(this.display);
  }

  limpadisplay(){
    this.display = '';
    this.resultado = '';
  }

  apagadigito(){
    var novoDisplay = this.display.slice(0,-1);
    this.display = novoDisplay;
  }

  calculaporcentagem(){
    /*var contagem = this.display.length;
    
    while (contagem > 0){
      if (this.display[contagem] == "+"){
        alert("continua");
      } else {

      }

    }*/
    
  }

  digita(valor:string){
    switch(valor){
      case "0": this.display += "0";
      break;
      case "1": this.display += "1";
      break;
      case "2": this.display += "2";
      break;
      case "3": this.display += "3";
      break;
      case "4": this.display += "4";
      break;
      case "5": this.display += "5";
      break;
      case "6": this.display += "6";
      break;
      case "7": this.display += "7";
      break;
      case "8": this.display += "8";
      break;
      case "9": this.display += "9";
      break;
      case "+": this.display += "+";
      break;
      case "-": this.display += "-";
      break;
      case "*": this.display += "*";
      break;
      case "/": this.display += "/";
      break;
      case ".": this.display += ".";
      break;
    }
  }

   

}
