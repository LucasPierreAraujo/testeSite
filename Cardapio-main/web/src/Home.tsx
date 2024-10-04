import { useEffect, useState } from "react";
import { MapPinLine, ShoppingBag, WhatsappLogo, X, SmileySad, Minus, Plus, Trash } from "phosphor-react";
import { memory } from "./memory/memory";
import { atualizarPedido, deletaPedido, listarPedidos } from "./memory/model";
import ConfirmacaoExclusao from "./components/modal/ConfirmacaoExclusao";
import Produto from "./components/Card/Produto";
import Banner from "/Banner.jpeg";
import Logo from "/Logo2.jpeg";
import Forumulario from "./components/modal/Formulario"; 
import horario from "./memory/horario";

export interface IPedido {
  id: number;
  nome: string;
  descricao: string;
  molho: string;
  observacao: string;
  quantidade: number;
  valor_unit: number;
  valor_total: number;
}

export default function Home() {
  const { produtos, molhos, sucos, bebidas, extras } = memory();
  const [listaSacola, setListaSacola] = useState<IPedido[]>([]);
  const [ponteiroAtualizacao, setPonteiroAtualizacao] = useState(false);
  const [algumModalAberto, setAlgumModalAberto] = useState(false);
  const [openSacola, setOpenSacola] = useState(false);
  const [formularioModal, setFormularioModal] = useState(false);
  const [confirmacaoExclusaoConfig, setConfirmacaoExclusaoConfig] = useState({
    closeModal: false,
    confirmacao: false,
    index: 0,
    produto: ""
  });

  let somaSacola = 0;

  useEffect(() => {
    setListaSacola(listarPedidos);
  }, [ponteiroAtualizacao, algumModalAberto, formularioModal, openSacola]);

  function exclusaoProdutoSacola(index: number) {
    deletaPedido(index);
    setConfirmacaoExclusaoConfig({
      ...confirmacaoExclusaoConfig,
      closeModal: false,
      confirmacao: false,
      index: 0
    });
    setPonteiroAtualizacao(!ponteiroAtualizacao);
  }


  function abrirFormulario() {
    if (listaSacola.length === 0) {
      return;
    }
    setFormularioModal(true);
  }

  function mais(index: number) {
    const pedido = listaSacola[index];
    const atualizacao = {
      ...pedido,
      quantidade: pedido.quantidade + 1,
      valor_total: pedido.valor_unit * (pedido.quantidade + 1)
    };
    atualizarPedido(index, atualizacao);
    setPonteiroAtualizacao(!ponteiroAtualizacao);
  }

  function menos(index: number) {
    const pedido = listaSacola[index];
    if (pedido.quantidade === 1) {
      setConfirmacaoExclusaoConfig({
        ...confirmacaoExclusaoConfig,
        closeModal: true,
        index
      });
      return;
    }
    const atualizacao = {
      ...pedido,
      quantidade: pedido.quantidade - 1,
      valor_total: pedido.valor_unit * (pedido.quantidade - 1)
    };
    atualizarPedido(index, atualizacao);
    setPonteiroAtualizacao(!ponteiroAtualizacao);
  }

  return (
    <div className={`h-screen relative scroll-smooth focus:scroll-auto ${formularioModal ? 'overflow-hidden' : null}`}>

      {formularioModal && <Forumulario closeModal={() => setFormularioModal(false)} closeSacola={() => setOpenSacola(false)}/>}

      {confirmacaoExclusaoConfig.closeModal && (
        <ConfirmacaoExclusao
          closeModal={() =>
            setConfirmacaoExclusaoConfig({
              ...confirmacaoExclusaoConfig,
              closeModal: false
            })
          }
          confirmacao={(indexValue) => exclusaoProdutoSacola(indexValue)}
          index={confirmacaoExclusaoConfig.index}
          produto={confirmacaoExclusaoConfig.produto}
        />
      )}

      <header className={`px-4 py-5 w-full relative md:px-10 lg:px-20 `}>


        <div className=" fixed bottom-10 right-10 bg-green-500 rounded-full p-2 flex items-center shadow-lg z-30  md:hidden">
          <button
            onClick={() => setOpenSacola(true)}
            className="relative"
          >
            <ShoppingBag className="text-white" size={35} />
            {
              listaSacola.length > 0 ? (
              <div className="absolute -top-4 -right-2 z-40 shadow-lg border-white bg-red-500 w-6 h-6 flex items-center justify-center rounded-full text-white" >
                {listaSacola.length}
              </div>
              ) : null
            }
          </button>

        </div>

        <div className="w-full h-fit rounded-xl overflow-hidden shadow-lg">
          <img
            className="w-full h-fit object-cover"
            src={Banner}
            alt="Pizzaria Background"
          />
        </div>
        <div className="flex flex-col gap-4 -mt-10 px-2 md:flex-row md:px-10 lg:gap-4">
          <img
            className="w-24 h-24 border-2 border-[rgb(228 228 231)] rounded-lg shadow-lg md:w-32 md:h-32"
            src={Logo}
            alt="Logo"
          />
          <div className="mt-4 flex flex-col gap-1 md:mt-12">
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-xl md:text-xl">
                Salada Conceito
              </h1>

              <p className={`px-4 py-1 ${horario().status ? 'text-green-800 bg-green-200' : 'text-red-800 bg-red-200'}  rounded-md text-sm flex font-semibold`}>
                {horario().status ? 
                  'Aberto' : 
                  (
                    `Abre às ${horario().horaAbertura.toFixed(2).replace('.',':')}`
                  )
                }
              </p>
            </div>
            <a className="flex items-center gap-1" href="https://maps.google.com?q=Rua.+xxx,+N-xx">
              <MapPinLine size={19} />
              Avenida Rogaciano Leite 2031, Loja 07
            </a>
            {/* eu não sei o que aconteceu aqui, porem irei fazer esse comentario e subir novamenta com intuito de voltar a funcionar milagrosamente */}
            <a className="flex items-center gap-1" href="https://wa.me/xx(xxx)xxxxx-xxxx">
              <WhatsappLogo size={19} />
            (85) 9 9205-1239
            </a>
          </div>
        </div>
      </header>

      <main className="px-4 w-full md:px-10 lg:px-20">
        <nav className="flex flex-col gap-3 sticky top-0 pt-2 bg-zinc-200 w-full z-30">
          <ul className="w-full overflow-auto flex items-center gap-3 ">
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#Saladas">Saladas</a>
            </li>
            {/* <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="">Proteinas</a>
            </li> */}
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#Molhos">Molhos</a>
            </li>
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#Extras">Extras</a>
            </li>
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#Sucos">Sucos</a>
            </li>
            <li className="bg-white w-fit px-3 py-1 rounded-lg">
              <a href="#Bebidas">Bebidas</a>
            </li>
          </ul>
        </nav>
        <section className="flex gap-2 py-4">

          <div className="flex flex-col flex-wrap gap-2 flex-1">
            <Produto
              header="Saladas"
              molho={true}
              produtos={produtos}
              modalAberto={(status) => setAlgumModalAberto(status)}
              montar={false}
              sinalOpenFrom={(e: boolean) => setFormularioModal(e)}
            />

            {/* <Produto
              header="Proteinas"
              molho={false}
              produtos={proteinas}
              modalAberto={(status) => setAlgumModalAberto(status)}
            /> */}
            <Produto
              header="Molhos"
              molho={false}
              produtos={molhos}
              modalAberto={(status) => setAlgumModalAberto(status)}
              montar={false}
              sinalOpenFrom={(e: boolean) => setFormularioModal(e)}
            />
            <Produto
              header="Extras"
              molho={false}
              produtos={extras}
              modalAberto={(status) => setAlgumModalAberto(status)}
              montar={false}
              sinalOpenFrom={(e: boolean) => setFormularioModal(e)}
            />
            <Produto
              header="Sucos"
              molho={false}
              produtos={sucos}
              modalAberto={(status) => setAlgumModalAberto(status)}
              montar={false}
              sinalOpenFrom={(e: boolean) => setFormularioModal(e)}
            />
            <Produto
              header="Bebidas"
              molho={false}
              produtos={bebidas}
              modalAberto={(status) => setAlgumModalAberto(status)}
              montar={false}
              sinalOpenFrom={(e: boolean) => setFormularioModal(e)}
            />

          </div>
          <div className={`w-80 h-fit bg-white rounded-lg p-2 lg:mt-9 lg:flex flex-col gap-2 ${openSacola ? 'fixed w-full h-full flex -top-0 left-0 z-40' : 'sticky hidden top-9'}`}>
            <div className="flex justify-between items-center border-b py-1">
              <h1 className="font-semibold text-lg">
                Sacola
              </h1>
              {openSacola && (
                <button onClick={() => setOpenSacola(false)} className="lg:hidden">
                  <X />
                </button>
              )}
            </div>
            <div className={`${openSacola ? 'h-full' : 'h-96'} g-red-400 flex w-full flex-col overflow-auto gap-1`}>
              {listaSacola.length > 0 ? (
                listaSacola.map((pedido, index) => {
                  somaSacola += pedido.valor_total;

                  return (
                    <div className="w-full flex items-end bg-white border rounded-lg justify-between relative p-2" key={index}>
                      <div className="flex-1">
                        <h2 className="flex-1">
                          {pedido.nome}
                        </h2>
                        <p className="text-xs text-zinc-700">
                          {pedido.molho}
                        </p>
                        <p className="text-xs text-red-600">
                          {pedido.observacao}
                        </p>
                        <p className="text-xs text-zinc-600">
                          R${pedido.valor_unit.toFixed(2).replace('.', ',')}/unit
                        </p>
                        <p>
                          Total R${pedido.valor_total.toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                      <div className="flex flex-col justify-between h-full">
                        <div className="w-full text-right">
                          <button onClick={() => setConfirmacaoExclusaoConfig({
                            ...confirmacaoExclusaoConfig,
                            closeModal: true,
                            index
                          })}>
                            <Trash className="text-red-400 hover:text-red-500" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => menos(index)} className="p-1 bg-zinc-300 rounded-lg">
                            <Minus />
                          </button>
                          <span>
                            {pedido.quantidade}
                          </span>
                          <button onClick={() => mais(index)} className="p-1 bg-zinc-300 rounded-lg">
                            <Plus />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <SmileySad size={100} className="text-zinc-600" />
                  <span className="text-zinc-600 w-48 text-center">
                    Nenhum pedido adicionado na sacola
                  </span>
                </div>
              )}
            </div>
            <div className="p-1 w-full">
              {horario().status ? (
                <button onClick={abrirFormulario} className="bg-green-400 text-zinc-900 w-full text-center py-1 rounded-md">
                  Finalizar Pedido R${somaSacola.toFixed(2).replace('.', ',')}
                </button>
              ) : (
                <button disabled className="py-1 text-red-800 bg-red-200 font-semibold w-full text-center rounded-md">
                  Abrimos às {horario().horaAbertura.toFixed(2).replace('.',':')}
                </button>
              )}
            </div>
          </div>

        </section>
      </main>
      <footer>
              <div className="w-auto h-fit bg-green-500 flex justify-center p-2 rounded-sm">
                  <h1 className="text-yellow-50">© 2024 Copyright by Inova Tech</h1>
              </div>
      </footer>
    </div>
  );
}
