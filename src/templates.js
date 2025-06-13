import { row, col, css } from './utils'

export function title(block) {
  const tag = block.options.tag || 'h1'
  return row(col(`<${tag}>${block.value}</${tag}>`), css(block.options.styles))
}

export function text(block) {
  return row(col(`<p>${block.value}</p>`), css(block.options.styles))
}

export function columns(block) {
  const html = block.value.map(col).join('')
  return row(html, css(block.options.styles))
}

export function image(block) {
  const { imageStyles, alt, styles } = block.options
  return row(
    `<img src="${block.value}" alt="${alt}" style="${css(imageStyles)}" />`,
    css(styles)
  )
}

export const templates = {
  title,
  text,
  image,
  columns
}
