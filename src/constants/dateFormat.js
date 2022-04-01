const weekdays = ['domingo', 'segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado']
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const dateFormat = ( _date, _full ) => {
    
    let dateString;

    const current = new Date()
    current.setDate(current.getDate())
    
    const date = new Date(_date)
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
    
    const final = [weekdays[date.getDay()], body].join(', ')

    if (_full) {
        return `${final} de ${date.getFullYear()}`
    }

    return final

}

export { 
    dateFormat,
    weekdays,
    months
}