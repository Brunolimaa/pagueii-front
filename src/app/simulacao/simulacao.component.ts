import { Component } from '@angular/core';
import { SimulacaoDTO } from '../model/SimulacaoDTO';
import { SimulacaoService } from './simulacao.service';
import { Router } from '@angular/router';

@Component({
    selector: 'simulacao',
    templateUrl: './simulacao.component.html'
})
export class SimulacaoComponent {
  
   nome:String = "";
   email:String = "";
   telefone:String = "";
   valor:any = "";
   qtdVezesDividir:number = 0;
   simulacao:SimulacaoDTO = new SimulacaoDTO();
   loading = false;
   valorSemFormatar:String;    

   constructor(private service: SimulacaoService, private router:Router){

   }

   cadastrar(){
       this.simulacao.nome = this.nome;
       this.simulacao.email = this.email;
       this.simulacao.telefone = this.telefone;
       this.simulacao.valor = this.removerFormatacaoMoeda(this.valor);
       this.simulacao.qtdVezesDividir = this.qtdVezesDividir;
       this.loading = true;
       this.valor = this.removerFormatacaoMoeda(this.valor);
        let mensalidade =  (this.valor /  this.qtdVezesDividir ) + ((this.valor /  this.qtdVezesDividir ) * 0.14);
        this.simulacao.resultado = ''+mensalidade;
            
        this.service.cadastrarSimulacao('simulacao', this.simulacao)
        .subscribe( res => {
            this.simulacao = res;
        })
    
    
        setTimeout(()=>{
            this.loading = false;
            document.getElementById("btnClose").click();
            this.router.navigate(['resultado',  this.simulacao.id]);
        }, 3000);

   }

   formatarMoeda() {
       
    var v = this.valor.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
	v = v.replace(".", ",");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    this.valor = v;
  }


  formatarMoedaParam(valor):string {
       
    var v = valor.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    return v;
  }

  removerFormatacaoMoeda(valor):String{
    var v = valor.replace(",", "");
    v = v.replace(".","");
    return v;
  }

  mascaraTelefone(){
    if(this.telefone.length == 1)
        this.telefone = '(' + this.telefone; 
    if(this.telefone.length == 3)
        this.telefone = this.telefone + ') '; 

    if(this.telefone.length == 9)
        this.telefone = this.telefone + '-';
  }

   /*
   		function simular() {
			var qtdVezes = document.getElementById("qtdVezesDividir").value;
			var valorConta = document.getElementById("valorConta").value;
			var mensalidade = (valorConta / qtdVezes ) + ((valorConta / qtdVezes ) * 0.14);
			document.getElementById("formResultadoSimulacao").style.display = "block";
			document.getElementById("formResultado").style.display = "none";
			document.getElementById("resultado").style.display = "block";			
			
			document.getElementById("resulParcela").innerHTML = qtdVezes + " x de R$ "+mensalidade.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
			//alert('Resultado:   Sua conta ficou '+ qtdVezes + 'X de R$ '+ mensalidade );
		}
		
		function voltar(){
			document.getElementById("formResultado").style.display = "block";
			document.getElementById("formResultadoSimulacao").style.display = "none";
		}*/
}

