import { Personne } from "../models/personne";
import { PERSONNE_KEY} from '../config/constant'
export const getPersonneFromLocalStorage = (): Personne => {
    const personneStr: string  = localStorage.getItem(PERSONNE_KEY) || "";
    const personne: Personne = personneStr ? JSON.parse(personneStr) : null;  
    return personne;
}