export class Admin{
    codeAdmin: number;
    nomAdmin: string;
    prenomAdmin: string;
    login: string;
    password: string;
    constructor(codeAdmin: number, nomAdmin: string, prenomAdmin: string, login: string, password: string){
        this.codeAdmin=codeAdmin;
        this.nomAdmin=nomAdmin;
        this.prenomAdmin=prenomAdmin;
        this.login=login;
        this.password=password;
    }
}