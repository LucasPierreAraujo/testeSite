import { useEffect, useState } from "react";
import { memory } from "../../memory/memory";

export interface IEndereco {
  bairro: string;
  rua: string;
  numerp: number | null;
  referencia: string;
  complemento: string;
  frete: number;
  formaRetirada: string; 
}

interface IProps {
  callBackDate: (date: IEndereco) => void;
  next: () => void;
  error: string;
  dateEndereco: IEndereco;
}

export default function Endereco(props: IProps) {
  const { bairros } = memory();

  const [endereco, setEndereco] = useState<IEndereco>({
    bairro: props.dateEndereco.bairro || "",
    rua: props.dateEndereco.rua || "",
    numerp: props.dateEndereco.numerp || null,
    referencia: props.dateEndereco.referencia || "",
    complemento: props.dateEndereco.complemento || "",
    frete: props.dateEndereco.frete || 0,
    formaRetirada: props.dateEndereco.formaRetirada || "Delivery",  
  });

  const [semNumero, setSemNumero] = useState(false);

  useEffect(() => {
    props.callBackDate(endereco);
  }, [endereco]);

  function selectBairro(e: string) {
    const selectedBairro = bairros.find((item) => item.bairro === e);

    if (selectedBairro) {
      setEndereco({
        ...endereco,
        frete: selectedBairro.frete,
        bairro: selectedBairro.bairro,
      });
    }
  }

  function handleNext() {
    props.callBackDate(endereco);
    props.next();
  }

  return (
    <div className="w-full h-full mt-1 flex flex-col gap-4 overflow-auto">
      <form action="" className="flex flex-col">
        <label className="font-semibold">Forma de Retirada</label>
        <select
          className="px-4 py-2 border rounded-md"
          value={endereco.formaRetirada}
          onChange={(e) => {
            const formaRetirada = e.target.value;
            setEndereco({
              ...endereco,
              formaRetirada,
              rua: formaRetirada === "Retirar na loja" ? 'Ta funcionando é o que importa!' : "",
              numerp: formaRetirada === "Retirar na loja" ? null : 0,
              bairro: formaRetirada === "Retirar na loja" ? 'Ta funcionando é o que importa!' : "",
              referencia: formaRetirada === "Retirar na loja" ? 'Ta funcionando é o que importa!' : "",
              frete: formaRetirada === "Retirar na loja" ? 0 : endereco.frete,
              complemento: formaRetirada === "Retirar na loja" ? 'Ta funcionando é o que importa!' : ""
            });
          }}
        >
          <option value="Delivery">Entrega</option>
          <option value="Retirar na loja">Retirada na loja</option>
        </select>

        {endereco.formaRetirada !== "Retirar na loja" && (
          <>
            <label className="font-semibold">Bairro</label>
            <select
              className={`px-4 py-2 border rounded-md ${
                props.error === "bairro" ? "border-red-400" : ""
              }`}
              value={endereco.bairro}
              onChange={(e) => selectBairro(e.target.value)}
            >
              <option value="">Selecione um bairro</option>
              {bairros.map((bairro) => (
                <option key={bairro.bairro} value={bairro.bairro}>
                  {bairro.bairro}{" "}
                  {bairro.frete > 0
                    ? `• R$ ${bairro.frete.toFixed(2).replace(".", ",")}`
                    : null}
                </option>
              ))}
            </select>

            <label className="font-semibold">Rua</label>
            <input
              type="text"
              className={`px-4 py-2 border rounded-md ${
                props.error === "rua" ? "border-red-400" : ""
              }`}
              value={endereco.rua || ""}
              onChange={(e) =>
                setEndereco({ ...endereco, rua: e.target.value })
              }
            />

            {!semNumero && (
              <>
                <label className="font-semibold">Número</label>
                <input
                  type="text"
                  className={`px-4 py-2 border rounded-md ${
                    props.error === "numero" ? "border-red-400" : ""
                  }`}
                  value={endereco.numerp ? endereco.numerp : ""}
                  onChange={(e) =>
                    setEndereco({ ...endereco, numerp: Number(e.target.value) })
                  }
                />
              </>
            )}
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={semNumero}
                onChange={(e) => setSemNumero(e.target.checked)}
              />
              <label className="font-semibold">Sem Número</label>
            </div>
            <label className="font-semibold">Complemento</label>
            <input
              type="text"
              className={`px-4 py-2 border rounded-md ${
                props.error === "complemento" ? "border-red-400" : ""
              }`}
              value={endereco.complemento || ""}
              onChange={(e) =>
                setEndereco({ ...endereco, complemento: e.target.value })
              }
            />
            <label className="font-semibold">Referência</label>
            <input
              type="text"
              className={`px-4 py-2 border rounded-md ${
                props.error === "referencia" ? "border-red-400" : ""
              }`}
              value={endereco.referencia || ""}
              onChange={(e) =>
                setEndereco({ ...endereco, referencia: e.target.value })
              }
            />
          </>
        )}
      </form>
      <button
        onClick={handleNext}
        className="py-1 bg-green-500 rounded-md w-full"
      >
        Próximo
      </button>
    </div>
  );
}
