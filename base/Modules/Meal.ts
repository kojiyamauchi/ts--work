/*
 Meal.ts
*/

export default class Meal {
  // Types.
  private readonly addHeight: HTMLInputElement | null
  private readonly activityButton: NodeListOf<HTMLElement>
  private readonly result: HTMLElement | null

  public constructor() {
    this.addHeight = document.querySelector('.fn-add-height')
    this.activityButton = document.querySelectorAll('.fn-activity-button')
    this.result = document.querySelector('.fn-result')
  }

  private calculation(val: number, num: number): number {
    return Math.ceil((val / 100) * (val / 100) * 22 * num)
  }

  public maxLength(): void {
    this.addHeight!.addEventListener('input', (event): void => {
      if (event.currentTarget instanceof HTMLInputElement && event.currentTarget!.value.length > 3) {
        event.currentTarget!.value = event.currentTarget!.value.slice(0, 3)
      }
    })
  }

  public init(): void {
    Array.from(this.activityButton, (selector): void => {
      if (selector.classList.contains('is-active')) {
        const pickVal = Number(this.addHeight!.value)
        const pickNum = Number(selector.getAttribute('data-number'))
        this.result!.textContent = this.calculation(pickVal, pickNum).toLocaleString()
      }
    })
  }

  public addHeightResult(): void {
    this.addHeight!.addEventListener('input', (event): void => {
      if (event.currentTarget instanceof HTMLInputElement) {
        const pickVal = Number(event.currentTarget!.value)
        Array.from(this.activityButton, (selector): void => {
          if (selector.classList.contains('is-active')) {
            const pickNum = Number(selector.getAttribute('data-number'))
            this.result!.textContent = this.calculation(pickVal, pickNum).toLocaleString()
          }
        })
      }
    })
  }

  public activityButtonResult(): void {
    Array.from(this.activityButton, (selector): void => {
      selector.addEventListener('click', (event): void => {
        Array.from(this.activityButton, (selector): void => selector.classList.remove('is-active'))
        if (event.currentTarget instanceof HTMLElement) {
          selector.classList.add('is-active')
          const pickVal = Number(this.addHeight!.value)
          const pickNum = Number(selector.getAttribute('data-number'))
          this.result!.textContent = this.calculation(pickVal, pickNum).toLocaleString()
        }
      })
    })
  }
}
