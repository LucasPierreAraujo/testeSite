import React, { useState } from 'react';
import { Minus, Plus, X } from 'phosphor-react';
import { memory } from '../../memory/memory';
import GIF from '../../public/gifCaixa.gif';
import { adicionarPedidos } from '../../memory/model';

interface Produto {
    id: number;
    nome: string;
    descricao: string;
    imagem: string;
    valor: number;
}

interface Molho {
    id: number;
    nome: string;
    descricao: string;
    imagemUrl: string;
    valor: number;
}

interface PropsModal {
    produto: Produto;
    closeModal: () => void;
}

export default function ProdutoModal(props: PropsModal) {
    const [quantidade, setQuantidade] = useState(1);
    const [finalizarPedido, setFinalizarPedido] = useState(false)
    const [observacao, setObservacao] = useState('');
    const [molhoSelecionado, setMolhoSelecionado] = useState('')
    let valorTotal = (props.produto.valor * quantidade);

    const {molhos} = memory()

    function montarPedido(){
        const pedidoMontado = {
            id: props.produto.id,
            nome: props.produto.nome,
            descricao: props.produto.descricao,
            molho:molhoSelecionado,
            observacao,
            quantidade,
            valor_unit: props.produto.valor,
            valor_total: valorTotal
        }
        return {pedidoMontado}
    }

    function salvarPedidoLocal() {
        const {pedidoMontado} = montarPedido()
        if(molhoSelecionado.length < 1){
            return
        }
        adicionarPedidos(pedidoMontado)
        setFinalizarPedido(true)
    }

    function mais() {
        setQuantidade(quantidade + 1);
    }

    function menos() {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    }

    const capturandoTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setObservacao(e.target.value);
      };


      return (
        <div className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-15 flex items-center justify-center z-50">
            <div className="bg-[rgb(228 228 231)] md:w-[60%] md:h-[60%] h-full w-full bg-white rounded-md shadow-md overflow-hidden flex">
                {finalizarPedido ? (
                    
                    <div className="flex flex-col items-center justify-center w-full">
                        <img className="-mt-20" src={GIF} alt="" />
                        <div className="w-full flex justify-center items-center gap-5 -mt-10">
                            <button
                                className="px-2 py-1 border border-green-600 text-green-600 shadow-lg rounded-lg"
                                onClick={() => props.closeModal()}
                            >
                                Voltar ao Cardápio
                            </button>
                            <button className="px-2 py-1 border border-green-600 bg-green-600 rounded-lg shadow-lg text-white">
                                Finalizar Pedido
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='lg:flex-row flex-col w-full flex overflow-auto'>
                        <figure className="lg:w-[40%] w-full bg-orange-300">
                            <img className="w-full h-full" src={props.produto.imagem} alt="" />
                        </figure>
                        <section className="p-4 flex flex-col flex-1">
                            <div className="flex justify-between items-start pb-2">
                                <div>
                                    <h1 className='font-semibold'>{props.produto.nome}</h1>
                                    <p className="text-sm text-zinc-700">{props.produto.descricao}</p>
                                </div>
                                <button className="hover:bg-zinc-600 p-1 rounded-lg hover:bg-opacity-25 hover:shadow-md" onClick={props.closeModal}>
                                    <X size={25} />
                                </button>
                            </div>

                            <div className="flex-1 h-full overflow-auto gap-1 flex flex-col py-2">

                                <h2 className="font-semibold">Escolha um molho</h2>

                                {molhos.map((molho) => (
                                    <button onClick={() => setMolhoSelecionado(molho.nome)} className={` ${molhoSelecionado == molho.nome ? 'bg-green-500 shadow-xl' : 'bg-zinc-100'} text-left p-2  rounded-lg flex items-center justify-between  `} key={molho.id} >
                                        <div className="flex items-center gap-2">
                                            <img className="w-12 h-12 rounded-lg" src={molho.imagem} alt="" />
                                            <div>
                                                <h3>{molho.nome}</h3>
                                                <p className='text-sm'>{molho.descricao}</p>
                                            </div>
                                        </div>
                                    </button>
                                ))}

                                <div className='h-fit'>
                                    <h2 className="font-semibold pb-1">Observação</h2>
                                    <textarea
                                        className="w-full h-36 border border-zinc-800 rounded-md p-2"
                                        placeholder="Exemplos: Sem molho, sem pimenta, sem frango..."
                                        onChange={capturandoTextArea}
                                        value={observacao}
                                    />
                                </div>


                            </div>
                            <div className="flex gap-2 pt-4">
                                <div className="flex gap-2 items-center">
                                    <button onClick={menos} className="p-2 bg-zinc-300 rounded-lg">
                                        <Minus />
                                    </button>
                                    <p className="p">{quantidade}</p>
                                    <button onClick={mais} className="p-2 bg-zinc-300 rounded-lg">
                                        <Plus />
                                    </button>
                                </div>
                                <button onClick={salvarPedidoLocal} className="w-full bg-green-500 rounded-lg">
                                    Adicionar ao carrinho R$ {valorTotal.toFixed(2).replace('.', ',')}
                                </button>
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}