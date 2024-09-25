import axios from 'axios'
import { CryptoCurrenciesResponseSchema } from '../schema/cripto-schema';
import { Pair } from '../types';

export async function getCryptos(){
    
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data : {Data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    if(result.success){
        return result.data
    }
};

export async function fetchCurrentCryptoPrice(pair: Pair){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency},EUR`
    const {data : {DISPLAY }} = await axios(url)
    console.log(DISPLAY[pair.criptocurrency][pair.currency])
}

