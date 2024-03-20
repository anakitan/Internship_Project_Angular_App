import { Person } from "src/app/models/person.model";
import { UserRole } from "./userRole.model";

export interface User {
    username?: string;
    password?: string;
    roles?: UserRole[];
    person?: Person;
}