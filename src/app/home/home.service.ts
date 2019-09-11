
import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../form-login/service/storage.service';
import { ContatoDTO } from '../model/ContatoDTO';

@Injectable()
export class HomeService {

    url:string = 'http://localhost:3002/contatos';
    urlBase:string = 'http://localhost:3002/';

    constructor(private http: HttpClient, private storage: StorageService){

    }

    getMensagem(idMensagem):Observable<ContatoDTO[]>{

        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer '+token});

        return this.http.get<ContatoDTO[]>(this.url+idMensagem, {'headers': authHeader});
    }

    getAllMensagem():Observable<ContatoDTO[]>{
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer '+token});

        return this.http.get<ContatoDTO[]>(this.url, {'headers': authHeader});
    }

    enviarMensagem(mensagem: ContatoDTO){
       // let token = this.storage.getLocalUser().token;
       // let headers = new HttpHeaders({'Content-Type':'application/json'});
        console.log(mensagem);
        return this.http.post(this.url, mensagem);
    }

    removeMensagem(idMensagem){
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer '+token});
        
        return this.http.delete(this.urlBase+"precos/"+idMensagem, {'headers': authHeader})
    }
}