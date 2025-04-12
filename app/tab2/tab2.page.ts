import { Component, ViewChild } from '@angular/core';
import {IonModal} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone:false,
   
})
export class Tab2Page {
  
  constructor() {}

  @ViewChild(IonModal) modal!: IonModal;

  message = 'Resultado';
  name!: string;
  //Atributos para calculo conversor moedas
  valor: number = 0;
  resultado: number = 0;
  moeda1: string = '';
  moeda2: string = '';

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  calcMoeda() {
    if (this.moeda1 == "real" && this.moeda2 == "real"){
      alert("Selecione moedas diferentes!!");
    }
    if (this.moeda1 == "dolar" && this.moeda2 == "dolar"){
      alert("Selecione moedas diferentes!!");
    }
    if (this.moeda1 == "euro" && this.moeda2 == "euro"){
      alert("Selecione moedas diferentes!!");
    }

    if (this.moeda1 == "real" && this.moeda2 == "dolar"){
      this.resultado = this.valor * 0.175;
    }
    if (this.moeda1 == "real" && this.moeda2 == "euro"){
      this.resultado = this.valor * 0.161;
    }
    if (this.moeda1 == "dolar" && this.moeda2 == "real"){
      this.resultado = this.valor * 5.69;
    }
    if (this.moeda1 == "dolar" && this.moeda2 == "euro"){
      this.resultado = this.valor * 0.92;
    }
    if (this.moeda1 == "euro" && this.moeda2 == "real"){
      this.resultado = this.valor * 6.18;
    }
    if (this.moeda1 == "euro" && this.moeda2 == "dolar"){
      this.resultado = this.valor * 1.08;
    }
      
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }

}
