import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimulacaoDTO } from '../model/SimulacaoDTO';
import { StorageService } from '../form-login/service/storage.service';


@Injectable()
export class SimulacaoService {
    url:string = 'http://localhost:3002/simulacao/';
    urlBase:string = 'http://localhost:3002/';

    constructor(private http: HttpClient, private storage: StorageService){

    }

    getSimulacao(idSimulacao):Observable<SimulacaoDTO>{

        //let token = this.storage.getLocalUser().token;
        //let authHeader = new HttpHeaders({'Authorization': 'Bearer '+token});

        //return this.http.get<SimulacaoDTO[]>(this.url+idSimulacao, {'headers': authHeader});
        return this.http.get<SimulacaoDTO>(this.url+idSimulacao);
    }

    getAllSimulacao():Observable<SimulacaoDTO[]>{
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer '+token});

        return this.http.get<SimulacaoDTO[]>(this.url, {'headers': authHeader});
    }

    cadastrarSimulacao(url: string, simulacao: SimulacaoDTO):Observable<any>{
       // let token = this.storage.getLocalUser().token;
        let headers = new HttpHeaders({'Content-Type':'application/json'});

        return this.http.post(this.urlBase+""+url, simulacao, {'headers': headers});
        //return this.http.post(this.urlBase+""+url, simulacao);
    }

    removeSimulacao(idSimulacao){
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer '+token});
        
        return this.http.delete(this.urlBase+"precos/"+idSimulacao, {'headers': authHeader})
        //return this.http.delete(this.urlBase+"precos/"+idSimulacao)
    }

    alterarSimulacao(simulacao: SimulacaoDTO){
        // let token = this.storage.getLocalUser().token;
         let headers = new HttpHeaders({'Content-Type':'application/json'});
 
         return this.http.put(this.url, simulacao, {'headers': headers});
         //return this.http.post(this.urlBase+""+url, simulacao);
     }
}