import Meal from '@/Modules/Meal'

const mockDOM = `
  <div class="add-height-wrapper"><span class="add-pseudo-element"><input type="number" value="150" class="add-height fn-add-height"></span></div>
  <div class="activity-wrapper"><p class="letter-activity">普段の活動量<div class="activity-button-wrapper"><a class="activity-button is-desk-work is-active fn-activity-button" data-number="25">デスクワーク<br>中心</a> <a class="activity-button is-standing-work fn-activity-button" data-number="30">立ち仕事<br>が多い</a> <a class="activity-button is-manual-labour fn-activity-button" data-number="35">力仕事<br>が多い</a></div></div>
  <div class="result-wrapper"><p class="letter-result">あなたの適正摂取エネルギー<div class="add-result"><span class="result fn-result">1,238</span> <span class="unit">kcal</span></div></div>
`

const mockCalculation = [
  { height: 150, number: 25, result: 1238 },
  { height: 150, number: 30, result: 1485 },
  { height: 150, number: 35, result: 1733 }
]

describe('Meal', () => {
  it('Check Calculation', () => {
    const meal = new Meal()

    mockCalculation.map((info): void => {
      // eslint-disable-next-line dot-notation
      expect(meal['calculation'](info.height, info.number)).toBe(info.result)
    })
  })

  it('Check Max Length', () => {
    document.body.innerHTML = mockDOM
    const meal = new Meal()
    meal.maxLength()
    ;(document.querySelector('.fn-add-height') as HTMLInputElement).value = '999999999'
    ;(document.querySelector('.fn-add-height') as HTMLInputElement).dispatchEvent(new Event('input'))

    expect((document.querySelector('.fn-add-height') as HTMLInputElement).value).toHaveLength(3)
  })

  it('Check Initialize', () => {
    document.body.innerHTML = mockDOM
    const meal = new Meal()
    meal.init()

    expect(document.querySelector('.fn-result')!.textContent).toBe('1,238')
  })

  it('Check Add Height', () => {
    document.body.innerHTML = mockDOM
    const meal = new Meal()
    meal.addHeightResult()
    ;(document.querySelector('.fn-add-height') as HTMLInputElement).value = '180'
    ;(document.querySelector('.fn-add-height') as HTMLInputElement).dispatchEvent(new Event('input'))

    expect(document.querySelector('.fn-result')!.textContent).toBe('1,782')
  })
  it('Check Activity Button Result', () => {
    document.body.innerHTML = mockDOM
    const meal = new Meal()
    meal.activityButtonResult()
    ;(document.querySelector('.fn-add-height') as HTMLInputElement).value = '170'
    const result = ['1,590', '1,908', '2,226']

    Array.from(document.querySelectorAll('.fn-activity-button'), (selector, index): void => {
      selector.dispatchEvent(new Event('click'))
      expect(document.querySelector('.fn-result')!.textContent).toBe(result[index])
    })
  })
})
