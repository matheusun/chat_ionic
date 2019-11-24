import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MsgService } from '../../app/msg.service'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  msgs;
  username;
  category;
  text;
  texto;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                        private msgService: MsgService, private alertCtrl: AlertController) {
    this.username = this.navParams.get("params")[0];
    this.category = this.navParams.get("params")[1];
    this.msgs = this.msgService.getMsgsCategory(this.category);
  }

  addMsg(){
    this.msgService.addMsg(this.username, this.texto, this.category);
  }

}
