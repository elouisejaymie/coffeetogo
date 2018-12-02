export interface IOrder {
    beverageId?: number;
    beverage?: string;
    count?: number;
    orderedBy?: string;
    notes?: string;    
}

export interface IOrderHistory {
    beverage: string
    count: number;
    orderedBy: string;
    dateCreated: Date;
}

export interface IOrderSummary {
    beverageId?: number;
    beverage?: string;
    quantity: number;
}