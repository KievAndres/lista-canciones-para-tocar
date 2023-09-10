import { Rythm } from 'src/enum/rythm.enum';
import { Song } from 'src/interfaces/cancion.interface';

export function getListaCanciones(): Song[] {
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
    MORENADA
  } = Rythm;
  return [
    {
      name: ['Mi Dios'],
      rythm: [ZANKALADA],
    },
    {
      name: ['Grande y glorioso', 'Salay 3'],
      rythm: [SALAY],
    },
    {
      name: ['Anhelo mas de tu amor', 'Salay 4'],
      rythm: [SALAY],
    },
    {
      name: ['Amor verdadero', 'Salay 5'],
      rythm: [SALAY],
    },
    {
      name: ['Si te tengo a ti'],
      rythm: [SURI],
    },
    {
      name: ['Poderoso'],
      rythm: [CAPORAL],
    },
    {
      name: ['Eterno es tu amor'],
      rythm: [HUAYÑO, HUALAYNO],
    },
    {
      name: ['Aleluya'],
      rythm: [HUAYÑO],
    },
    {
      name: ['Me aferro'],
      rythm: [HUAYÑO],
    },
    {
      name: ['Siempre estás'],
      rythm: [HUAYÑO],
    },
    {
      name: ['Estoy pisando', 'Hebrea 1'],
      rythm: [HEBREA],
    },
    {
      name: ['Nadie como tú', 'Nadie como tu', 'Hebrea 2'],
      rythm: [HEBREA],
    },
    {
      name: ['Tu padre'],
      rythm: [SAYA_AFRO, SAYA],
    },
    {
      name: ['Tu amor', 'Cumbia 1', 'Cumbia Isra 1'],
      rythm: [CUMBIA]
    },
    {
      name: ['Me llevas', 'Me lleva', 'Cumbia 2', 'Cumbia Isra 2'],
      rythm: [CUMBIA]
    },
    {
      name: ['Tengo al padre', 'Cumbia 3', 'Cumbia Isra 3'],
      rythm: [CUMBIA]
    },
    {
      name: ['Eres la esencia', 'Cumbia 4', 'Cumbia Isra 4'],
      rythm: [CUMBIA],
    },
    {
      name: ['En ti mi Dios'],
      rythm: [HUAYÑO]
    },
    {
      name: ['Eres mi escudo', 'Zapateo 1'],
      rythm: [ZAPATEO]
    },
    {
      name: ['Con lazos', 'Zapateo 2'],
      rythm: [ZAPATEO]
    },
    {
      name: ['Eres el amado', 'Morenada 2'],
      rythm: [MORENADA]
    },
    {
      name: ['Me gozo', 'Morenada 1'],
      rythm: [MORENADA]
    }
  ];
}
