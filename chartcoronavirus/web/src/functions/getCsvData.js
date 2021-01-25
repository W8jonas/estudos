
import Papa from 'papaparse';

/*
 * 
 * A tabela CSV é extraída deste repositório, todos os direitos reservados aos produtores.
 * 
 * https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data
 * 
 */


export default async function useAsyncHook() {

    async function fetchCsv() {
        const response = await fetch('time_series_covid19_confirmed_global.csv');
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value);
        return csv;
    }

    async function getDataFromCsv() {
        const dataFromCsv = Papa.parse(await fetchCsv())
        const dataFrame = dataFromCsv.data
        return dataFrame
    }

    const data = await getDataFromCsv()

    return data
}
