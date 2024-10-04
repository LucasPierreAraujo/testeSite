interface Horarios {
    horario_01: number | false;
    horario_final_01: number | false;
    horario_02: number | false;
    horario_final_02: number | false;
}

interface IHorariFuncionamento {
    seg: Horarios;
    ter: Horarios;
    qua: Horarios;
    qui: Horarios;
    sex: Horarios;
    sab: Horarios;
    dom: Horarios;
}

interface result {
    status: boolean
    horaAbertura: number
}

const horariFuncionamento: IHorariFuncionamento = {
    seg: {
        horario_01: 11.00,
        horario_final_01: 14.30,
        horario_02: 17.30,
        horario_final_02: 20.30,
    },
    ter: {
        horario_01: 11.00,
        horario_final_01: 14.30,
        horario_02: 17.30,
        horario_final_02: 20.30,
    },
    qua: {
        horario_01: 11.00,
        horario_final_01: 14.30,
        horario_02: 17.30,
        horario_final_02: 20.30,
    },
    qui: {
        horario_01: 11.00,
        horario_final_01: 14.30,
        horario_02: 17.30,
        horario_final_02: 20.30,
    },
    sex: {
        horario_01: 11.00,
        horario_final_01: 14.30,
        horario_02: 17.30,
        horario_final_02: 20.30,
    },
    sab: {
        horario_01: 11.00,
        horario_final_01: 14.30,
        horario_02: false,
        horario_final_02: false,
    },
    dom: {
        horario_01: false,
        horario_final_01: false,
        horario_02: false,
        horario_final_02: false,
    },
};

const diasSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

function horaAtualDecimal(): number {
    const hoje = new Date();
    return hoje.getHours() + hoje.getMinutes() / 60;
}

function horarioAtualAberto(horarios: Horarios, horaAtual: number): boolean {
    return (
        (
            horarios.horario_01 !== false && 
                horarios.horario_final_01 !== false &&
                    horaAtual >= horarios.horario_01 && 
                        horaAtual <= horarios.horario_final_01
        ) 
            ||
        (
            horarios.horario_02 !== false &&
                horarios.horario_final_02 !== false &&
                    horaAtual >= horarios.horario_02 && 
                        horaAtual <= horarios.horario_final_02
        )
    );
}

function proximoHorarioAbertura(horarios: Horarios, horaAtual: number) {
    const horariosList = [
        { start: horarios.horario_01, end: horarios.horario_final_01 },
        { start: horarios.horario_02, end: horarios.horario_final_02 }
    ];

    for (const { start, end } of horariosList) {
        if (start !== false && end !== false) {
            if (horaAtual <= start) {
                return  start;
            }
        }
    }
}

export default function horario() {
    const hoje = new Date();
    const diaDaSemana = diasSemana[hoje.getDay()] as keyof IHorariFuncionamento;
    const horarios = horariFuncionamento[diaDaSemana];
    const horaAtual = horaAtualDecimal();

    let result: result = {
        status: true,
        horaAbertura: 0
    }

    if (horarioAtualAberto(horarios, horaAtual)) {
        result.status = true
    
        return result;
    } else {
        result.status = false
        result.horaAbertura = Number(proximoHorarioAbertura(horarios, horaAtual))
        return result ;
    }
    
}
