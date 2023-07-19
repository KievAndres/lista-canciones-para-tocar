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
  } = Ritmo;
  return [
    {
      nombre: ['Mi Dios'],
      ritmo: [ZANKALADA],
    },
    {
      nombre: ['Poderoso'],
      ritmo: [CAPORAL],
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
      nombre: ['Eterno es tu amor'],
      ritmo: [HUAYÑO, HUALAYNO],
    },
    {
      nombre: ['Aleluya'],
      ritmo: [HUAYÑO],
    },
    {
      nombre: ['Eres la esencia', 'Cumbia 4'],
      ritmo: [CUMBIA],
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
      nombre: ['Tengo al padre'],
      ritmo: [CUMBIA]
    },
    {
      nombre: ['En ti mi Dios'],
      ritmo: [HUAYÑO]
    }
  ];
}
