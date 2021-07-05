import { Wall } from '../types/wall';

export const WALLS: Wall[] = [
    {
        id: 1,
        name: 'Soirées',
        description: 'Le meilleur Wall pour regrouper les meilleures soirées !',
        color: '#EDF4FF',
        posts: [
            {
                id: 1,
                idWall: 1,
                titre: 'Grosse soirée chez Cyril',
                author: 'Seereal',
                dateCreation: '01/05/2022',
                content: 'Grosse soirée normalement à mon anniversaire, je vous jure que ça va être la fête. Si vous ne me croyez pas bah tant pis haha ^^... Vous voulez que je vous dise quoi ? Venez !!! venez!!!! ? Mais non en fait...',
                comments: [
                    {
                        id: 1,
                        idPost: 1,
                        author: 'Nautilus',
                        dateCreation: '01/05/2022',
                        content: 'Bon ok, je prendrai du champomy !',
                    },
                    {
                        id: 2,
                        idPost: 1,
                        author: 'Nathan',
                        dateCreation: '01/05/2022',
                        content: 'Il y a de quoi ranger mon vélo ?',
                    },
                    {
                        id: 3,
                        idPost: 1,
                        author: 'Seereal',
                        dateCreation: '01/05/2022',
                        content: 'Oui mon gars',
                    },
                ],
            },
            {
                id: 2,
                idWall: 1,
                titre: 'Soirée jeux de société',
                author: 'Nautilus',
                dateCreation: '07/12/2021',
                content: 'J\'ai chopé un DOS. Le deuxième UNO. C\'est bizarre, mais qui veut test ?',
                comments: [
                    {
                        id: 1,
                        idPost: 2,
                        author: 'Seeral',
                        dateCreation: '07/12/2021',
                        content: 'Bon ok, je prendrai un UNO tout de même !',
                    },
                    {
                        id: 2,
                        idPost: 2,
                        author: 'Nathan',
                        dateCreation: '07/12/2021',
                        content: 'Bientôt le TRES !!!!!! XDDD',
                    },
                ],
            }
        ],
    },
    {
        id: 2,
        name: 'Travail',
        description: 'Quand on doit parler de travail, on écrit sur ce Wall.',
        color: '#EDFFFA',
        posts: [],
    },
    {
        id: 3,
        name: 'Courses',
        description: 'Des courses de peu importe ce que l\'on souhaite cuisiner.',
        color: '#FFEDFB',
        posts: [
            {
                id: 1,
                idWall: 3,
                titre: 'Soupe aux cailloux',
                author: 'Seereal',
                dateCreation: '01/05/2022',
                content: 'Faut des cailloux et de la soupe. Qui est chaud pour en prendre ?',
                comments: [],
            },
            {
                id: 2,
                idWall: 3,
                titre: 'Repas chez moi',
                author: 'Nautilus',
                dateCreation: '07/12/2021',
                content: 'Je propose un délicieux repas accompangé d\'un pain maison.',
                comments: [
                    {
                        id: 1,
                        idPost: 2,
                        author: 'Seeral',
                        dateCreation: '07/12/2021',
                        content: 'Tu regales @Nautilus',
                    },
                ],
            }
        ],
    },
]