import formatDate from 'date-fns/esm/formatDate'

const result = formatDate('2017-01-25T21:28:15.000Z', 'dd.MM.yyyy HH:mm:ss')
console.log(result === '25.01.2017 21:28:15')
