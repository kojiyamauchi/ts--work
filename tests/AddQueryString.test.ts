import AddQueryString from '@/Modules/AddQueryString'

const mockDOM = `
  <a href="index.html" class="back-to-top fn-back-to-top">TOPに戻る</a>
  <div class="question-wrapper is-question-first-wrapper"><h5 class="question-heading">Q1</h5><span class="heading-under-line"></span> <p class="question-letter">あなたの性別を教えてください。<div class="question-first-inner"><a class="question-first-button is-female fn-question-first-button" data-gender="female">女性</a> <a class="question-first-button is-male fn-question-first-button" data-gender="male">男性</a></div></div>
  <div class="card is-exercise"><div class="card-heading-wrapper"><img src="assets/images/icon_exercise.png?rev=332c6b1568402728" alt="Icon Exercise" class="card-icon"><dl class="card-heading"><dt class="card-heading-letter">STEP2<dd class="card-heading-data"><h2 class="heading02">運動</h2></dl></div><p class="description">在宅運動メニューでカラダを動かす</p><a href="index.html?gender=male#anchor-exercise" class="button fn-back-to-top">詳しくはこちら</a> <p class="notes">RIZAPトレーナーが特別考案</div>
  <div class="card is-meal"><div class="card-heading-wrapper"><img src="assets/images/icon_meal.png?rev=7fc9ddae9d41a619" alt="Icon Meal" class="card-icon"><dl class="card-heading"><dt class="card-heading-letter">STEP3<dd class="card-heading-data"><h2 class="heading02">食事</h2></dl></div><p class="description">免疫維持＆低カロリー⾷⽣活を実践</p><a href="index.html?gender=female#anchor-meal" class="button fn-back-to-top">詳しくはこちら</a> <p class="notes">あすけん管理栄養⼠が作成</div>
`

const mockGender = ['female', 'male']

const checkResult = (arg: string): void => {
  Array.from(document.querySelectorAll('.fn-back-to-top'), (selector): void => {
    expect(selector.getAttribute('href')).toMatch(`index.html?gender=${arg}`)
  })
}

describe('AddQueryString', () => {
  it('Check Add Query String', () => {
    document.body.innerHTML = mockDOM
    const addQueryString = new AddQueryString()

    mockGender.map((info): void => {
      // eslint-disable-next-line dot-notation
      addQueryString['addQueryString'](info)
      checkResult(info)
    })
  })

  it('Check Core', () => {
    document.body.innerHTML = mockDOM
    const addQueryString = new AddQueryString()
    addQueryString.core()

    Array.from(document.querySelectorAll('.fn-question-first-button'), (selector): void => {
      selector.dispatchEvent(new Event('click'))
      const pickGender = selector.getAttribute('data-gender')
      checkResult(pickGender!)
    })
  })
})
