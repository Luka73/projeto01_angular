import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  //atributos..
  mensagemSucesso:string;
  mensagemErro:string;

  //injeção de dependência @AutoWired
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  limparMensagens(): void{
    this.mensagemSucesso = '';
    this.mensagemErro = '';
  }

  cadastrarCliente(formCadastro:any): void{
    
    this.limparMensagens();

    //executando o serviço de cadastro de cliente da API JAVA
    this.httpClient.post(environment.apiClientes, formCadastro.form.value)
      .subscribe( //capturando o PROMISSE (retorno) da API
        (data:any) => { //SUCESSO ; any -> significa q o tipo de 'data' é qq conteúdo JSON.
          this.mensagemSucesso = "Cliente '"+ data.nome +"' cadastrado com sucesso.";
          //limpar os campos do formulário
          formCadastro.form.reset();
        },
        e => { //ERRO
          this.mensagemErro = "Erro ao cadastrar cliente.";
        }
      )

      //data -> variável que pega o retorno no promisse
      // => {} -> função em ts
  }

}
