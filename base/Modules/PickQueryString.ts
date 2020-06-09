/*

 PickQueryString.ts

*/

export default class PickQueryString {
  // Types.
  private _pickParameterGender: string | null
  private readonly parameter: string
  private readonly searchWord: string
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
    this._pickParameterGender = null
    this.parameter = location.search
    this.searchWord = '?gender='
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

  get pickParameterGender(): string | null {
    return this._pickParameterGender
  }

  set pickParameterGender(arg: string | null) {
    this._pickParameterGender = arg
  }

  get today(): string {
    return this._today
  }

  public core(): void {
    if (this.parameter) {
      this.pickParameterGender = this.parameter.replace(this.searchWord, '')
      Array.from(this.selectors.genderButton, (selector): void => {
        const pickDataGender = selector.getAttribute('data-gender')
        selector.classList.remove('is-active')
        if (pickDataGender === this.pickParameterGender) selector.classList.add('is-active')
      })
      this.selectors.dayMenuButtonWrapper!.classList.remove('is-male')
      this.selectors.dayMenuButtonWrapper!.classList.remove('is-female')
      this.selectors.dayMenuButtonWrapper!.classList.add(`is-${this.pickParameterGender}`)
      this.selectors.dayMenuButtonWrapper!.setAttribute('data-gender', this.pickParameterGender!)
      Array.from(this.selectors.menu, (selector): void => {
        selector.classList.remove('is-active')
        if (
          selector.getAttribute('data-gender') === this.pickParameterGender &&
          selector.getAttribute('data-date') === (this.today === 'sunday' ? 'saturday' : this.today)
        ) {
          selector.classList.add('is-active')
        }
      })
    }
  }
}
