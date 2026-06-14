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

const flagMap: Record<string, string> = {
  'Espanha': '🇪🇸',
  'França': '🇫🇷',
  'Inglaterra': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'Argentina': '🇦🇷',
  'Portugal': '🇵🇹',
  'Brasil': '🇧🇷',
  'Alemanha': '🇩🇪',
  'Holanda': '🇳🇱',
  'Noruega': '🇳🇴',
  'Bélgica': '🇧🇪',
  'Colômbia': '🇨🇴',
  'Uruguai': '🇺🇾',
  'Marrocos': '🇲🇦',
  'Equador': '🇪🇨',
  'Japão': '🇯🇵',
  'Senegal': '🇸🇳',
  'Croácia': '🇭🇷',
  'Turquia': '🇹🇷',
  'Estados Unidos': '🇺🇸',
  'Canadá': '🇨🇦',
  'México': '🇲🇽',
  'Arábia Saudita': '🇸🇦',
  'Cabo Verde': '🇨🇻',
  'Iraque': '🇮🇶',
  'Argélia': '🇩🇿',
  'Áustria': '🇦🇹',
  'Jordânia': '🇯🇴',
  'Gana': '🇬🇭',
  'Panamá': '🇵🇦',
  'República Democrática do Congo': '🇨🇩',
  'Uzbequistão': '🇺🇿',
  'Nova Zelândia': '🇳🇿'
}

/**
 * Retorna o emoji da bandeira do país correspondente.
 * @param name Nome do país ou descrição da seleção
 */
export function getCountryFlag(name: string): string {
  for (const [key, flag] of Object.entries(flagMap)) {
    if (name.includes(key)) {
      return flag
    }
  }
  return '🌍'
}

