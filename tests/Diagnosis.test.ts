import Diagnosis from '@/Modules/Diagnosis'

type mockData = {
  gender: string
  baseCalorie: number | null
  commuting: string
  work: string
  resultCalorie: number
  resultCup: number
}[]

const mockDOM = `
  <div class="question-wrapper is-question-first-wrapper"><h5 class="question-heading">Q1</h5><span class="heading-under-line"></span> <p class="question-letter">あなたの性別を教えてください。<div class="question-first-inner"><a class="question-first-button is-female fn-question-first-button" data-gender="female">女性</a> <a class="question-first-button is-male fn-question-first-button" data-gender="male">男性</a></div></div>
  <div class="question-wrapper is-question-second-wrapper"><h5 class="question-heading">Q2</h5><span class="heading-under-line"></span> <p class="question-letter">普段の通勤時間はどのぐらいですか？<div class="question-second-inner"><a class="question-second-button is-train-minutes is-disabled fn-question-second-button" data-commuting="train-minutes">電車で<small class="is-extra-small">30分〜1時間程度</small></a> <a class="question-second-button is-train-hour is-disabled fn-question-second-button" data-commuting="train-hour">電車で<small class="is-small">1〜2時間程度</small></a> <a class="question-second-button is-bicycle is-disabled fn-question-second-button" data-commuting="bicycle">自転車で<small class="is-small">30分程度</small></a> <a class="question-second-button is-car is-disabled fn-question-second-button" data-commuting="car">自動車で<small class="is-small">通勤</small></a></div></div>
  <div class="question-wrapper is-question-third-wrapper"><h5 class="question-heading">Q3</h5><span class="heading-under-line"></span> <p class="question-letter">普段の仕事スタイルとして<br>当てはまるものはどれですか？<div class="question-third-inner"><a class="question-third-button is-outside-work is-disabled fn-question-third-button" data-work="outside">外回り<br>が多い</a> <a class="question-third-button is-desk-work is-disabled fn-question-third-button" data-work="desk">デスク<br>ワークが多い</a> <a class="question-third-button is-fifty-fifty is-disabled fn-question-third-button" data-work="fifty">外回りとデスク<br>ワークが半々</a></div></div>
  <div class="result"><img src="assets/images/icon_result.png?rev=a191a6c95616fd34" alt="Icon Result" class="icon-result"> <h4 class="heading04">診断結果</h4><div class="result-comment-box fn-result-comment-box"><p class="display-before">すべての質問にお答えいただくと、<br>診断結果が表示されます。</div><div class="result-calorie-box"><dl class="normal-result"><dt class="normal-result-heading">普段の<br>推定消費カロリー<dd class="normal-result-data fn-normal-result-data">0<dd class="normal-result-unit">kcal</dl><dl class="telework-result"><dt class="telework-result-heading">テレワーク時の<br>推定消費カロリー<dd class="telework-result-data fn-telework-result-data">0<dd class="telework-result-unit">kcal</dl><img src="assets/images/nutritionist.png?rev=0a7d2e942034f5a3" alt="Image Nutritionist" class="nutritionist-image"></div></div>
`

const mockBaseCalorie = {
  male: 1800,
  female: 1470
}

const mockData: mockData = [
  { gender: 'male', baseCalorie: null, commuting: 'train-minutes', work: 'desk', resultCalorie: 203, resultCup: 4 },
  { gender: 'male', baseCalorie: null, commuting: 'train-minutes', work: 'fifty', resultCalorie: 717, resultCup: 14.2 },
  { gender: 'male', baseCalorie: null, commuting: 'train-minutes', work: 'outside', resultCalorie: 846, resultCup: 16.8 },
  { gender: 'male', baseCalorie: null, commuting: 'train-hour', work: 'desk', resultCalorie: 332, resultCup: 6.6 },
  { gender: 'male', baseCalorie: null, commuting: 'train-hour', work: 'fifty', resultCalorie: 846, resultCup: 16.8 },
  { gender: 'male', baseCalorie: null, commuting: 'train-hour', work: 'outside', resultCalorie: 975, resultCup: 19.3 },
  { gender: 'male', baseCalorie: null, commuting: 'car', work: 'desk', resultCalorie: 107, resultCup: 2.1 },
  { gender: 'male', baseCalorie: null, commuting: 'car', work: 'fifty', resultCalorie: 621, resultCup: 12.3 },
  { gender: 'male', baseCalorie: null, commuting: 'car', work: 'outside', resultCalorie: 750, resultCup: 14.9 },
  { gender: 'male', baseCalorie: null, commuting: 'bicycle', work: 'desk', resultCalorie: 286, resultCup: 5.7 },
  { gender: 'male', baseCalorie: null, commuting: 'bicycle', work: 'fifty', resultCalorie: 800, resultCup: 15.9 },
  { gender: 'male', baseCalorie: null, commuting: 'bicycle', work: 'outside', resultCalorie: 929, resultCup: 18.4 },
  { gender: 'female', baseCalorie: null, commuting: 'train-minutes', work: 'desk', resultCalorie: 168, resultCup: 3.3 },
  { gender: 'female', baseCalorie: null, commuting: 'train-minutes', work: 'fifty', resultCalorie: 591, resultCup: 11.7 },
  { gender: 'female', baseCalorie: null, commuting: 'train-minutes', work: 'outside', resultCalorie: 697, resultCup: 13.8 },
  { gender: 'female', baseCalorie: null, commuting: 'train-hour', work: 'desk', resultCalorie: 273, resultCup: 5.4 },
  { gender: 'female', baseCalorie: null, commuting: 'train-hour', work: 'fifty', resultCalorie: 696, resultCup: 13.8 },
  { gender: 'female', baseCalorie: null, commuting: 'train-hour', work: 'outside', resultCalorie: 802, resultCup: 15.9 },
  { gender: 'female', baseCalorie: null, commuting: 'car', work: 'desk', resultCalorie: 88, resultCup: 1.7 },
  { gender: 'female', baseCalorie: null, commuting: 'car', work: 'fifty', resultCalorie: 511, resultCup: 10.1 },
  { gender: 'female', baseCalorie: null, commuting: 'car', work: 'outside', resultCalorie: 617, resultCup: 12.2 },
  { gender: 'female', baseCalorie: null, commuting: 'bicycle', work: 'desk', resultCalorie: 239, resultCup: 4.7 },
  { gender: 'female', baseCalorie: null, commuting: 'bicycle', work: 'fifty', resultCalorie: 662, resultCup: 13.1 },
  { gender: 'female', baseCalorie: null, commuting: 'bicycle', work: 'outside', resultCalorie: 768, resultCup: 15.2 }
]

