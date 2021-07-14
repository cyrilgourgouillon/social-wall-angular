import { Wall } from '../types/wall';

export const WALLS: Wall[] = [
    {
        Id: '1',
        Name: 'Soirées',
        Description: 'Le meilleur Wall pour regrouper les meilleures soirées !',
        Color: 'red',
        CreatedDate: new Date(2019,12,12),
        Posts: [
            {
                Id: '1',
                WallId: '1',
                Title: 'Grosse soirée chez Cyril',
                Author: 'Seereal',
                CreatedDate: new Date(2019,12,12),
                Content: 'Grosse soirée normalement à mon anniversaire, je vous jure que ça va être la fête. Si vous ne me croyez pas bah tant pis haha ^^... Vous voulez que je vous dise quoi ? Venez !!! venez!!!! ? Mais non en fait...',
                Comments: [
                    {
                        Id: '1',
                        PostId: '1',
                        Author: 'Nautilus',
                        CreatedDate: new Date(2019,12,12),
                        Content: 'Bon ok, je prendrai du champomy !',
                    },
                    {
                        Id: '2',
                        PostId: '1',
                        Author: 'Nathan',
                        CreatedDate: new Date(2019,12,12),
                        Content: 'Il y a de quoi ranger mon vélo ?',
                    },
                    {
                        Id: '3',
                        PostId: '1',
                        Author: 'Seereal',
                        CreatedDate: new Date(2019,12,12),
                        Content: 'Oui mon gars',
                    },
                ],
            },
            {
                Id: '2',
                WallId: '1',
                Title: 'Soirée jeux de société',
                Author: 'Nautilus',
                CreatedDate: new Date(2019,11,12),
                Content: 'J\'ai chopé un DOS. Le deuxième UNO. C\'est bizarre, mais qui veut test ?',
                Comments: [
                    {
                        Id: '1',
                        PostId: '2',
                        Author: 'Seeral',
                        CreatedDate: new Date(2019,11,12),
                        Content: 'Bon ok, je prendrai un UNO tout de même !',
                    },
                    {
                        Id: '2',
                        PostId: '2',
                        Author: 'Nathan',
                        CreatedDate: new Date(2019,11,12),
                        Content: 'Bientôt le TRES !!!!!! XDDD',
                    },
                ],
            }
        ],
    },
    {
        Id: '2',
        Name: 'Travail',
        Description: 'Quand on doit parler de travail, on écrit sur ce Wall.',
        Color: 'green',
        CreatedDate: new Date(2020,9,5),
        Posts: [],
    },
    {
        Id: '3',
        Name: 'Courses',
        Description: 'Des courses de peu importe ce que l\'on souhaite cuisiner.',
        Color: 'yellow',
        CreatedDate: new Date(2021,2,1),
        Posts: [
            {
                Id: '1',
                WallId: '3',
                Title: 'Soupe aux cailloux',
                Author: 'Seereal',
                CreatedDate: new Date(2021,2,1),
                Content: 'Faut des cailloux et de la soupe. Qui est chaud pour en prendre ?',
                Comments: [],
            },
            {
                Id: '2',
                WallId: '3',
                Title: 'Repas chez moi',
                Author: 'Nautilus',
                CreatedDate: new Date(2021,2,1),
                Content: 'Je propose un délicieux repas accompangé d\'un pain maison.',
                Comments: [
                    {
                        Id: '1',
                        PostId: '2',
                        Author: 'Seereal',
                        CreatedDate: new Date(2021,2,1),
                        Content: 'Tu regales @Nautilus',
                    },
                ],
            }
        ],
    },
    {
        Id: '3',
        Name: 'Livres',
        Description: 'Vous aimez parler de livres ? C\'est ici !',
        Color: 'blue',
        CreatedDate: new Date(2020,9,5),
        Posts: [],
    },
]
