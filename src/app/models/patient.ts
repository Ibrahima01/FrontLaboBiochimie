export class Patient{
    id: number;
    nom_Patient: string;
    prenom_Patient: string;
    email: string;
    password: string;
    tel: string;
    commentaire: string;
    constructor (id:number, nom_Patient: string, prenom_Patient: string, email:string, password:string, tel:string, commentaire:string){
        this.id=id;
        this.nom_Patient=nom_Patient;
        this.prenom_Patient=prenom_Patient;
        this.email=email;
        this.password=password;
        this.tel=tel;
        this.commentaire=commentaire;
    }
}