describe('Diagnosis', () => {
  it('Check Result', () => {
    document.body.innerHTML = mockDOM
    mockData.map((info) => {
      info.baseCalorie = info.gender === 'male' ? mockBaseCalorie.male : mockBaseCalorie.female
      const diagnosis = new Diagnosis()

      diagnosis.gender = info.gender
      diagnosis.baseCalorie = info.baseCalorie
      diagnosis.commuting = info.commuting
      diagnosis.work = info.work
      // eslint-disable-next-line dot-notation
      diagnosis['result']()

      expect(document.querySelector('.fn-result-comment-box')!.innerHTML).toMatch(String(info.resultCup))
      expect(document.querySelector('.fn-normal-result-data')!.textContent).toBe((info.baseCalorie + info.resultCalorie).toLocaleString())
      expect(document.querySelector('.fn-telework-result-data')!.textContent).toBe(info.baseCalorie.toLocaleString())
    })
  })

  it('Check First Button', () => {
    document.body.innerHTML = mockDOM
    const diagnosis = new Diagnosis()
    diagnosis.pressFirstButton()

    Array.from(document.querySelectorAll('.fn-question-first-button'), (selector, index): void => {
      selector.dispatchEvent(new Event('click'))

      Array.from(new Array(document.querySelectorAll('.fn-question-first-button').length), (_selector, _index): void => {
        if (index !== _index) {
          expect(document.querySelectorAll('.fn-question-first-button')[_index].classList.contains('is-active')).toBe(false)
        }
      })

      Array.from(document.querySelectorAll('.fn-question-second-button'), (selector): void => {
        expect(selector.classList.contains('is-active')).toBe(false)
      })

      Array.from(document.querySelectorAll('.fn-question-third-button'), (selector): void => {
        expect(selector.classList.contains('is-active')).toBe(false)
        expect(selector.classList.contains('is-disabled')).toBe(true)
      })

      expect(selector.classList.contains('is-active')).toBe(true)
      expect(diagnosis.baseCalorie === (selector.getAttribute('data-gender') === 'female' ? mockBaseCalorie.female : mockBaseCalorie.male)).toBe(true)
      expect(diagnosis.gender === selector.getAttribute('data-gender')).toBe(true)
    })
  })

  it('Check Second Button', () => {
    document.body.innerHTML = mockDOM
    const diagnosis = new Diagnosis()
    diagnosis.pressSecondButton()

    Array.from(document.querySelectorAll('.fn-question-second-button'), (selector, index): void => {
      selector.dispatchEvent(new Event('click'))

      Array.from(new Array(document.querySelectorAll('.fn-question-second-button').length), (_selector, _index): void => {
        if (index !== _index) {
          expect(document.querySelectorAll('.fn-question-second-button')[_index].classList.contains('is-active')).toBe(false)
        }
      })

      Array.from(document.querySelectorAll('.fn-question-third-button'), (selector): void => {
        expect(selector.classList.contains('is-active')).toBe(false)
        expect(selector.classList.contains('is-disabled')).toBe(false)
      })

      expect(selector.classList.contains('is-active')).toBe(true)
      expect(diagnosis.commuting === selector.getAttribute('data-commuting')).toBe(true)
    })
  })

  it('Check Third Button', () => {
    document.body.innerHTML = mockDOM
    const diagnosis = new Diagnosis()
    diagnosis.pressThirdButton()
    // eslint-disable-next-line dot-notation
    diagnosis['result'] = jest.fn()

    Array.from(document.querySelectorAll('.fn-question-third-button'), (selector, index): void => {
      selector.dispatchEvent(new Event('click'))

      Array.from(new Array(document.querySelectorAll('.fn-question-third-button').length), (_selector, _index): void => {
        if (index !== _index) {
          expect(document.querySelectorAll('.fn-question-third-button')[_index].classList.contains('is-active')).toBe(false)
        }
      })

      expect(diagnosis.work === selector.getAttribute('data-work')).toBe(true)
    })
  })
})
