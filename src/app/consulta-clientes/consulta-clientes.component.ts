import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-consulta-clientes',
  templateUrl: './consulta-clientes.component.html',
  styleUrls: ['./consulta-clientes.component.css']
})
export class ConsultaClientesComponent implements OnInit {

  listagemClientes = []; //array vazio

  cliente = {
    idCliente : 0, nome : '', email : '', cpf : ''
  }

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.consultarClientes();
  }

  consultarClientes() : void {
    this.httpClient.get(environment.apiClientes)
      .subscribe(
        (data:any[]) => {
          this.listagemClientes = data;
        },
        e => {
          console.log(e);
        }
      )
  }

  obterCliente(idCliente) : void {
    this.httpClient.get(environment.apiClientes + "/" + idCliente)
    .subscribe(
      (data:any) => {
        this.cliente = data;
      },
      e => {
        console.log(e);
      }
    )
  }

  excluirCliente(idCliente): void {

    this.httpClient.delete(environment.apiClientes + "/" + idCliente)
      .subscribe(
        (data:any) => {
          alert('Cliente '+ data.nome +' excluido com sucesso.');
          this.consultarClientes();
        },
        e => {
          console.log(e);
        }
      )
  }


  atualizarCliente(formEdicao:any) : void {
    this.httpClient.put(environment.apiClientes, formEdicao.form.value)
    .subscribe(
      (data:any) => {
        alert('Cliente '+ data.nome +' atualizado com sucesso.');
        this.consultarClientes();
      }, 
      e => {
        console.log(e);
      }
    )

  }
}
