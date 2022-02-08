export function showData(data) {
    let ano = data.split('-')[0];
    let mes = data.split('-')[1];
    let dia = data.split('-')[2];

    if (mes === '1') {
        mes = 'JAN'
    }
    else if (mes === '2') {
        mes = 'FEV'
    }
    else if (mes === '3') {
        mes = 'MAR'
    }
    else if (mes === '4') {
        mes = 'ABR'
    }
    else if (mes === '5') {
        mes = 'MAI'
    }
    else if (mes === '6') {
        mes = 'JUN'
    }
    else if (mes === '7') {
        mes = 'JUL'
    }
    else if (mes === '8') {
        mes = 'AGO'
    }
    else if (mes === '9') {
        mes = 'SET'
    }
    else if (mes === '10') {
        mes = 'OUT'
    }
    else if (mes === '11') {
        mes = 'NOV'
    }
    else if (mes === '12') {
        mes = 'DEZ'
    }
    return `${dia} ${mes} ${ano}`
}