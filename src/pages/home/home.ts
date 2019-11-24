import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categoria: String = "Diversos";
  @ViewChild('email') email;
  @ViewChild('password') password;

  //método
  mudaTela (){
    this.navCtrl.push("ChatPage", {
      params: [this.email.value, this.categoria]
    });
  }

  categorySelected(categoria){
    this.categoria = categoria;
  }

  public login(): void {
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value , this.password.value)
      .then(() => {
        this.mudaTela();
      })
      .catch((erro: any) => {
        this.showToast("Usuário não existe ou a senha está incorreta");
      });
  }
  
  public cadastro(): void {
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value , this.password.value)
    .then(() => {
      this.showToast("Usuário cadastrado");
    })
    .catch((erro: any) => {
      this.showToast("Usuário já existe, ou o email não está em um formato @dominio.com ou a senha não possui 8 caracteres", 9000);
    });
  }
  
  public sair(): void {
    this.firebaseauth.auth.signOut()
    .then(() => {
      
    })
    .catch((erro: any) => {
      
    });
  }

  private showToast(mensagem: string, duration: any = 3000): void {
    let toast = this.toastCtrl.create({duration: duration, 
                                      position: 'botton'});
    toast.setMessage(mensagem);
    toast.present();
  }

  constructor(public navCtrl: NavController, private db: AngularFireDatabase, public toastCtrl: ToastController, public firebaseauth: AngularFireAuth) {
    console.log (db);
  }

}
