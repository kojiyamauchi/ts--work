/*
 Stretch.ts
*/

export default class Stretch {
  // Types.
  private readonly stretchButton: NodeListOf<HTMLElement>
  private readonly stretchMenu: NodeListOf<HTMLElement>

  public constructor() {
    this.stretchButton = document.querySelectorAll('.fn-stretch-button')
    this.stretchMenu = document.querySelectorAll('.fn-stretch-menu')
  }

  public core(): void {
    Array.from(this.stretchButton, (selector): void => {
      selector.addEventListener('click', (event): void => {
        Array.from(this.stretchButton, (selector): void => selector.classList.remove('is-active'))
        if (event.currentTarget instanceof HTMLElement) {
          const pickData = event.currentTarget.getAttribute('data-stretch')
          event.currentTarget.classList.add('is-active')
          Array.from(this.stretchMenu, (selector): void => {
            pickData === selector.getAttribute('data-stretch') ? selector.classList.add('is-active') : selector.classList.remove('is-active')
          })
        }
      })
    })
  }
}
