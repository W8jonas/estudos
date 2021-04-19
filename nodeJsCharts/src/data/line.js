const d3 = require('d3')
const timeConv = d3.timeParse("%m-%d-%Y");

module.exports = {
    lineData: [
        { date: timeConv('05-01-2021'), value: 20, dateString: '05/01', id: 0 },
        { date: timeConv('10-23-2021'), value: 80, dateString: '10/23', id: 1 },
        // { date: timeConv('10-30-2021'), value: 20, dateString: '05/09', id: 2 },
        // { date: timeConv('11-05-2021'), value: 80, dateString: '05/24', id: 3 },
        { date: timeConv('11-13-2021'), value: 10, dateString: '11/13', id: 4 },
        { date: timeConv('11-20-2021'), value: 90, dateString: '11/20', id: 5 },
        { date: timeConv('11-27-2021'), value: 50, dateString: '11/27', id: 6 },
        // { date: timeConv('05-14-2021'), value: 80, dateString: '05/30', id: 7 },
    ]
}

// module.exports = {
//     lineData: [
//         { date: timeConv('11-26-2021'), value: 20, dateString: '05/07', id: 0 },
//         { date: timeConv('12-03-2021'), value: 80, dateString: '05/08', id: 1 },
//         // { date: timeConv('10-30-2021'), value: 20, dateString: '05/09', id: 2 },
//         // { date: timeConv('11-05-2021'), value: 80, dateString: '05/24', id: 3 },
//         // { date: timeConv('11-13-2021'), value: 20, dateString: '05/27', id: 4 },
//         // { date: timeConv('11-20-2021'), value: 80, dateString: '05/28', id: 5 },
//         // { date: timeConv('11-27-2021'), value: 20, dateString: '05/29', id: 6 },
//         // { date: timeConv('05-14-2021'), value: 80, dateString: '05/30', id: 7 },
//     ]
// }


// Lab eletrotécnica [
//     { date: 2020-10-16T03:00:00.000Z, value: 93.25 },
//     { date: 2020-10-23T03:00:00.000Z, value: 98.75 },
//     { date: 2020-10-30T03:00:00.000Z, value: 79 },
//     { date: 2020-11-05T03:00:00.000Z, value: 99 },
//     { date: 2020-11-13T03:00:00.000Z, value: 97 },
//     { date: 2020-11-20T03:00:00.000Z, value: 90 },
//     { date: 2020-11-27T03:00:00.000Z, value: 91 }
//   ]

// Arquitetura de software [
//     { date: 2020-11-26T03:00:00.000Z, value: 93 },
//     { date: 2020-12-03T03:00:00.000Z, value: 93.13 }
//   ]