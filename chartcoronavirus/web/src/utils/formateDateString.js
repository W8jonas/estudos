export const formateDate = function (dateString) {
    if (!dateString) {
        return ''
    }

    let dateStringTransformed = '123'
    dateStringTransformed = dateString

    // THIS WORK, BUT IS OVER ENGINEERING 
    // const splittedDate = dateStringTransformed.split('/')
    // const dayAndMouth = splittedDate.slice(0, 2)
    // const year = splittedDate.pop()

    // return dayAndMouth.reverse().toString().replace(',', '/') + '/' + year

    // VERYYYY MOST SIMPLES
    const splittedDate = dateStringTransformed.split('/')
    const day = splittedDate[1].length === 1 ? ('0' + splittedDate[1]) : splittedDate[1]
    const mouth = splittedDate[0].length === 1 ? ('0' + splittedDate[0]) : splittedDate[0]
    const year = splittedDate[2]

    return day + '/' + mouth + '/' + year
}
