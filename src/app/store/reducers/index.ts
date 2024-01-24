import { QuoteState, QuoteReducer } from "./quote.reducer";
import {ActionReducerMap} from '@ngrx/store'

export const rootReducer = {};

export interface AppState {
    quote: QuoteState;
};

export const reducers: ActionReducerMap<AppState, any> = {
    quote: QuoteReducer
};