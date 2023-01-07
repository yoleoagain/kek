export { };
declare global {
    interface CSSStyleSheet {
        replaceSync(contents: string): void;
    }

    interface ShadowRoot {
        adoptedStyleSheets: CSSStyleSheet[];
    }
}
