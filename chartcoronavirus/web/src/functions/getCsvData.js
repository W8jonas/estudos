
import Papa from 'papaparse';

export default async function useAsyncHook() {

    async function fetchCsv() {
        const response = await fetch('newData.csv');
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
    console.log('Tivemos mudanças result:', data)

    return data
}
