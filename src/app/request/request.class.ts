import { User } from '../user/user.class';

export class Request
{
    id: number = 0;
    user: User;
    description: string = "";
    justification: string = "";
    dateNeeded: string = "";
    deliveryMode: string = "";
    status: string = "New";
    total: number = 0;
    submittedDate: string = "";
    reasonForRejection: string;

    constructor()
    {

    }
}