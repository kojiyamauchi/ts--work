/*

 CopyURL.ts

*/

export default class CopyURL {
  // Types.
  private readonly copyButton: HTMLElement | null
  private readonly url: string
  private readonly parameter: string
  private readonly hash: string
  private cleanURL: string | null

  public constructor() {
    this.copyButton = document.querySelector('.fn-copy-url')
    this.url = location.href
    this.parameter = location.search
    this.hash = location.hash
    this.cleanURL = null
  }

  public core(): string | null {
    this.copyButton!.addEventListener('click', (event): void => {
      this.cleanURL = this.parameter || this.hash ? this.url.replace(new RegExp(`\\${this.parameter}${this.hash}`), '') : this.url
      if (event.currentTarget instanceof HTMLElement) {
        const createDOM = document.createElement('div')
        createDOM.setAttribute('style', 'position:absolute; left:-9999px; top:0px opacity: 0;')
        createDOM.innerHTML = `<textarea class="fn-copy-area" readonly="readonly">${this.cleanURL}</textarea>`
        document.body.appendChild(createDOM)
        ;(document.querySelector('.fn-copy-area') as HTMLInputElement).select()
        document.execCommand('copy')
        document.body.removeChild(createDOM)
      }
    })
    return this.cleanURL
  }
}
