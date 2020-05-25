/*

 AddQueryString.ts

*/

export default class AddQueryString {
  // Types.
  private readonly questionFirstButton: NodeListOf<HTMLElement>
  private readonly backToTopButton: NodeListOf<HTMLElement>

  public constructor() {
    this.questionFirstButton = document.querySelectorAll('.fn-question-first-button')
    this.backToTopButton = document.querySelectorAll('.fn-back-to-top')
  }

  private addQueryString(arg: string): void {
    Array.from(this.backToTopButton, (selector): void => {
      const pickHref = selector.getAttribute('href')
      const replaceHref = pickHref!.replace(/\?gender=(female|male)/g, '').replace('index.html', `index.html?gender=${arg}`)
      selector.setAttribute('href', replaceHref)
    })
  }

  public core(): void {
    Array.from(this.questionFirstButton, (selector): void => {
      selector.addEventListener('click', (event): void => {
        if (event.currentTarget instanceof HTMLElement) {
          const pickGender = event.currentTarget.getAttribute('data-gender')
          this.addQueryString(pickGender!)
        }
      })
    })
  }
}
