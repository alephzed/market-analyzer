import { Action } from "@ngrx/store";
import { QuoteItem } from "../models/quoteItem.model";

export enum QuoteActionType {
    SET_QUOTE = '[QUOTE] Set Quote'
}

export class SetQuoteAction implements Action {
    readonly type!: QuoteActionType.SET_QUOTE;
    
    constructor(public payload: QuoteItem) {}
}
export type QuoteAction = SetQuoteAction;