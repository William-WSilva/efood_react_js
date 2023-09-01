// Formatando valor para moeda brasileira
export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export function primMaiuscula(str: string) {
  // primeira letra Tipo restaurate em Maiuscula
  if (typeof str !== 'string' || str.length === 0) {
    return str
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}
