
import Papa from 'papaparse';

const DAY = 300

export default async function getAllData() {
    
    async function getData() {
		const data = await Papa.parse(await fetchCsv());

        let valueMaxFoundedInData = 0

        console.log('data.data: ', data.data[0][DAY])

		const importantData = data.data.map((country)=> {

            // const totalConfirmed = Number(country[DAY])
            const totalConfirmed = Math.sqrt(Number(country[DAY]))

            const long = Number(country[2])
            const lat = Number(country[3])
            
            if(totalConfirmed > valueMaxFoundedInData) {
                valueMaxFoundedInData = totalConfirmed
            }
            return [lat, long, totalConfirmed]
		})

		return [importantData, valueMaxFoundedInData]
	}

	async function fetchCsv() {
		const response = await fetch('newData.csv');
		const reader = response.body.getReader();
		const result = await reader.read();
		const decoder = new TextDecoder('utf-8');
		const csv = await decoder.decode(result.value);
		return csv;
    }

    const [allData, valueMaxFounded] = await getData()
    console.log("getData: ", [allData, valueMaxFounded])
    return [allData, valueMaxFounded]

}
