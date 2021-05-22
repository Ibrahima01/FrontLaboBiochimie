import { Admin } from "./admin";
import { Patient } from "./patient";
import { Personnel } from "./personnel";

export class RDV{
    id_RDV?: number;
    date_heure_RDV?: Date;
    numero_box?: number;
    RDVPatient?: Patient;
    RDVPersonnel?: Personnel;
    RDVAdmin?: Admin;

    constructor(id_RDV?: number, date_heure_RDV?: Date, numero_box?: number, RDVPatient?: Patient, RDVPersonnel?: Personnel, RDVAdmin?: Admin){
        this.id_RDV=id_RDV;
        this.date_heure_RDV=date_heure_RDV;
        this.numero_box=numero_box;
        this.RDVPatient=RDVPatient;
        this.RDVPersonnel=RDVPersonnel;
        this.RDVAdmin=RDVAdmin;
    }
}