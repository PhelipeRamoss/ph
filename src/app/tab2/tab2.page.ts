/*

import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  constructor(private modalController: ModalController) {}

  @ViewChild(IonModal) modal!: IonModal;

  message = 'Resultado';
  name!: string;

  // Conversão de Moedas
  valor: number = 0;
  resultado: number = 0;
  moeda1: string = '';
  moeda2: string = '';

  // Conversão de Temperatura
  temperatureValue: number = 0;
  fromUnit: string = '';
  toUnit: string = '';
  result: string = '';

  // Métodos Modal
  async cancel() {
    await this.modalController.dismiss();
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }

  // Conversão de Moedas
  calcMoeda() {
    if (this.moeda1 === this.moeda2) {
      alert("Selecione moedas diferentes!!");
      return;
    }

    if (this.moeda1 === 'real' && this.moeda2 === 'dolar') {
      this.resultado = this.valor * 0.175;
    } else if (this.moeda1 === 'real' && this.moeda2 === 'euro') {
      this.resultado = this.valor * 0.161;
    } else if (this.moeda1 === 'dolar' && this.moeda2 === 'real') {
      this.resultado = this.valor * 5.69;
    } else if (this.moeda1 === 'dolar' && this.moeda2 === 'euro') {
      this.resultado = this.valor * 0.92;
    } else if (this.moeda1 === 'euro' && this.moeda2 === 'real') {
      this.resultado = this.valor * 6.18;
    } else if (this.moeda1 === 'euro' && this.moeda2 === 'dolar') {
      this.resultado = this.valor * 1.08;
    }
  }

  // Conversão de Temperatura
  convertTemperature() {
    if (this.fromUnit && this.toUnit && this.temperatureValue != null) {
      let celsiusValue: number;

      // Converter para Celsius
      switch (this.fromUnit) {
        case 'Celsius':
          celsiusValue = this.temperatureValue;
          break;
        case 'Fahrenheit':
          celsiusValue = (this.temperatureValue - 32) * (5 / 9);
          break;
        case 'Kelvin':
          celsiusValue = this.temperatureValue - 273.15;
          break;
        default:
          this.result = 'Unidade de origem inválida';
          return;
      }

      // Converter de Celsius para a unidade de destino
      switch (this.toUnit) {
        case 'Celsius':
          this.result = `${celsiusValue.toFixed(2)} °C`;
          break;
        case 'Fahrenheit':
          this.result = `${(celsiusValue * 9 / 5 + 32).toFixed(2)} °F`;
          break;
        case 'Kelvin':
          this.result = `${(celsiusValue + 273.15).toFixed(2)} K`;
          break;
        default:
          this.result = 'Unidade de destino inválida';
      }
    } else {
      this.result = 'Por favor, preencha todos os campos.';
    }
  }
}

*/

/*
import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  constructor(private modalController: ModalController) {}

  @ViewChild(IonModal) modal!: IonModal;

  message = 'Resultado';
  name!: string;

  // Conversão de Moedas
  valor: number = 0;
  resultado: number = 0;
  moeda1: string = '';
  moeda2: string = '';

  // Conversão de Temperatura
  temperatureValue: number = 0;
  fromUnit: string = '';
  toUnit: string = '';
  result: string = '';

  // Variáveis para cálculo de IMC
  weight: number = 0;
  height: number = 0;
  imcResult: string = '';

  // Métodos Modal
  async cancel() {
    await this.modalController.dismiss();
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }

  // Função para calcular IMC
  calculateIMC() {
    if (this.weight > 0 && this.height > 0) {
      const imc = this.weight / (this.height * this.height);
      this.imcResult = `IMC: ${imc.toFixed(2)} - ${this.classifyIMC(imc)}`;
    } else {
      this.imcResult = 'Informe peso e altura válidos.';
    }
  }

  // Função auxiliar para classificar o IMC
  classifyIMC(imc: number): string {
    if (imc < 18.5) return 'Abaixo do peso';
    else if (imc < 24.9) return 'Peso normal';
    else if (imc < 29.9) return 'Sobrepeso';
    else if (imc < 34.9) return 'Obesidade grau 1';
    else if (imc < 39.9) return 'Obesidade grau 2';
    else return 'Obesidade grau 3';
  }

  // Conversão de Moedas
  calcMoeda() {
    if (this.moeda1 === this.moeda2) {
      alert("Selecione moedas diferentes!!");
      return;
    }

    if (this.moeda1 === 'real' && this.moeda2 === 'dolar') {
      this.resultado = this.valor * 0.175;
    } else if (this.moeda1 === 'real' && this.moeda2 === 'euro') {
      this.resultado = this.valor * 0.161;
    } else if (this.moeda1 === 'dolar' && this.moeda2 === 'real') {
      this.resultado = this.valor * 5.69;
    } else if (this.moeda1 === 'dolar' && this.moeda2 === 'euro') {
      this.resultado = this.valor * 0.92;
    } else if (this.moeda1 === 'euro' && this.moeda2 === 'real') {
      this.resultado = this.valor * 6.18;
    } else if (this.moeda1 === 'euro' && this.moeda2 === 'dolar') {
      this.resultado = this.valor * 1.08;
    }
  }

  // Conversão de Temperatura
  convertTemperature() {
    if (this.fromUnit && this.toUnit && this.temperatureValue != null) {
      let celsiusValue: number;

      // Converter para Celsius
      switch (this.fromUnit) {
        case 'Celsius':
          celsiusValue = this.temperatureValue;
          break;
        case 'Fahrenheit':
          celsiusValue = (this.temperatureValue - 32) * (5 / 9);
          break;
        case 'Kelvin':
          celsiusValue = this.temperatureValue - 273.15;
          break;
        default:
          this.result = 'Unidade de origem inválida';
          return;
      }

      // Converter de Celsius para a unidade de destino
      switch (this.toUnit) {
        case 'Celsius':
          this.result = `${celsiusValue.toFixed(2)} °C`;
          break;
        case 'Fahrenheit':
          this.result = `${(celsiusValue * 9 / 5 + 32).toFixed(2)} °F`;
          break;
        case 'Kelvin':
          this.result = `${(celsiusValue + 273.15).toFixed(2)} K`;
          break;
        default:
          this.result = 'Unidade de destino inválida';
      }
    } else {
      this.result = 'Por favor, preencha todos os campos.';
    }
  }
}
*/

