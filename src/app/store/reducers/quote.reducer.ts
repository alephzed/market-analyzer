import { QuoteItem } from "../models/quoteItem.model";
import { QuoteAction, QuoteActionType } from "../actions/quote.action";

export interface QuoteState {
    quote: QuoteItem;
}
const initialState: QuoteState = {
    quote: {
        id: '1',
        name: 'GSPC'
    }
};

export function QuoteReducer(
    state: QuoteState = initialState,
    action: QuoteAction
) : QuoteState {
    switch (action.type) {
        case QuoteActionType.SET_QUOTE:
            return {quote: action.payload};
        default:
            return initialState;
    }
}
