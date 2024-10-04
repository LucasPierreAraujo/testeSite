interface IFormularioPedido {
    telefone: string;
    nome: string;
    formaRetirada: string;
    rua: string;
    numero: string;
    complemento: string;
    referencia: string;
    bairro: string;
    produto: IProduto[];
    frete: number;
    valorTotal: number;
    pagamento: string;
    subtotal: number;
    troco: number | null;
    cpf: string | null
}

export interface IProduto {
    id: number;
    nome: string;
    molho: string | null;
    observacao: string | null;
    quantidade: number;
    valor_unit: number;
    valor_total: number;
}   

export function formularioPedido(props: IFormularioPedido): string {
    const linkPedido = `
        https://api.whatsapp.com/send?phone=558592051239&text=*Salada%20Conceito*%0ACNPJ:%2055312058/0001-62%0AInstagram:%20@saladaconceito%0AWhatsapp:(85) 99205-1239%20%0A---------------------------------------%0A*Nome:* ${props.nome}%0A*Telefone:* ${props.telefone} %0A*Forma_Retirada:* ${props.formaRetirada} ${props.formaRetirada === 'Delivery' ? `%0A*Rua:* ${props.rua}%0A*Número:* ${props.numero}%0A*Complemento:* ${props.complemento}%0A*Referência:* ${props.referencia}%0A*Bairro:* ${props.bairro}`: ""} ${props.cpf != null ? `%0A*CPF*: ${props.cpf}` : ""}
        %0A---------------------------------------${props.produto.map((pro) => {
            return (
                `%0A*${pro.nome}*%0A${pro.molho?.length || 0 > 0 ? `    Molho: ${pro.molho} %0A` : ''}${pro.observacao?.length || 0 > 0 ? `    Observação: ${pro.observacao} %0A` : ''}    R$ ${pro.valor_total.toFixed(2).replace('.',',')} x ${pro.quantidade < 10 ? '0'+pro.quantidade : pro.quantidade} ------ Total: R$ ${pro.valor_total.toFixed(2).replace('.', ',')}`
            )
        }).join('')}%0A--------------------------------------%0AForma de pagamento: ${props.pagamento}${props.pagamento == 'dinheiro'? `%0ATroco para R$ ${props.troco?.toFixed(2).replace('.',',')}` : ''} 
        %0A--------------------------------------%0ASubtotal                      R$${props.subtotal.toFixed(2).replace('.',',')}%0ATaxa de Entrega          R$${props.frete.toFixed(2).replace('.',',')}%0ATotal                            R$${props.valorTotal.toFixed(2).replace('.',',')}%0A
    `;
    return linkPedido;
}