import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  constructor(private modalController: ModalController) {}

  @ViewChild(IonModal) modal!: IonModal;

  message = 'Resultado';
  name!: string;

  // Conversão de Moedas
  valor: number = 0;
  resultado: number = 0;
  moeda1: string = '';
  moeda2: string = '';

  // Conversão de Temperatura
  temperatureValue: number = 0;
  fromUnit: string = '';
  toUnit: string = '';
  result: string = '';

  // Variáveis para cálculo de IMC
  weight: number = 0;
  height: number = 0;
  imcResult: string = '';

  // Variáveis para Finanças (Juros Compostos)
  finValor: number = 0;
  finTaxa: number = 0;
  finPeriodo: number = 0;
  finResultado: string = '';

  // Métodos Modal
  async cancel() {
    await this.modalController.dismiss();
  }

 // Função para calcular Juros Simples
confirm() {
  if (this.finValor > 0 && this.finTaxa > 0 && this.finPeriodo > 0) {
    const juros = this.finValor * (this.finTaxa / 100) * this.finPeriodo;
    const montante = this.finValor + juros;
    this.finResultado = `R$ ${montante.toFixed(2)} (Juros: R$ ${juros.toFixed(2)})`;
  } else {
    this.finResultado = 'Preencha todos os campos corretamente.';
  }

  this.modal.dismiss(null, 'confirm');
}


  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }

  // Função para calcular IMC
  calculateIMC() {
    if (this.weight > 0 && this.height > 0) {
      const imc = this.weight / (this.height * this.height);
      this.imcResult = `IMC: ${imc.toFixed(2)} - ${this.classifyIMC(imc)}`;
    } else {
      this.imcResult = 'Informe peso e altura válidos.';
    }
  }

  // Função auxiliar para classificar o IMC
  classifyIMC(imc: number): string {
    if (imc < 18.5) return 'Abaixo do peso';
    else if (imc < 24.9) return 'Peso normal';
    else if (imc < 29.9) return 'Sobrepeso';
    else if (imc < 34.9) return 'Obesidade grau 1';
    else if (imc < 39.9) return 'Obesidade grau 2';
    else return 'Obesidade grau 3';
  }

  // Conversão de Moedas
  calcMoeda() {
    if (this.moeda1 === this.moeda2) {
      alert("Selecione moedas diferentes!!");
      return;
    }

    if (this.moeda1 === 'real' && this.moeda2 === 'dolar') {
      this.resultado = this.valor * 0.175;
    } else if (this.moeda1 === 'real' && this.moeda2 === 'euro') {
      this.resultado = this.valor * 0.161;
    } else if (this.moeda1 === 'dolar' && this.moeda2 === 'real') {
      this.resultado = this.valor * 5.69;
    } else if (this.moeda1 === 'dolar' && this.moeda2 === 'euro') {
      this.resultado = this.valor * 0.92;
    } else if (this.moeda1 === 'euro' && this.moeda2 === 'real') {
      this.resultado = this.valor * 6.18;
    } else if (this.moeda1 === 'euro' && this.moeda2 === 'dolar') {
      this.resultado = this.valor * 1.08;
    }
  }

  // Conversão de Temperatura
  convertTemperature() {
    if (this.fromUnit && this.toUnit && this.temperatureValue != null) {
      let celsiusValue: number;

      // Converter para Celsius
      switch (this.fromUnit) {
        case 'Celsius':
          celsiusValue = this.temperatureValue;
          break;
        case 'Fahrenheit':
          celsiusValue = (this.temperatureValue - 32) * (5 / 9);
          break;
        case 'Kelvin':
          celsiusValue = this.temperatureValue - 273.15;
          break;
        default:
          this.result = 'Unidade de origem inválida';
          return;
      }

      // Converter de Celsius para a unidade de destino
      switch (this.toUnit) {
        case 'Celsius':
          this.result = `${celsiusValue.toFixed(2)} °C`;
          break;
        case 'Fahrenheit':
          this.result = `${(celsiusValue * 9 / 5 + 32).toFixed(2)} °F`;
          break;
        case 'Kelvin':
          this.result = `${(celsiusValue + 273.15).toFixed(2)} K`;
          break;
        default:
          this.result = 'Unidade de destino inválida';
      }
    } else {
      this.result = 'Por favor, preencha todos os campos.';
    }
  }
}
