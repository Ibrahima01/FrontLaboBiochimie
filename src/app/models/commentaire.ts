import { Patient } from "./patient";

export class Commentaire{
    constructor( 
        public id: number,
        public commentaire: string,
        public patient_commentaire: Patient,
        public reponse: Array<string>)
    {
   
    }
}