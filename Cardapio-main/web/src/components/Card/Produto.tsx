import { useState } from "react";
import ProdutoModal from "../modal/ProdutoModal";
import MontarProduto from "../modal/MontarProduto";

interface Iprodutos {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  valor: number;
}

interface IProdutosProps {
  header: string;
  molho: boolean;
  modalAberto:(status: boolean) => void;
  produtos: Iprodutos[];
  montar: boolean;
  sinalOpenFrom: (open: boolean) => void;
}

function Produto({ header, produtos,modalAberto, montar, molho, sinalOpenFrom }: IProdutosProps) {

  const [modal, setModal] = useState(false);
  const [modalMontarProduto, setModalMontarProduto] = useState(false);

  const [produtoSelecionado, setProdutoSelecionado] = useState({
    id: 0,
    nome: '',
    descricao: '',
    imagem: '',
    valor: 0,
  })

  function abrirModal(produto: Iprodutos){
    setProdutoSelecionado(produto)
    modalAberto(true)
    setModal(true)
  }

  function openFromModal(){
    sinalOpenFrom(true)
  }

  return (
    <div className="">
      {
        modal ? <ProdutoModal openFrom={openFromModal} molho={molho} produto={produtoSelecionado} closeModal={() => {
          setModal(false)
          modalAberto(false)
        }}/> : null
      }
      {
        modalMontarProduto ? <MontarProduto closeModal={() => setModalMontarProduto(false)}/> : null
      }
      <h3 id={header} className="font-bold text-1xl sticky top-10 bg-zinc-200 w-full px-2 z-10 py-1 text-xl">
        {header}
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {
          montar ? (
            <li  className="flex items-center gap-1 flex-wrap w-full bg-white rounded-lg">
            <button onClick={() => setModalMontarProduto(true)}
              className="w-full h-[100px] flex text-left items-center justify-between py-2 px-3"
            >
              <div>
                <h3>Monte sua salada</h3>
                <p className="text-sm text-zinc-500 max-w-[200px] overflow-hidden h-[40px]">
                  Realize combinação do seu jeito!
                </p>
                <strong>Apartir de R$ 37,00</strong>
              </div>
              
              <img className="w-20 h-20 rounded-lg" src=""/>
            </button>
          </li>
          ) : null
        }

        {
          
          produtos.map((produto, index) => (
            <li key={index} className="flex items-center gap-1 flex-wrap w-full bg-white rounded-lg">
              <button onClick={() => abrirModal(produto)}
                className="w-full h-[100px] flex text-left items-center justify-between py-2 px-3"
              >
                <div className="w-full">
                  <h3>{produto.nome}</h3>
                  <p className="text-sm text-zinc-500 overflow-hidden h-[40px]">
                    {produto.descricao}
                  </p>
                  <strong>R$ {produto.valor.toFixed(2).replace('.',',')}</strong>
                </div>
                <img className="w-20 h-20 rounded-lg" src={produto.imagem} alt={produto.nome} />
              </button>
            </li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default Produto;