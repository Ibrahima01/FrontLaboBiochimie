export interface Menu {
    name: string;
    url: string;
}
export const PATIENT_MENU: Menu [] = [
    {
        name: 'Espace patient',
        url: '/rdv',
    },
    {
        name: `Historique`,
        url: '/historique',
    },
    {
        name: `Présentation`,
        url: '/presentation',
    },
    {
        name: `Contacts`,
        url: '/contacts',
    }
    /*,
    {
        name: 'Statistique',
        url: '/statistique'
    }*/
];

export const ADMIN_MENU: Menu [] = [
    /*
    {
        name: 'Espace patient',
        url: '/rdv',
    },
    */
    {
        name: 'Configurer les paramètres',
        url: '/configuration'
    },
    {
        name: 'Rubriques commentaires',
        url: '/commentaires'
    },
    {
        name: 'Utilsateurs',
        url: '/listePatient'
    },
    {
        name:'Affecter un patient dans un box',
        url:'/numeroBox'
    }
];