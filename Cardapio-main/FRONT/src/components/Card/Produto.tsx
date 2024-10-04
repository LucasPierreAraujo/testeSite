import { useState } from "react";
import ProdutoModal from "../modal/ProdutoModal";

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
}

function Produto({ header, produtos,modalAberto }: IProdutosProps) {

  const [modal, setModal] = useState(false);
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

  return (
    <div className="">
      {
        modal ? <ProdutoModal produto={produtoSelecionado} closeModal={() => {
          setModal(false)
          modalAberto(false)
        }}/> : null
      }
      <h3 className="font-bold text-1xl sticky top-0 bg-zinc-200 w-full px-2 z-10 py-1 text-xl">
        {header}
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {produtos.map((produto, index) => (
          <li key={index} className="flex items-center gap-1 flex-wrap w-full bg-white rounded-lg">
            <button onClick={() => abrirModal(produto)}
              className="w-96 h-[100px] flex text-left items-center justify-between py-2 px-3"
            >
              <div>
                <h3>{produto.nome}</h3>
                <p className="text-sm text-zinc-500 max-w-[200px] overflow-hidden h-[40px]">
                  {produto.descricao}
                </p>
                <strong>R$ {produto.valor}</strong>
              </div>
              <img className="w-20 h-20 rounded-lg" src={produto.imagem} alt={produto.nome} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produto;