import { PostalAddress } from "src/app/models/postalAddress.model";
import { ContactMethod } from "src/app/models/contactMethod.model";

export interface Person {
    id?: number;
    givenName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    placeOfBirth?: string;
    postalAddresses?: PostalAddress[];
    contactMethods?: ContactMethod[];
}