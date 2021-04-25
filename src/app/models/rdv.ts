import { Admin } from "./admin";
import { Patient } from "./patient";
import { Personnel } from "./personnel";

export class RDV{
    codeRDV: number;
    dateRDV: Date;
    numBox: number;
    patientRDV: Patient;
    personnelRDV: Personnel;
    adminRDV: Admin;
    
    constructor(codeRDV: number, dateRDV: Date, numBOX: number, patientRDV: Patient, personnelRDV: Personnel, adminRDV: Admin){
        this.codeRDV=codeRDV;
        this.dateRDV=dateRDV;
        this.numBox=numBOX;
        this.patientRDV=patientRDV;
        this.personnelRDV=personnelRDV;
        this.adminRDV=adminRDV;
    }
}