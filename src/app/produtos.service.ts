import { Injectable } from '@angular/core';
import {IProduto, produtos} from "./produtos";

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;
  constructor() { }

  getAll() {
    return this.produtos;
  }

  getById(idProduto: number) {
    // let find = this.produtos.find(produto => produto.id = idProduto);
    // console.log(find)
    return this.produtos.find(produto => produto.id = idProduto);
  }
}
