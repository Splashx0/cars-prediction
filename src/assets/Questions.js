export const questions = [
    {
        type: "dropdown",
        title: "État général de la voiture",
        options: ["Excellent (Comme neuf)", "Bon (quelques usures mineures)", "Moyen (usures modérée", "Mediocre (nécessite des réparations)"]
    },
    {
        type: "option",
        title: "Carburant",
        options: ["Essence", "Diesel"]
    },
    {
        type: "dropdown",
        title: "Nombre de propriétaires",
        options: ["Premiére main", "Deuxiéme main", "Troisiéeme main", "Autre"]
    },
    {
        type: "option",
        title: 'Historique d\'entretien',
        options: ['Entretien régulier maison', 'Entretien régulier', 'Entretien irrégulier', 'Aucun entretien']
    },
    {
        type: "option",
        title: "Boite Vitesse",
        options: ["Manuelle", "Automatique"]

    },
    {
        type: "date",
        title: 'Date de mise en circulation',
    },
    {
        type: "input",
        title: 'Nombre de Km parcouru',
    },
    {
        type: "date",
        title: "Année de fabrication",
    },
    {
        type: "option",
        title: 'Extérieur du véhicule',
        options: ['Excellent', 'Bon']
    },
    {
        type: "option",
        title: "Test",
        options: ["1", "2"]
    },
];