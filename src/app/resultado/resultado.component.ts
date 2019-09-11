import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimulacaoDTO } from '../model/SimulacaoDTO';
import { SimulacaoService } from '../simulacao/simulacao.service';

@Component({
    selector: 'resultado',
    templateUrl: './resultado.component.html'
})
export class ResultadoComponent  implements OnInit{
    
    nome:String = "";
    simulacao:SimulacaoDTO;
    resultado:String = "";
    naoAlterar:boolean = true;
    alterar:boolean = false;

    constructor(private route: ActivatedRoute, private simulacaoService: SimulacaoService) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.simulacaoService.getSimulacao(params['id'])
                .subscribe(res => {
                    this.simulacao = res;
                    this.nome = this.simulacao.nome;
                    this.resultado = this.simulacao.qtdVezesDividir+' X '+'R$ '+this.formatarMoedaParam(this.simulacao.resultado);
                    //this.resultado = this.simulacao.resultado;
                    //console.log(res);
                })
            
            console.log('Cadastrado com sucesso!'+params['id']);
        });
      }

      alterarInformacao(){
          this.alterar = true;
          this.naoAlterar = false;
      }

      cancelarAlteracao(){
        this.alterar = false;
        this.naoAlterar = true; 
      }

      salvar(){
        this.alterar = false;
        this.naoAlterar = true; 
          this.simulacao.maisInformacao = true;
          this.simulacaoService.alterarSimulacao(this.simulacao)
          .subscribe(res => {
            console.log(this.simulacao);
          })
          
      }

      formatarMoedaParam(valor):string {
       
        var tmp = valor+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
      }


}