import { Trash } from "phosphor-react";

interface Iprops{
    closeModal: () => void;
    confirmacao: (indexValue: number) => void;
    index:number;
    produto: string;
}

export default function ConfirmacaoExclusao(props: Iprops){
    return (
        <div className="fixed inset-0 bg-zinc-500 bg-opacity-50 flex items-center z-50 justify-center">
            <div className="p-4 bg-white rounded-md flex items-center justify-center flex-col gap-3">
                <div className="p-2 bg-red-200 rounded-full">
                    <Trash size={100} className="text-red-400"/>
                </div>
                <h1 className="font-semibold">
                    {props.produto}
                </h1>
                <p>
                    Realmente deseja excluir esse item da sua sacola ?
                </p>
                <div className="flex gap-2">
                    <button onClick={props.closeModal} className="w-full px-10 py-1 rounded-lg bg-zinc-800 text-white">
                        Cancelar
                    </button>
                    <button onClick={() => props.confirmacao(props.index)} className="w-full px-10 py-1 rounded-lg bg-red-800 text-white">
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    );
}