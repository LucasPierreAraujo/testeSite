import { Coins, IdentificationCard, PersonSimple } from "phosphor-react";
import { formularioPedido } from "../../memory/formularioPedido";

export default function Formulario() {
    const dados = {
        telefone: "11987654321",
        nome: "João da Silva",
        rua: "Rua das Flores",
        numero: "123",
        referencia: "Próximo ao mercado",
        bairro: "Centro",
        produto: [
            {
                quantidade: 2,
                nome: 'produto a',
                observacao:'',
                valorTotalDoProduto: 2.10
            },
            {
                quantidade: 3,
                nome: 'produto b',
                observacao:'',
                valorTotalDoProduto: 2.10
            },
            {
                quantidade: 4,
                nome: 'produto c',
                observacao:'',
                valorTotalDoProduto: 2.10
            },
        ],
        frete: "10.00",
        valorTotal: "110.00",
        pagamento: "Cartão de crédito"
    };

    const whatsappLink = formularioPedido(dados);

    const handleSubmit = () => {
        window.location.href = whatsappLink; 
    };

    return (
        <div className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-15 flex items-center justify-center z-50">
            <div className="bg-[rgb(228 228 231)] md:w-[60%] md:h-[60%] h-full w-full bg-white rounded-md shadow-md overflow-hidden flex flex-col py-4 px-2 gap-14 items-center">
                <ul className="flex w-full items-center px-20 pt-5">
                    <li className={`flex flex-col relative`}>
                        <strong className="w-10 h-10 rounded-full border  flex items-center justify-center bg-green-300">
                            1
                        </strong>
                        <p className="absolute -bottom-5 -left-1">
                            Cliente
                        </p>
                    </li>
                    <li className={`w-full`}>
                        <hr className={`border-green-300 border-dashed`}/>
                    </li>
                    <li className={`flex flex-col relative`}>
                        <strong className="w-10 h-10 rounded-full border flex items-center justify-center bg-green-300 ">
                            2
                        </strong>
                        <p className="absolute -bottom-5 -left-3">
                            Endereço
                        </p>
                    </li>
                    <li className={`w-full`}>
                        <hr className={`border-green-300`}/>
                    </li>
                    <li className={`flex flex-col relative`}>
                        <strong className="w-10 h-10 rounded-full border flex items-center justify-center ">
                            3
                        </strong>
                        <p className="absolute -bottom-5 -left-4">
                            Pagamento
                        </p>
                    </li>
                    <li className={`w-full`}>
                        <hr className={`border-green-300 `}/>
                    </li>

                    <li className={`px-4 h-10 rounded-lg border flex items-center justify-center`}>
                        Resumo
                    </li>
                </ul>

                <div className="flex w-full px-20 flex-col justify-center flex-1">
                    <label className="py-1 font-semibold">Nome completo</label>
                    <input className=" px-2 py-1 rounded-md border border-zinc-500" type="text" placeholder="Nome completo"/>
                    <label className="py-1 font-semibold">Telefone</label>
                    <input className=" px-2 py-1 rounded-md border border-zinc-500" type="text" placeholder="(00) 0 0000-0000"/>
                    <div className="flex gap-1 items-center py-1">
                        <input className="mt-1 w-4 h-4" type="checkbox" name="" id="" />
                        <p className="font-semibold">
                            CPF na nota ?
                        </p>
                    </div>
                    <input className=" px-2 py-1 rounded-md border border-zinc-500" type="text" placeholder="000.000.000-00"/>
                </div>
                <div className="flex justify-end w-full px-20 items-center gap-8">
                    <button className="px-4 py-1 bg-red-500 rounded-md text-white shadow-md">
                        Cancelar
                    </button>
                    <button className="px-4 py-1 bg-green-500 rounded-md text-white shadow-md">
                        Proximo
                    </button>
                </div>
            </div>
        </div>
    );
}
