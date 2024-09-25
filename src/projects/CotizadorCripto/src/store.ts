import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import { CryptoCurrency, CryptoPrice, Pair } from '../types';
import { getCryptos, fetchCurrentCryptoPrice } from '../services/CryptoServices';


type CryptoStore = {
    cryptocurrencies: CryptoCurrency[];
    result : CryptoPrice
    fetchCryptos: () => Promise<void>
    fetchData : (pair: Pair) => Promise<void>
}

export const useCriptoStore = create<CryptoStore>()(devtools((set) => ({
    // estas funciones se le llaman actions
    cryptocurrencies: [],
    result: {} as CryptoPrice,
    fetchCryptos: async () => {
        // console.log('desde fetch cripto')
    const cryptocurrencies = await getCryptos()
    set(() => ({
        cryptocurrencies
    }))
},

fetchData : async (pair) => {
   const result = await fetchCurrentCryptoPrice(pair)
   set(() => ({
    result
   }))
}
})))