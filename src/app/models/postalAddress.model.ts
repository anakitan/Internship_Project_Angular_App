import { Person } from "src/app/models/person.model";

export interface PostalAddress {
    id?: number;
    streetAddress?: string;
    city?: string;
    zip?: string;
    country?: string;
    person?: Person;
}