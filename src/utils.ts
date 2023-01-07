import { concatMap, delay, from, of } from 'rxjs'

type Options = {
    delay: number
}

export const plotTextToNode = (
    node: HTMLElement,
    text: string,
    options: Options = { delay: 30 }
): Promise<void> => new Promise(resolve => {
    const chars = text.split('')

    from(chars)
        .pipe(
            concatMap(item => of(item).pipe(delay(options.delay)))
        )
        .subscribe(v => {
            node.innerHTML += v
            if (node.innerHTML.length === chars.length) {
                resolve()
            }
        })
})

export function delayPromise(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}