
import realData1 from '../assets/data-gl/separatedData/parte_1.json'
import realData2 from '../assets/data-gl/separatedData/parte_2.json'


export default function getAllData() {
    
    let valueMaxFounded = 0

    const data1 = realData1
    .map((dataItem) => {
        
        const totalConfirmed = Number(dataItem["totalConfirmed"])
        if(totalConfirmed > valueMaxFounded) {
            valueMaxFounded = totalConfirmed
        }

        return [
            dataItem["long"],
            dataItem["lat"],
            Math.sqrt(totalConfirmed)
        ]
    })

    const data2 = realData2
    .map((dataItem) => {
        
        const totalConfirmed = Number(dataItem["totalConfirmed"])
        if(totalConfirmed > valueMaxFounded) {
            valueMaxFounded = totalConfirmed
        }

        return [
            dataItem["long"],
            dataItem["lat"],
            Math.sqrt(totalConfirmed)
        ]
    })


    const allData = [...data1, ...data2]

    return [allData, valueMaxFounded]
}

