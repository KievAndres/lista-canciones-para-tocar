import { Rythm } from 'src/enum/rythm.enum';
import { Song } from 'src/interfaces/song.interface';

export function getSongList(): Song[] {
  const {
    ZANKALADA,
    CAPORAL,
    SALAY,
    SURI,
    HUAYÑO,
    HUALAYNO,
    CUMBIA,
    HEBREA,
    SAYA,
    SAYA_AFRO,
    ZAPATEO,
    MORENADA,
    NUEVA,
    PHUNA,
    MOSEÑADA,
    MOXEÑADA,
    CANCION
  } = Rythm;
  return [
    {
      id: 'mi-dios',
      name: ['Mi Dios'],
      rythm: [ZANKALADA],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'grande-y-glorioso',
      name: ['Grande y glorioso', 'Salay 3'],
      rythm: [SALAY],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'anhelo-mas-de-tu-amor',
      name: ['Anhelo mas de tu amor', 'Salay 4'],
      rythm: [SALAY],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'amor-verdader',
      name: ['Amor verdadero', 'Salay 5'],
      rythm: [SALAY],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'si-te-tengo-a-ti',
      name: ['Si te tengo a ti'],
      rythm: [SURI],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'poderoso',
      name: ['Poderoso'],
      rythm: [CAPORAL],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'eterno-es-tu-amor',
      name: ['Eterno es tu amor'],
      rythm: [HUAYÑO, HUALAYNO],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'aleluya',
      name: ['Aleluya'],
      rythm: [HUAYÑO],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'me aferro',
      name: ['Me aferro'],
      rythm: [HUAYÑO],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'siempre-estas',
      name: ['Siempre estás'],
      rythm: [HUAYÑO],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'estoy-pisando',
      name: ['Estoy pisando', 'Hebrea 1'],
      rythm: [HEBREA],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'nadie-como-tu',
      name: ['Nadie como tú', 'Nadie como tu', 'Hebrea 2'],
      rythm: [HEBREA],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'tu-padre',
      name: ['Tu padre'],
      rythm: [SAYA_AFRO, SAYA],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'tu-amor',
      name: ['Tu amor', 'Cumbia 1', 'Cumbia Isra 1'],
      rythm: [CUMBIA],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'me-llevas',
      name: ['Me llevas', 'Me lleva', 'Cumbia 2', 'Cumbia Isra 2'],
      rythm: [CUMBIA],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'tengo-al-padre',
      name: ['Tengo al padre', 'Cumbia 3', 'Cumbia Isra 3'],
      rythm: [CUMBIA],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'eres-la-esencia',
      name: ['Eres la esencia', 'Cumbia 4', 'Cumbia Isra 4'],
      rythm: [CUMBIA],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'en-ti-mi-dios',
      name: ['En ti mi Dios'],
      rythm: [HUAYÑO],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'eres-mi-escudo',
      name: ['Eres mi escudo', 'Zapateo 1'],
      rythm: [ZAPATEO],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'con-lazos',
      name: ['Con lazos', 'Zapateo 2'],
      rythm: [ZAPATEO],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'eres-el-amado',
      name: ['Eres el amado', 'Morenada 2'],
      rythm: [MORENADA],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'me-gozo',
      name: ['Me gozo', 'Morenada 1'],
      rythm: [MORENADA],
      isCurrentlyPlaying: false,
      date: new Date('2023-01-01')
    },
    {
      id: 'en-tu-aliento',
      name: ['En tu aliento'],
      rythm: [NUEVA, PHUNA],
      isCurrentlyPlaying: false,
      date: new Date('2023-10-20')
    },
    {
      id: 'que-bueno-es',
      name: ['Que bueno es'],
      rythm: [MOSEÑADA, MOXEÑADA],
      isCurrentlyPlaying: false,
      date: new Date('2023-10-15')
    },
    {
      id: 'gracias-padre',
      name: ['Gracias Padre', 'Morenada 3'],
      rythm: [MORENADA],
      isCurrentlyPlaying: false,
      date: new Date('2023-10-10')
    },
    {
      id: 'miro-al-cielo',
      name: ['Miro al cielo', 'Hebrea 3'],
      rythm: [CANCION, HEBREA],
      isCurrentlyPlaying: false,
      date: new Date('2023-10-10')
    }
  ];
}
