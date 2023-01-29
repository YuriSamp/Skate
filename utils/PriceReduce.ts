import { IShapes } from '../interfaces/Shape';

export function ProductPrice(arr: IShapes[]) {
  const SelectedItems = arr?.filter((item) => item.Selecionado === true);
  const arrPrice = SelectedItems?.map((item) => item.Price * item.Quantity);
  const finalPrice = arrPrice?.reduce((a, b) => a + b, 0);

  const ProductValues = { SelectedItems, finalPrice };

  return ProductValues;
}
