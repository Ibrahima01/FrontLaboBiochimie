import { User } from "./user";

export class Patient{
    id: number;
    nom_Patient: string;
    prenom_Patient: string;
    age: number;
    sexe: string;
    obese: boolean;
    femme_enceinte: boolean;
    tel: string;
    commentaire: string;
    user:User;
    constructor (id:number, nom_Patient: string, prenom_Patient: string, age: number, sexe: string, obese:boolean, femme_enceinte: boolean,tel:string, commentaire:string, user:User){
        this.id=id;
        this.nom_Patient=nom_Patient;
        this.prenom_Patient=prenom_Patient;
        this.age=age;
        this.sexe=sexe;
        this.obese=obese;
        this.femme_enceinte=femme_enceinte;
        this.tel=tel;
        this.commentaire=commentaire;
        this.user=user;
    }
}