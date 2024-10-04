import { useState, useEffect } from 'react';
import { Minus, Plus, X } from 'phosphor-react';
import GIF from '/gifCaixa.gif';
import { memory } from '../../memory/memory';

interface PropsModal {
    closeModal: () => void;
}

interface Adicional {
    nomeGrupoAdicional: string;
    item: string;
    quantidade: number;
    valor: number;
}

export default function MontarProduto(props: PropsModal) {
    const [quantidade, setQuantidade] = useState(1);
    const [finalizarPedido, setFinalizarPedido] = useState(false);
    const { saladaMontada } = memory();
    const [select, setSelect] = useState<Adicional[]>([]);
    const [valorTotal, setValorTotal] = useState(37);

    useEffect(() => {
        const novoValorTotal = select.reduce((total, item) => total + item.valor * item.quantidade, 37);
        setValorTotal(novoValorTotal);
    }, [select]);

    function selecionarItem(grupo: string, item: string, valor: number, incremento: number) {
        setSelect(prevSelect => {
            const itemExistente = prevSelect.find(i => i.nomeGrupoAdicional === grupo && i.item === item);
            const grupoSelectItem = prevSelect.filter(i => i.nomeGrupoAdicional === grupo);

            if (itemExistente) {
                const novaQuantidade = itemExistente.quantidade + incremento;
                if (novaQuantidade <= 0) {
                    return prevSelect.filter(i => i !== itemExistente);
                } else if (novaQuantidade <= 5) {
                    return prevSelect.map(i => 
                        i === itemExistente ? { ...i, quantidade: novaQuantidade } : i
                    );
                }
            } else {
                if (incremento > 0 && grupoSelectItem.length < 5) {
                    return [...prevSelect, { nomeGrupoAdicional: grupo, item, quantidade: incremento, valor }];
                }
            }
            return prevSelect;
        });
    }

    function montarPedido() {
        const pedido: {itens: Adicional[], quantidade: number, valorTotal: number} = {
            itens: select,
            quantidade,
            valorTotal
        }

        return pedido
    }

    function salvarPedidoLocal() {
        montarPedido();
        setFinalizarPedido(true);
    }

    function mais() {
        setQuantidade(quantidade + 1);
    }

    function menos() {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    }

    console.log(saladaMontada);

    return (
        <div className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-15 flex items-center justify-center z-50">
            <div className="bg-[rgb(228 228 231)] md:w-[60%] md:h-[60%] h-full w-full bg-white rounded-md shadow-md overflow-hidden flex">
                {finalizarPedido ? (
                    <div className="flex flex-col items-center justify-center w-full">
                        <img className="-mt-20" src={GIF} alt="GIF" />
                        <div className="w-full flex justify-center items-center gap-5 -mt-10">
                            <button
                                className="px-2 py-1 border border-green-600 text-green-600 shadow-lg rounded-lg"
                                onClick={() => props.closeModal()}
                            >
                                Voltar ao Cardápio
                            </button>
                            <button className="px-2 py-1 border border-green-600 bg-green-600 rounded-lg shadow-lg text-white"
                            onClick={() => props.closeModal()}>
                                Finalizar Pedido
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="lg:flex-row flex-col w-full flex overflow-auto">
                        <figure className="lg:w-[40%] w-full bg-orange-300">
                            <img className="w-full h-full" src="https://static.itdg.com.br/images/360-240/d8fa256da2431f35d207c3489e11973c/346244-original.jpg" alt="Salada" />
                        </figure>
                        <section className="flex flex-col flex-1 h-full overflow-auto">
                            <div className="flex justify-between items-start">
                                <div className="px-2 py-2">
                                    <h1 className="font-semibold">{saladaMontada.nome}</h1>
                                    <p className="text-sm text-zinc-700">{saladaMontada.descricao}</p>
                                </div>
                                <button className="hover:bg-zinc-600 p-1 rounded-lg hover:bg-opacity-25 hover:shadow-md" onClick={props.closeModal}>
                                    <X size={25} />
                                </button>
                            </div>
                            <div className="flex-1 h-full overflow-auto gap-1 flex flex-col py-2">
                                {saladaMontada.grupoAdicional.map((adicional) => {
                                    const grupoSelectItem = select.filter((item) => item.nomeGrupoAdicional === adicional.grupoAdicional);

                                    return (
                                        <div key={adicional.grupoAdicional}>
                                            <div className="bg-zinc-200 px-2 py-1 top-0">
                                                <h1>{adicional.grupoAdicional}</h1>
                                                <div className="flex w-full justify-between items-center">
                                                    <p className="text-zinc-600 text-sm">Adicione até 3 itens</p>
                                                    {adicional.quantidadeMinima > 0 && (
                                                        <span className="text-xs pr-2 text-zinc-600 px-2 py-1 bg-green-300 rounded-md">
                                                            Obrigatório
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 px-4 py-1">
                                                {adicional.itens.map((item) => {
                                                    const quantidadeItens = grupoSelectItem.find((i) => i.item === item.nome)?.quantidade || 0;

                                                    return (
                                                        <div key={item.nome} className="flex items-center gap-2">
                                                            <img className="w-12 h-12 rounded-lg" src="" alt={item.nome} />
                                                            <div className="text-left flex-1">
                                                                <h3>{item.nome}</h3>
                                                                <p className="text-sm">R$ {item.valor.toFixed(2).replace('.', ',')}</p>
                                                            </div>
                                                            <div className={`flex items-center gap-2 ${quantidadeItens >= 5 ? 'text-zinc-400' : ''}`}>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        selecionarItem(adicional.grupoAdicional, item.nome, item.valor, -1);
                                                                    }}
                                                                >
                                                                    <Minus />
                                                                </button>
                                                                <p>{quantidadeItens}</p>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        selecionarItem(adicional.grupoAdicional, item.nome, item.valor, 1);
                                                                    }}
                                                                >
                                                                    <Plus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex gap-2 p-2">
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
