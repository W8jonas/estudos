
import realData1 from '../assets/data-gl/separatedData/parte_1.json'
import realData2 from '../assets/data-gl/separatedData/parte_2.json'
import realData3 from '../assets/data-gl/separatedData/parte_3.json'


export default function getAllData() {
    
    function getPartialData(partialData) {
        
        let valueMaxFoundedInPartialData = 0

        const partialDataProcessed = partialData.map((dataItem) => {
            const totalConfirmed = Number(dataItem["totalConfirmed"])
            if(totalConfirmed > valueMaxFoundedInPartialData) {
                valueMaxFoundedInPartialData = totalConfirmed
            }
    
            return [
                dataItem["long"],
                dataItem["lat"],
                Math.sqrt(totalConfirmed)
            ]
        })
        
        return [partialDataProcessed, valueMaxFoundedInPartialData]
    }

    const partialDataArray = [realData1, realData2, realData3]
    
    let valueMaxFounded = 0
    let allData = []

    partialDataArray.forEach((partialData)=>{
        const [data, valueMaxFoundedInPartialData] = getPartialData(partialData)

        allData = [...allData, ...data]
        if(valueMaxFoundedInPartialData > valueMaxFounded) {
            valueMaxFounded = valueMaxFoundedInPartialData
        }
    })


    return [allData, valueMaxFounded]
}


