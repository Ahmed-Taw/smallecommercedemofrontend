import { OrderDetail } from "./OrderDetail";

export interface Order{
    name,
    address,
    phone,
    userId,
    details:OrderDetail[]
}