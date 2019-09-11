import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { ContatoDTO } from '../model/ContatoDTO';

@Component({
	selector: 'home-app',
	templateUrl: './home.component.html'
})

export class HomeComponent {
	
	cname:string="";
	cemail:string="";
	cmessage:string="";
	contatoDTO: ContatoDTO = new ContatoDTO();
    loading = false;

	constructor(private service: HomeService){

	}

	enviarMensagem(){
		this.loading = true;

		this.contatoDTO.nome = this.cname;
		this.contatoDTO.email = this.cemail;
		this.contatoDTO.mensagem = this.cmessage;

		this.service.enviarMensagem(this.contatoDTO).subscribe(res => {
			this.cname = ""; 
			this.cemail = "";
			this.cmessage = "";

			this.loading = false;
		});

		// this.service.getAllMensagem().subscribe( res => {
		// 	console.log(res);
		// })
		
	}
	
}