const d3 = require('d3')
const timeConv = d3.timeParse("%m-%d-%Y");

module.exports = {
    lineData: [
        { date: timeConv('05-07-2021'), value: 20, dateString: '05/07', id: 0 },
        { date: timeConv('05-08-2021'), value: 80, dateString: '05/08', id: 1 },
        { date: timeConv('05-09-2021'), value: 20, dateString: '05/09', id: 2 },
        { date: timeConv('05-10-2021'), value: 80, dateString: '05/24', id: 3 },
        { date: timeConv('05-11-2021'), value: 20, dateString: '05/27', id: 4 },
        { date: timeConv('05-12-2021'), value: 80, dateString: '05/28', id: 5 },
        { date: timeConv('05-13-2021'), value: 20, dateString: '05/29', id: 6 },
        { date: timeConv('05-14-2021'), value: 80, dateString: '05/30', id: 7 },
    ]
}