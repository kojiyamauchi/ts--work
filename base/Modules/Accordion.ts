/*
 Accordion.ts
*/

export default class Accordion {
  // Types.
  private readonly accordionOpenButton: NodeListOf<HTMLElement>

  public constructor(accordionOpenButton: NodeListOf<HTMLElement>) {
    this.accordionOpenButton = accordionOpenButton
  }

  public core(): void {
    Array.from(this.accordionOpenButton, (selector): void => {
      selector!.addEventListener('click', (event): void => {
        if (event.currentTarget instanceof HTMLElement) {
          event.currentTarget.classList.toggle('is-active')
          event.currentTarget.nextElementSibling!.classList.toggle('is-active')
        }
      })
    })
  }
}
