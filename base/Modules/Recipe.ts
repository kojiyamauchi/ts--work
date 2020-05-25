/*
 Recipe.ts
*/

export default class Recipe {
  // Types.
  private readonly dateObj: Date
  private readonly weekArr: string[]
  private readonly _today: string
  private selectors: {
    readonly dayMenuButton: NodeListOf<HTMLElement>
    readonly recipeMenu: NodeListOf<HTMLElement>
  }

  public constructor() {
    this.dateObj = new Date()
    this.weekArr = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    this._today = this.weekArr[this.dateObj.getDay()]
    this.selectors = {
      dayMenuButton: document.querySelectorAll('.fn-recipe-day-menu-button'),
      recipeMenu: document.querySelectorAll('.fn-recipe-menu-inner')
    }
  }

  get today(): string {
    return this._today
  }

  public init(): void {
    Array.from(this.selectors.dayMenuButton, (selector): void => {
      if (selector.getAttribute('data-date') === this.today) selector.classList.add('is-active')
    })
    Array.from(this.selectors.recipeMenu, (selector): void => {
      if (selector.getAttribute('data-date') === this.today) selector.classList.add('is-active')
    })
  }

  public core(): void {
    Array.from(this.selectors.dayMenuButton, (selector): void => {
      selector.addEventListener('click', (event): void => {
        Array.from(this.selectors.dayMenuButton, (selector): void => selector.classList.remove('is-active'))
        if (event.currentTarget instanceof HTMLElement) {
          const pickData = event.currentTarget.getAttribute('data-date')
          event.currentTarget.classList.add('is-active')
          Array.from(this.selectors.recipeMenu, (selector): void => {
            pickData === selector.getAttribute('data-date') ? selector.classList.add('is-active') : selector.classList.remove('is-active')
          })
        }
      })
    })
  }
}
