import { HistoricalEarnings } from "./earningsdata"

export interface Earnings {
    earnings: number,
    earnings_type: string,
    calculated_price: number,
    valuation: string
}

export interface StockValuation {
    dividend: number,
    current_earnings: Earnings,
    future_earnings: Earnings,
    blended_earnings: Earnings,
    max_earnings: Earnings
}

export interface MarketData {
    pe_ratio: number,
    div_yield: number,
    treasury_yield: number
}

export interface MarketQuote {
    open: number,
    high: number,
    low: number,
    close: number,
    time: string
}

export interface EquationCoefficients {
    name: string,
    intercept: number,
    dividend: number,
    earnings: number,
    treasury: number,
    price_fairvalue: HistoricalQuote[]
}

export interface HistoricalQuote {
    date: string,
    price: number,
    fairvalue: number,
    dividend: number,
    earnings: number,
    rate_gs10: number,
    actualvalue: number,
    actualdividend: number,
    actualearnings: number,
    actualprice: number,
    valuation: number
}

export interface ValuationData {
    stock_valuation: StockValuation,
    market_data: MarketData,
    equation_coefficients: EquationCoefficients
}

export interface QuoteData {
    market_quote: MarketQuote
}

export interface HistoricalQuoteData {
    price_fairvalue: HistoricalQuote[],
    calculated_price_fairvalue: HistoricalEarnings[]
}

