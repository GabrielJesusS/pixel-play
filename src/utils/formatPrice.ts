export function formatPrice(price: number): string {
  if (price > 0) {
    return `R$ ${price.toFixed(2).replace(".", ",")}`;
  }

  return "Grátis";
}
