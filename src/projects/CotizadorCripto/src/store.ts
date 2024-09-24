import {create} from 'zustand';
import axios from 'axios'
import { CryptoCurrenciesResponseSchema } from '../schema/cripto-schema';

async function getCryptos(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data : {Data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    console.log(result)
    if(result.success){
        return result.data
    }
}

export const useCriptoStore = create((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        // console.log('desde fetch cripto')
    const cryptocurrencies = await getCryptos()
    set(() => ({
        cryptocurrencies
    })
    }
}))