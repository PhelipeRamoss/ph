import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  weight: number = 0;
  height: number = 0;
  imcResult: string = '';

  constructor(private modalController: ModalController) {}

  // Calcula o IMC e define o resultado
  calculateIMC() {
    if (this.weight > 0 && this.height > 0) {
      const imc = this.weight / (this.height * this.height);
      this.imcResult = `IMC: ${imc.toFixed(2)} - ${this.classifyIMC(imc)}`;
    } else {
      this.imcResult = 'Informe peso e altura válidos.';
    }
  }

  // Classifica o IMC de acordo com o valor
  classifyIMC(imc: number): string {
    if (imc < 18.5) return 'Abaixo do peso';
    else if (imc < 24.9) return 'Peso normal';
    else if (imc < 29.9) return 'Sobrepeso';
    else if (imc < 34.9) return 'Obesidade grau 1';
    else if (imc < 39.9) return 'Obesidade grau 2';
    else return 'Obesidade grau 3';
  }

  // Cancela o modal
  async cancel() {
    await this.modalController.dismiss();
  }

  // Confirma e fecha o modal (se quiser)
  async confirm() {
    await this.modalController.dismiss({
      weight: this.weight,
      height: this.height,
      result: this.imcResult,
    }, 'confirm');
  }

  // Ao fechar o modal (caso use onWillDismiss)
  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      const { weight, height, result } = event.detail.data;
      this.weight = weight;
      this.height = height;
      this.imcResult = result;
    }
  }
}
