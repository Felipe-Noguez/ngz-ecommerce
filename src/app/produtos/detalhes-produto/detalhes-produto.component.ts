import {Component, OnInit} from '@angular/core';
import {ProdutosService} from "../../produtos.service";
import {IProduto, IProdutoCarrinho} from "../../produtos";
import {ActivatedRoute} from "@angular/router";
import {NotificacaoService} from "../../notificacao.service";
import {CarrinhoService} from "../../carrinho.service";

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
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const idProduto = Number (routeParams.get("id"));
    this.produto = this.produtoService.getById(idProduto);
    // console.log(this.produto);
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
