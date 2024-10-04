import { useEffect, useState } from "react";
import ReactInputMask from "react-input-mask";

export interface IClienteInfor{
    nomeCompleto: string
    telefone: string
    cpf?: string
}

interface IProps {
    clienteInfo: (dados: IClienteInfor) => void;
    proximo: () => void;
    dados?: IClienteInfor
    error: string;
}

export function Cliente(props: IProps) {

  const [cpfChecked, _] = useState(false);
  const [dados, setDados] = useState<IClienteInfor>({
    nomeCompleto: props.dados?.nomeCompleto || "",
    telefone: props.dados?.telefone || "",
    cpf: props.dados?.cpf || "",
  })
   
  useEffect(() => {props.clienteInfo(dados)},[dados])
   
  return (
    <div className="flex w-full px-4 md:px-20 flex-col flex-1 pb-12">
      <label className="py-1 font-semibold">Nome completo</label>
      <input
        className={`px-2 py-1 rounded-md border ${props.error === 'nome' ? 'border-red-500': 'border-zinc-500'}`}
        type="text"
        placeholder="Nome completo"
        value={dados.nomeCompleto}
        onChange={(e) => setDados({...dados, nomeCompleto: e.target.value})}
      />

      <label className="py-1 font-semibold">Telefone</label>
      <ReactInputMask
        className={`px-2 py-1 rounded-md border ${props.error === 'telefone' ? 'border-red-500': 'border-zinc-500'}`}
        mask="(99) 9 9999-9999"
        placeholder="(00) 0 0000-0000"
        value={dados.telefone}
        onChange={(e) => setDados({...dados, telefone: e.target.value})}
      />

      {/* <div className="flex gap-1 items-center py-1">
        <input
          className="mt-1 w-4 h-4"
          type="checkbox"
          checked={cpfChecked}
          onChange={(e) => setCpfChecked(e.target.checked)}
        />
        <p className="font-semibold text-xs md:text-sm">CPF na nota?</p>
      </div> */}

      {cpfChecked && (
        <ReactInputMask
          className="px-2 py-1 rounded-md border border-zinc-500"
          mask="999.999.999-99"
          placeholder="000.000.000-00"
          value={dados.cpf}
          onChange={(e) => setDados({...dados, cpf: e.target.value})}
        />
      )}
      <button className="w-full bg-green-600 rounded-lg py-1 font-semibold mt-2"
        onClick={() => props.proximo()}>
          Proxima etapa
      </button>
    </div>
  );
}
