import { Coin, CreditCard } from "phosphor-react";
import { useEffect, useState } from "react";

export interface IMeioPagamento{
    meioPagamento: string,
    troco: number | null
}

interface IProps{
    callBackDate: (date: IMeioPagamento) => void;
    next: () => void;
    error: string;
    meioPagamento: IMeioPagamento;
}

export default function FormaPagamento(props: IProps) {

    const [meioPagamento, setMeioPagamento] = useState<IMeioPagamento>(props.meioPagamento)


    useEffect(() => {
        props.callBackDate(meioPagamento)
    },[meioPagamento])

  return (
    <div className="w-full h-full  mt-1 flex flex-col gap-4 overflow-auto">
       <ul className="flex flex-col gap-2 w-full">
            {/* <li className={`border w-full bg-white shadow-md rounded-lg ${props.error == 'escolha uma forma de pagamento' && meioPagamento.meioPagamento.length == 0 ? 'border-red-400' :null} ${meioPagamento.meioPagamento == 'dinheiro' ? 'border-green-400' : null}`}>
                <button className="flex gap-2 items-center w-full p-2" onClick={() => setMeioPagamento({...meioPagamento, meioPagamento: 'dinheiro'})}>
                    <Money/>
                    Dinheiro
                </button>
                {
                    meioPagamento.meioPagamento == 'dinheiro' ? (
                        <div className="flex flex-col px-2">
                            Tem troco ?
                            <div>
                                <input type="radio" name="" id="" checked={troco == false} onChange={() => {setTroco(false),setMeioPagamento({...meioPagamento, troco: null}) }}/>
                                <label htmlFor="">Não</label>
                            </div>
                            <div className="">
                                <input type="radio" name="" id="" checked={troco == true} onChange={() => setTroco(true)}  />
                                <label htmlFor="">Sim</label>
                            </div>
                            {
                                troco ? (
                                    <div className="flex flex-col pb-2">
                                        <span>Troco para quanto ?</span>
                                        <div className="flex gap-1 items-center">
                                            <div className="px-4 py-2 border rounded-md mt-1 gap-1 flex">
                                                <label>R$</label>
                                                <input  className="bg-transparent border-none outline-none"
                                                    type="number" 
                                                    value={`${props.meioPagamento.troco}`}
                                                    onChange={(e) => setMeioPagamento({...meioPagamento, troco: Number(e.target.value)})}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) :null
                            }
                        </div>

                    ) : null
                }
            </li> */}
            <li className={`border w-full bg-white shadow-md rounded-lg ${props.error == 'escolha uma forma de pagamento' && meioPagamento.meioPagamento.length == 0 ? 'border-red-400' :null} ${meioPagamento.meioPagamento == 'pix' ? 'border-green-400' : null}`}>
                <button className="flex gap-2 items-center w-full p-2" onClick={() => setMeioPagamento({...meioPagamento, meioPagamento: 'pix'})}>
                    <Coin/>
                    PIX
                </button>
            </li>
            <li className={`border w-full bg-white shadow-md rounded-lg ${props.error == 'escolha uma forma de pagamento' && meioPagamento.meioPagamento.length == 0 ? 'border-red-400' :null} ${meioPagamento.meioPagamento == 'debito' ? 'border-green-400' : null}`}>
                <button className="flex gap-2 items-center w-full p-2" onClick={() => setMeioPagamento({...meioPagamento, meioPagamento: 'debito'})}>
                    <CreditCard/>
                    Debito
                </button>
            </li>
            <li className={`border w-full bg-white shadow-md rounded-lg ${props.error == 'escolha uma forma de pagamento' && meioPagamento.meioPagamento.length == 0 ? 'border-red-400' :null} ${meioPagamento.meioPagamento == 'credito' ? 'border-green-400' : null}`}>
                <button className="flex gap-2 items-center w-full p-2" onClick={() => setMeioPagamento({...meioPagamento, meioPagamento: 'credito'})}>
                    <CreditCard/>
                    Credito
                </button>
            </li>
        </ul>
        <button onClick={props.next} className="py-2 bg-green-500 rounded-md w-full ">
            Próximo
        </button>
    </div>
  );
}
