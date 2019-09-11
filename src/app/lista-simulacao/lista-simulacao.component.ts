import { Component, OnInit } from '@angular/core';
import { SimulacaoService } from '../simulacao/simulacao.service';
import { SimulacaoDTO } from '../model/SimulacaoDTO';

@Component({
	selector: 'lista-simulacao',
	templateUrl: './lista-simulacao.component.html'
})

export class ListaSimulacaoComponent  implements OnInit{

	listaSimulacao: SimulacaoDTO[];

	constructor(private simulacaoService: SimulacaoService){
		
	}
	
	ngOnInit(): void {
		this.simulacaoService.getAllSimulacao().subscribe( res => {
			this.listaSimulacao = res;
			this.listaSimulacao.map(x => {
				x.resultado = x.qtdVezesDividir+' X '+' R$ '+this.formatarMoedaParam(x.resultado);
				//x.valor = this.formatarMoedaParam(x.valor);
			})
		})
	}

	formatarMoedaParam(valor):string {
       
		var v = valor.replace(/\D/g,'');
		v = (v/100).toFixed(2) + '';
		v = v.replace(".", ",");
		v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
		v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
		return v;
	  }
}