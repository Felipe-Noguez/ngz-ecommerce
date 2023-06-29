import {Component, OnInit} from '@angular/core';
import {ProdutosService} from "../../produtos.service";
import {IProduto} from "../../produtos";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit{
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const idProduto = Number (routeParams.get("id"));
    this.produto = this.produtoService.getById(idProduto);
    // console.log(this.produto);
  }
}
