const weekdays = ['domingo', 'segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado']
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const dateFormat = value => {
    
    let dateString;

    const current = new Date()
    current.setDate(current.getDate())
    
    const date = new Date(value)
    date.setDate(date.getDate())
    
    if (date.getDate() == current.getDate()) {
        dateString = 'hoje'
    } else if (date.getDate() == current.getDate()+1) {
        dateString = 'amanhã'
    }

    const body = date.getDate() + ' de ' + months[date.getMonth()]
    
    if (dateString) {
        return [dateString, body].join(', ')
    }

    return [weekdays[date.getDay()], body].join(', ')

}

export { 
    dateFormat,
    weekdays,
    months
}