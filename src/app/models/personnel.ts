export class Personnel{
    id: number;
    nom_personnel: string;
    prenom_personnel: string;
    poste_occupee: string;
    gouvernorat: string;
    email: string;
    constructor(codePersonnel: number, nomPersonnel: string, prenomPersonnel: string, posteOccupee: string, gouvernorat: string, email: string){
        this.id=codePersonnel;
        this.nom_personnel=nomPersonnel;
        this.prenom_personnel=prenomPersonnel;
        this.poste_occupee=posteOccupee;
        this.gouvernorat=gouvernorat;
        this.email=email;
    }
}