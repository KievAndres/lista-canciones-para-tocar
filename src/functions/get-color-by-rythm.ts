import { Rythm } from '../enum/rythm.enum';

export function getColorByRythm(rythm: string): string {
  let color = '#cacaca';
  switch (rythm) {
    case Rythm.ZANKALADA:
      color = '#d5ec06';
      break;
  }
  return color;
}
