import { IShapes } from './interfaces/Shape';
import { atom } from 'recoil';

export const ListaDeCompras = atom<IShapes[]>({
  key: 'ListaDeCompras',
  default: [],
});
