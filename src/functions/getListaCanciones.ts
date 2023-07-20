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
      nombre: ['Mi Dios'],
      ritmo: [ZANKALADA],
    },
    {
      nombre: ['Grande y glorioso', 'Salay 3'],
      ritmo: [SALAY],
    },
    {
      nombre: ['Anhelo mas de tu amor', 'Salay 4'],
      ritmo: [SALAY],
    },
    {
      nombre: ['Amor verdadero', 'Salay 5'],
      ritmo: [SALAY],
    },
    {
      nombre: ['Si te tengo a ti'],
      ritmo: [SURI],
    },
    {
      nombre: ['Poderoso'],
      ritmo: [CAPORAL],
    },
    {
      nombre: ['Eterno es tu amor'],
      ritmo: [HUAYÑO, HUALAYNO],
    },
    {
      nombre: ['Aleluya'],
      ritmo: [HUAYÑO],
    },
    {
      nombre: ['Estoy pisando', 'Hebrea 1'],
      ritmo: [HEBREA],
    },
    {
      nombre: ['Nadie como tú', 'Nadie como tu', 'Hebrea 2'],
      ritmo: [HEBREA],
    },
    {
      nombre: ['Tu padre'],
      ritmo: [SAYA_AFRO, SAYA],
    },
    {
      nombre: ['Tu amor', 'Cumbia 1', 'Cumbia Isra 1'],
      ritmo: [CUMBIA]
    },
    {
      nombre: ['Me llevas', 'Me lleva', 'Cumbia 2', 'Cumbia Isra 2'],
      ritmo: [CUMBIA]
    },
    {
      nombre: ['Tengo al padre', 'Cumbia 3', 'Cumbia Isra 3'],
      ritmo: [CUMBIA]
    },
    {
      nombre: ['Eres la esencia', 'Cumbia 4', 'Cumbia Isra 4'],
      ritmo: [CUMBIA],
    },
    {
      nombre: ['En ti mi Dios'],
      ritmo: [HUAYÑO]
    },
    {
      nombre: ['Eres mi escudo', 'Zapateo 1'],
      ritmo: [ZAPATEO]
    },
    {
      nombre: ['Con lazos', 'Zapateo 2'],
      ritmo: [ZAPATEO]
    },
    {
      nombre: ['Eres el amado'],
      ritmo: [MORENADA]
    }
  ];
}
