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
        name: 'Configurer les paramètres',
        url: '/configuration'
    },
    {
        name: 'Rubrique commentaires',
        url: '/commentaires'
    },
    {
        name: `Historique`,
        url: '/historique',
    },
    {
        name: 'Utilsateurs',
        url: '/listePatient'
    },
    {
        name: 'Statistique',
        url: '/statistique'
    }
];

export const ADMIN_MENU: Menu [] = [
    {
        name: 'Statistique',
         url: '/statistique'
    },
    {
        name: 'Utilsateurs',
        url: '/utilisateurs'
    },
    {
        name: 'Configurer les paramètres',
        url: '/configuration'
    },
    {
        name: 'Rubriques commentaires',
        url: '/commentaires'
    }
];