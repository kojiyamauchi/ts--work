/*
 Diagnosis.ts
*/

export default class Diagnosis {
  // Types.
  private readonly femaleBaseCalorie: number
  private readonly maleBaseCalorie: number
  private _baseCalorie: number | null
  private _gender: string | null
  private _commuting: string | null
  private _work: string | null
  private selectors: {
    readonly questionFirstButton: NodeListOf<HTMLElement>
    readonly questionSecondButton: NodeListOf<HTMLElement>
    readonly questionThirdButton: NodeListOf<HTMLElement>
    readonly resultBox: HTMLElement | null
    readonly normalResultData: HTMLElement | null
    readonly teleworkResultData: HTMLElement | null
  }

  private calorieDictionary: {
    readonly [key: string]: {
      readonly [key: string]: {
        readonly [key: string]: {
          readonly [key: string]: number
        }
      }
    }
  }

  public constructor() {
    this.femaleBaseCalorie = 1470
    this.maleBaseCalorie = 1800
    this._baseCalorie = null
    this._gender = null
    this._commuting = null
    this._work = null
    this.selectors = {
      questionFirstButton: document.querySelectorAll('.fn-question-first-button'),
      questionSecondButton: document.querySelectorAll('.fn-question-second-button'),
      questionThirdButton: document.querySelectorAll('.fn-question-third-button'),
      resultBox: document.querySelector('.fn-result-comment-box'),
      normalResultData: document.querySelector('.fn-normal-result-data'),
      teleworkResultData: document.querySelector('.fn-telework-result-data')
    }
    this.calorieDictionary = {
      male: {
        'train-minutes': {
          desk: {
            calorie: 203,
            cup: 4
          },
          fifty: {
            calorie: 717,
            cup: 14.2
          },
          outside: {
            calorie: 846,
            cup: 16.8
          }
        },
        'train-hour': {
          desk: {
            calorie: 332,
            cup: 6.6
          },
          fifty: {
            calorie: 846,
            cup: 16.8
          },
          outside: {
            calorie: 975,
            cup: 19.3
          }
        },
        car: {
          desk: {
            calorie: 107,
            cup: 2.1
          },
          fifty: {
            calorie: 621,
            cup: 12.3
          },
          outside: {
            calorie: 750,
            cup: 14.9
          }
        },
        bicycle: {
          desk: {
            calorie: 286,
            cup: 5.7
          },
          fifty: {
            calorie: 800,
            cup: 15.9
          },
          outside: {
            calorie: 929,
            cup: 18.4
          }
        }
      },
      female: {
        'train-minutes': {
          desk: {
            calorie: 168,
            cup: 3.3
          },
          fifty: {
            calorie: 591,
            cup: 11.7
          },
          outside: {
            calorie: 697,
            cup: 13.8
          }
        },
        'train-hour': {
          desk: {
            calorie: 273,
            cup: 5.4
          },
          fifty: {
            calorie: 696,
            cup: 13.8
          },
          outside: {
            calorie: 802,
            cup: 15.9
          }
        },
        car: {
          desk: {
            calorie: 88,
            cup: 1.7
          },
          fifty: {
            calorie: 511,
            cup: 10.1
          },
          outside: {
            calorie: 617,
            cup: 12.2
          }
        },
        bicycle: {
          desk: {
            calorie: 239,
            cup: 4.7
          },
          fifty: {
            calorie: 662,
            cup: 13.1
          },
          outside: {
            calorie: 768,
            cup: 15.2
          }
        }
      }
    }
  }

  get baseCalorie(): number | null {
    return this._baseCalorie
  }

  set baseCalorie(arg: number | null) {
    this._baseCalorie = arg
  }

  get gender(): string | null {
    return this._gender
  }

  set gender(arg: string | null) {
    this._gender = arg
  }

  get commuting(): string | null {
    return this._commuting
  }

  set commuting(arg: string | null) {
    this._commuting = arg
  }

  get work(): string | null {
    return this._work
  }

  set work(arg: string | null) {
    this._work = arg
  }

  private result(): void {
    this.selectors.resultBox!.innerHTML = `
      <p class="letter">普段の生活と比べて、週に</p>
      <p class="result-letter"><span class="is-green">ごはん${this.calorieDictionary[this.gender!][this.commuting!][this.work!].cup}杯分</span>程度の</p>
      <p class="letter">余剰カロリーが発⽣します。</p>
      <p class="notes">（週5日のお仕事がテレワークになった場合）</p>
    `
    this.selectors.normalResultData!.textContent = (
      this.baseCalorie! + this.calorieDictionary[this.gender!][this.commuting!][this.work!].calorie
    ).toLocaleString()
    this.selectors.teleworkResultData!.textContent = this.baseCalorie!.toLocaleString()
  }

  public pressFirstButton(): void {
    Array.from(this.selectors.questionFirstButton, (selector): void => {
      selector.addEventListener('click', (event): void => {
        Array.from(this.selectors.questionFirstButton, (selector): void => selector.classList.remove('is-active'))
        Array.from(this.selectors.questionSecondButton, (selector): void => {
          selector.classList.remove('is-active')
          selector.classList.remove('is-disabled')
        })
        Array.from(this.selectors.questionThirdButton, (selector): void => {
          selector.classList.remove('is-active')
          selector.classList.add('is-disabled')
        })
        if (event.currentTarget instanceof HTMLElement) {
          event.currentTarget.classList.add('is-active')
          this.baseCalorie = event.currentTarget.getAttribute('data-gender') === 'female' ? this.femaleBaseCalorie : this.maleBaseCalorie
          this.gender = event.currentTarget.getAttribute('data-gender')
          this.selectors.resultBox!.innerHTML = `<p class="display-before">すべての質問にお答えいただくと、<br>診断結果が表示されます。</p>`
          this.selectors.normalResultData!.textContent = '0'
          this.selectors.teleworkResultData!.textContent = '0'
        }
      })
    })
  }

  public pressSecondButton(): void {
    Array.from(this.selectors.questionSecondButton, (selector): void => {
      selector.addEventListener('click', (event): void => {
        Array.from(this.selectors.questionSecondButton, (selector): void => selector.classList.remove('is-active'))
        Array.from(this.selectors.questionThirdButton, (selector): void => {
          selector.classList.remove('is-active')
          selector.classList.remove('is-disabled')
        })
        if (event.currentTarget instanceof HTMLElement) {
          event.currentTarget.classList.add('is-active')
          this.commuting = event.currentTarget.getAttribute('data-commuting')
          this.selectors.resultBox!.innerHTML = `<p class="display-before">すべての質問にお答えいただくと、<br>診断結果が表示されます。</p>`
          this.selectors.normalResultData!.textContent = '0'
          this.selectors.teleworkResultData!.textContent = '0'
        }
      })
    })
  }

  public pressThirdButton(): void {
    Array.from(this.selectors.questionThirdButton, (selector): void => {
      selector.addEventListener('click', (event): void => {
        Array.from(this.selectors.questionThirdButton, (selector): void => selector.classList.remove('is-active'))
        if (event.currentTarget instanceof HTMLElement) {
          event.currentTarget.classList.add('is-active')
          this.work = event.currentTarget.getAttribute('data-work')
          this.result()
        }
      })
    })
  }
}
