import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import { CryptoCurrency, Pair } from '../types';
import { getCryptos, fetchCurrentCryptoPrice } from '../services/CryptoServices';


type CryptoStore = {
    cryptocurrencies: CryptoCurrency[];
    fetchCryptos: () => Promise<void>
    fetchData : (pair: Pair) => Promise<void>
}

export const useCriptoStore = create<CryptoStore>()(devtools((set) => ({
    // estas funciones se le llaman actions
    cryptocurrencies: [],
    fetchCryptos: async () => {
        // console.log('desde fetch cripto')
    const cryptocurrencies = await getCryptos()
    set(() => ({
        cryptocurrencies
    }))
},

fetchData : async (pair) => {
    fetchCurrentCryptoPrice(pair)
}
})))