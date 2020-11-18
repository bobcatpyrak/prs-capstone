import { Product } from '../product/product.class';
import { Request } from '../request/request.class';

export class RequestLine
{
    id: number = 0;
    request: Request = new Request();
    product: Product = new Product();
    quantity: number = 1;

    constructor ()
    {

    }
}