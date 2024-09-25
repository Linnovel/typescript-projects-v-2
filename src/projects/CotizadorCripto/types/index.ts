import {CurrencySchema, CryptoCurrencyResponseSchema, PairSchemma} from '../schema/cripto-schema'
import {z} from 'zod'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchemma>

