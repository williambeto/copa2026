/**
 * Retorna a classe CSS de cor para uma nota estatística baseada no seu valor (de 0 a 10).
 * @param value Nota de 0 a 10
 */
export function scoreTextClass(value: number): string {
  if (value >= 9.0) return 'text-semantic-success'
  if (value >= 8.0) return 'text-blue-600'
  if (value >= 7.0) return 'text-semantic-accent'
  return 'text-semantic-danger'
}
