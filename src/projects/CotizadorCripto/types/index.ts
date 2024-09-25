import {CurrencySchema, CryptoCurrencyResponseSchema, PairSchemma, CryptoPriceSchema} from '../schema/cripto-schema'
import {z} from 'zod'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchemma>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>
