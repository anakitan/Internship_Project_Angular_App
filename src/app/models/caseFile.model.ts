import { Person } from "./person.model";

export class CaseFile {
    id?: number;
    caseNumber?: number;
    title?: string;
    incidentDate?: Date;
    person?: Person;

    constructor(caseNumber: number, title: string, incidentDate: Date) {
        this.caseNumber = caseNumber;
        this.title = title;
        this.incidentDate = incidentDate;
    }
}