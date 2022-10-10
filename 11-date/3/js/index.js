
const addDays = ( date , days = 1 ) => {
    return new Date( date.getTime() + days*24*3600*1000)
}

console.log( addDays( new Date() ))