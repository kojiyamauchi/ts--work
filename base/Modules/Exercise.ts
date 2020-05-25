/*
 Exercise.ts
*/

export default class Exercise {
  // Types.
  private readonly dateObj: Date
  private readonly weekArr: string[]
  private readonly _today: string
  private selectors: {
    readonly genderButton: NodeListOf<HTMLElement>
    readonly dayMenuButtonWrapper: HTMLElement | null
    readonly dayMenuButton: NodeListOf<HTMLElement>
    readonly menu: NodeListOf<HTMLElement>
  }

  public constructor() {
    this.dateObj = new Date()
    this.weekArr = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    this._today = this.weekArr[this.dateObj.getDay()]
    this.selectors = {
      genderButton: document.querySelectorAll('.fn-gender-button'),
      dayMenuButtonWrapper: document.querySelector('.fn-day-menu-button-wrapper'),
      dayMenuButton: document.querySelectorAll('.fn-exercise-day-menu-button'),
      menu: document.querySelectorAll('.fn-menu')
    }
  }

  get today(): string {
    return this._today
  }

  public init(): void {
    Array.from(this.selectors.dayMenuButton, (selector): void => {
      if (selector.getAttribute('data-date') === this.today) selector.classList.add('is-active')
    })
    Array.from(this.selectors.menu, (selector): void => {
      if (
        selector.getAttribute('data-gender') === this.selectors.dayMenuButtonWrapper!.getAttribute('data-gender') &&
        selector.getAttribute('data-date') === (this.today === 'sunday' ? 'saturday' : this.today)
      ) {
        selector.classList.add('is-active')
      }
    })
  }

  public pressGenderButton(): void {
    Array.from(this.selectors.genderButton, (selector): void => {
      selector.addEventListener('click', (event): void => {
        Array.from(this.selectors.genderButton, (selector): void => selector.classList.remove('is-active'))
        if (event.currentTarget instanceof HTMLElement) {
          event.currentTarget.classList.add('is-active')
          this.selectors.dayMenuButtonWrapper!.classList.remove('is-male')
          this.selectors.dayMenuButtonWrapper!.classList.remove('is-female')
          this.selectors.dayMenuButtonWrapper!.classList.add(`is-${event.currentTarget.getAttribute('data-gender')}`)
          this.selectors.dayMenuButtonWrapper!.setAttribute('data-gender', event.currentTarget.getAttribute('data-gender')!)
          Array.from(this.selectors.menu, (selector): void => {
            selector.classList.remove('is-active')
            if (
              selector.getAttribute('data-gender') === this.selectors.dayMenuButtonWrapper!.getAttribute('data-gender') &&
              selector.getAttribute('data-date') === (this.today === 'sunday' ? 'saturday' : this.today)
            ) {
              selector.classList.add('is-active')
            }
          })
        }
      })
    })
  }

  public pressDayMenuButton(): void {
    Array.from(this.selectors.dayMenuButton, (selector): void => {
      selector.addEventListener('click', (event): void => {
        if (event.currentTarget instanceof HTMLElement) {
          const pickDate = event.currentTarget.getAttribute('data-date')
          Array.from(this.selectors.dayMenuButton, (selector): void => selector.classList.remove('is-active'))
          event.currentTarget.classList.add('is-active')
          Array.from(this.selectors.menu, (selector): void => {
            selector.classList.remove('is-active')
            if (
              selector.getAttribute('data-gender') === this.selectors.dayMenuButtonWrapper!.getAttribute('data-gender') &&
              selector.getAttribute('data-date') === pickDate
            ) {
              selector.classList.add('is-active')
            }
          })
        }
      })
    })
  }
}
