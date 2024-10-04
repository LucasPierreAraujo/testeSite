import { X } from 'phosphor-react';
import { useState } from 'react';

interface Cadastro {
    telefone: string;
    nome: string;
    rua: string;
    numero: string;
    referencia: string;
    bairro: string;
    frete: string;
    valorTotal: string;
    pagamento: string;
}

interface Props {
    cadastro: Cadastro;
    atualizacao: (novoCadastro: Cadastro) => void;
    closeModal: () => void;
}

export default function Cadastro(props: Props) {
    const [formValues, setFormValues] = useState<Cadastro>({ ...props.cadastro });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSave = () => {
        props.atualizacao(formValues);
        props.closeModal();
    };

    return (
        <div className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-15 flex items-center justify-center z-50">
            <div className="md:w-[60%] md:h-[60%] bg-white rounded-md shadow-md overflow-hidden flex flex-col p-4">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg md:text-xl mb-4">Cadastro</h1>
                    <button className="hover:bg-gray-300 p-1 rounded-lg hover:bg-opacity-25 hover:shadow-md" onClick={props.closeModal}>
                        <X size={25} />
                    </button>
                </div>

                <div className="flex flex-col gap-3 w-full">
                    <div className="flex justify-between items-center">
                        <label htmlFor="telefone" className="font-semibold">
                            Telefone:
                        </label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            value={formValues.telefone}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 border-b-2 border-zinc-600"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="nome" className="font-semibold">
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formValues.nome}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 border-b-2 border-zinc-600"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="rua" className="font-semibold">
                            Rua:
                        </label>
                        <input
                            type="text"
                            id="rua"
                            name="rua"
                            value={formValues.rua}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 border-b-2 border-zinc-600"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="numero" className="font-semibold">
                            Número:
                        </label>
                        <input
                            type="text"
                            id="numero"
                            name="numero"
                            value={formValues.numero}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 border-b-2 border-zinc-600"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="referencia" className="font-semibold">
                            Referência:
                        </label>
                        <input
                            type="text"
                            id="referencia"
                            name="referencia"
                            value={formValues.referencia}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 border-b-2 border-zinc-600"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="bairro" className="font-semibold">
                            Bairro:
                        </label>
                        <input
                            type="text"
                            id="bairro"
                            name="bairro"
                            value={formValues.bairro}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 border-b-2 border-zinc-600"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="frete" className="font-semibold">
                            Frete:
                        </label>
                        <input
                            type="text"
                            id="frete"
                            name="frete"
                            value={formValues.frete}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 border-b-2 border-zinc-600"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="valorTotal" className="font-semibold">
                            Valor Total:
                        </label>
                        <input
                            type="text"
                            id="valorTotal"
                            name="valorTotal"
                            value={formValues.valorTotal}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 border-b-2 border-zinc-600"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="pagamento" className="font-semibold">
                            Pagamento:
                        </label>
                        <select
                            id="pagamento"
                            name="pagamento"
                            value={formValues.pagamento}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 border-b-2 border-zinc-600"
                        >
                            <option value="">Selecione o pagamento</option>
                            <option value="Cartão de Crédito">Cartão de Crédito</option>
                            <option value="Cartão de Débito">Cartão de Débito</option>
                            <option value="Dinheiro">Dinheiro</option>
                            <option value="PIX">Pix</option>
                            <option value="Criptomoedas">Criptomoedas</option>
                            
                        </select>
                    </div>

                    <button
                        onClick={handleSave}
                        className="bg-green-400 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-500"
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}
