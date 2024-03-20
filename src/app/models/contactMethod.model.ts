import { Person } from "src/app/models/person.model";
import { ContactType } from "./contactType.model";

export interface ContactMethod {
    type: ContactType[];
    value?: string;
    description?: string;
    person?: Person;
}