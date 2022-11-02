import { interval, of, delay, map } from 'rxjs'

export const plotTextToNode = (text: string, selector: string) => {
  console.log(text, selector);

  const node = document.querySelector(selector) as HTMLDivElement
  if (!node) return
  const chars = text.split('')
  of(chars)
    .pipe(
      delay(30),
      map((v, i) => {
        console.log(v[i], v)
        node.innerText += v[i]
      })
    )
}