import {AngularFireDatabase} from 'angularfire2/database'
import { Inject } from '@angular/core';
@Inject({MsgService})
export class MsgService{

    addMsg(username: string, texto: string, categoria: string){
        var date = new Date();
        switch(categoria){
            case "Cinema": {
                this.db.list("/cinema/").push({date: date+"", username: username, text: texto});
                break;
            }
            case "Esportes": {
                this.db.list("/esportes/").push({date: date+"", username: username, text: texto});
                break;
            }
            default: {
                this.db.list("/diversos/").push({date: date+"", username: username, text: texto});
                break;
            }
        }
    }

    getMsgsCategory(categoria){
        if(categoria == "Cinema") return this.db.list("/cinema/");
        if(categoria == "Esportes") return this.db.list("/esportes/");
        return this.db.list("/diversos/");
    }

    constructor (private db: AngularFireDatabase){
    }

}