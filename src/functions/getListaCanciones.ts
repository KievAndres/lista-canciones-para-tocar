import { Ritmo } from 'src/enum/ritmo.enum';
import { Cancion } from 'src/interfaces/cancion.interface';

export function getListaCanciones(): Cancion[] {
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
  } = Ritmo;
  return [
    {
      id: 1,
      nombre: ['Mi Dios'],
      ritmo: [ZANKALADA],
    },
    {
      id: 2,
      nombre: ['Grande y glorioso', 'Salay 3'],
      ritmo: [SALAY],
    },
    {
      id: 3,
      nombre: ['Anhelo mas de tu amor', 'Salay 4'],
      ritmo: [SALAY],
    },
    {
      id: 4,
      nombre: ['Amor verdadero', 'Salay 5'],
      ritmo: [SALAY],
    },
    {
      id: 5,
      nombre: ['Si te tengo a ti'],
      ritmo: [SURI],
    },
    {
      id: 6,
      nombre: ['Poderoso'],
      ritmo: [CAPORAL],
    },
    {
      id: 7,
      nombre: ['Eterno es tu amor'],
      ritmo: [HUAYÑO, HUALAYNO],
    },
    {
      id: 8,
      nombre: ['Aleluya'],
      ritmo: [HUAYÑO],
    },
    {
      id: 9,
      nombre: ['Estoy pisando', 'Hebrea 1'],
      ritmo: [HEBREA],
    },
    {
      id: 10,
      nombre: ['Nadie como tú', 'Nadie como tu', 'Hebrea 2'],
      ritmo: [HEBREA],
    },
    {
      id: 11,
      nombre: ['Tu padre'],
      ritmo: [SAYA_AFRO, SAYA],
    },
    {
      id: 12,
      nombre: ['Tu amor', 'Cumbia 1', 'Cumbia Isra 1'],
      ritmo: [CUMBIA]
    },
    {
      id: 13,
      nombre: ['Me llevas', 'Me lleva', 'Cumbia 2', 'Cumbia Isra 2'],
      ritmo: [CUMBIA]
    },
    {
      id: 14,
      nombre: ['Tengo al padre', 'Cumbia 3', 'Cumbia Isra 3'],
      ritmo: [CUMBIA]
    },
    {
      id: 15,
      nombre: ['Eres la esencia', 'Cumbia 4', 'Cumbia Isra 4'],
      ritmo: [CUMBIA],
    },
    {
      id: 16,
      nombre: ['En ti mi Dios'],
      ritmo: [HUAYÑO]
    },
    {
      id: 17,
      nombre: ['Eres mi escudo', 'Zapateo 1'],
      ritmo: [ZAPATEO]
    },
    {
      id: 18,
      nombre: ['Con lazos', 'Zapateo 2'],
      ritmo: [ZAPATEO]
    },
    {
      id: 19,
      nombre: ['Eres el amado'],
      ritmo: [MORENADA]
    }
  ];
}
