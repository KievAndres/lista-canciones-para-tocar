import { Ritmo } from "src/enum/rythm.enum";

export function getColorByRythm(rythm: string): string {
  let color = '#cacaca';
  switch(rythm) {
    case Ritmo.ZANKALADA:
      color = '#d5ec06'
      break;
  }
  return color;
}