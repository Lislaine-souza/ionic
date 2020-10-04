import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
//implements OnInit
export class CadastroPage  {

  constructor(private navCtrl: NavController,) {}
  voltar() {
     this.navCtrl.navigateBack(['home']);

  }

}
