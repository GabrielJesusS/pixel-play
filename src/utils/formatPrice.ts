export function formatPrice(price: number): string {
  if (price > 0) {
    return `R$ ${price.toPrecision(2).replace(".", ",")}`;
  }

  return "Grátis";
}
