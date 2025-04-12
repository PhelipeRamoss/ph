import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.scss'],
  imports: [
    FormsModule,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonModal,
    IonTitle,
    IonToolbar,
  ],
})
export class MoedaComponent  implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  constructor() { }
  ngOnInit() {}

  message = 'Exemplo de Modal';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'Fechar');
  }

  confirm() {
    this.modal.dismiss(this.name, 'Calcular');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Resultado, ${event.detail.data}!`;
    }
  }

}
