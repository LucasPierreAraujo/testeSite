import { useEffect, useState } from "react";
import { listarPedidos } from "../../memory/model";
import { IClienteInfor } from "./Cliente";
import { IEndereco } from "./Endereço";
import { IMeioPagamento } from "./FormaPagamento";
import { IPedido } from "../../Home";
import { formularioPedido } from "../../memory/formularioPedido";

interface IProps {
    cliente: IClienteInfor
    endereco: IEndereco
    close: () => void;
    formaPagamento: IMeioPagamento
    pedidoEnviado: () => void;
}

export default function Resumo(props: IProps) {

    const [listaSacola, setListaSacola] = useState<IPedido[]>([]);
    const subtotal = listaSacola.reduce((soma, pedido) => soma + pedido.valor_total, 0)

    const url = formularioPedido({
        telefone: props.cliente.telefone,
        nome: props.cliente.nomeCompleto,
        formaRetirada: props.endereco.formaRetirada,
        rua: props.endereco.rua,
        cpf: props.cliente.cpf || null,
        numero: props.endereco.numerp?.toString() || " ",
        complemento: props.endereco.complemento,
        referencia: props.endereco.referencia,
        bairro: props.endereco.bairro,
        produto: listaSacola,
        frete: props.endereco.frete,
        valorTotal: subtotal + props.endereco.frete,
        pagamento: props.formaPagamento.meioPagamento,
        subtotal,
        troco: props.formaPagamento.troco
    })

    useEffect(() => {
        setListaSacola(listarPedidos);
    }, [subtotal]);

    function finalizarPedido() {
        window.open(url, '_blank');
        props.pedidoEnviado()
        localStorage.clear()
    }

    return (
        <div className="w-full h-full mt-1 flex flex-col gap-4 overflow-auto">
            <div className="flex flex-col flex-1 overflow-auto">
                <h1 className="px-2 font-semibold text-lg">
                    Consumidor
                </h1>
                <div className="w-full flex flex-col bg-white border rounded-lg p-2">
                    <span>
                        Nome: {props.cliente.nomeCompleto}
                    </span>
                    <span>
                        Telefone: {props.cliente.telefone}
                    </span>
                    {props.cliente.cpf ? (
                        <span>
                            CPF: {props.cliente.cpf}
                        </span>
                    ) : null}
                    <span>
                        Forma de Retirada: {props.endereco.formaRetirada}
                    </span>
                    {
                        props.endereco.formaRetirada === "Delivery" && (
                            <>
                                {props.endereco.numerp ? (
                                    <span>
                                        Número: {props.endereco.numerp}
                                    </span>
                                ) : null}
                                <span>
                                    Bairro: {props.endereco.bairro}
                                </span>
                                <span>
                                    Complemento: {props.endereco.complemento}
                                </span>
                                <span>
                                    Referencia: {props.endereco.referencia}
                                </span>
                            </>
                        )
                    }
                    
                </div>

                <h1 className="px-2 font-semibold text-lg">
                    Sacola
                </h1>
                <div className="flex flex-col gap-2">
                    {
                        listaSacola.map((pedido, index) => {

                            return (
                                <div className="w-full flex items-end bg-white border rounded-lg justify-between relative p-2" key={index}>
                                    <div className="flex-1">
                                        <h2 className="flex-1">
                                            {pedido.nome}
                                        </h2>
                                        {
                                            pedido.molho || pedido.molho.length > 0 ? (
                                                <p className="text-xs text-zinc-700">
                                                    Molho: {pedido.molho}
                                                </p>
                                            ) : null
                                        }
                                        <p className="text-xs text-red-600">
                                            {pedido.observacao}
                                        </p>
                                        <div className="flex items-center justify-between w-full ">
                                            <p className="text-xs">
                                                R${pedido.valor_unit.toFixed(2).replace('.', ',')}x{pedido.quantidade}
                                            </p>
                                            <p className="text-xs">
                                                Total R${pedido.valor_total.toFixed(2).replace('.', ',')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>

            <div className="flex flex-col gap-2">
                <div className="w-full flex flex-col bg-white border rounded-lg justify-between relative p-2">
                    <div className="flex items-center w-full justify-between">
                        <p>Forma pagamento</p>
                        <p>{props.formaPagamento.meioPagamento}</p>
                    </div>
                    {
                        props.formaPagamento.troco ? <p className="text-sm font-semibold">Troco: R$ {props.formaPagamento.troco.toFixed(2).replace('.', ',')}</p> : null
                    }
                    <div className="flex items-center w-full justify-between">
                        <p className="text-zinc-600">
                            Subtotal
                        </p>
                        <p className="text-zinc-600">
                            R$ {subtotal.toFixed(2).replace('.', ',')}
                        </p>
                    </div>
                    <div className="flex items-center w-full justify-between">
                        <p className="text-zinc-600">
                            Taxa de entrega
                        </p>
                        <p className="text-zinc-600">
                            R$ {props.endereco.frete.toFixed(2).replace('.', ',')}
                        </p>
                    </div>
                    <div className="flex items-center w-full justify-between">
                        <p>
                            Total
                        </p>
                        <p>
                            R$ {(props.endereco.frete + subtotal).toFixed(2).replace('.', ',')}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 ">
                    <button onClick={props.close} className="py-2 bg-red-500 rounded-md w-full text-center">
                        Voltar ao menu
                    </button>
                    <button onClick={finalizarPedido} className="py-2 bg-green-500 rounded-md w-full text-center">
                        Enviar pedido
                    </button>
                </div>
            </div>

        </div>
    );
}
