import { of, delay, from, concatMap } from 'rxjs'

export const plotTextToNode = (text: string, selector: string) => {
    const node = document.querySelector(selector) as HTMLDivElement
    const docsTechNode = document.querySelector('.core-tech') as HTMLDivElement

    if (!node) return
    const chars = text.split('')

    from(chars)
        .pipe(
            concatMap(item => of(item).pipe(delay(30)))
        )
        .subscribe(v => {
            node.innerHTML += v
            if (node.innerText.length === chars.length) {
                docsTechNode.style.display = 'flex'
                node.classList.add('completed')
            }
        })
}