export class Contact{
    fname: string;
    lname?: string;
    picture?: string;
    email?: string;
    phone?: string;
    dob?:string;
    address?: {street: {number: string, name: string}, city: string, state: string, postcode: string};
    userId?: number;
}