import Accordion from '@/Modules/Accordion'

const mockDOM = `
  <div class="calc"><dl class="qa"><dt class="question fn-accordion-open-button">算出方法は？<dd class="answer"><p class="letter">摂取エネルギー量(Kcal) = 標準体重(kg)*1 x 身体活動量(kcal)*2<p class="letter">*1 標準体重(kg) = 身長(m) x 身長(m) x 22<p class="letter">*2 デスクワーク中心(25~30kcal) / 立ち仕事が多い(30~35kcal) / 力仕事が多い(35kcal~) で計算</dl><dl class="qa"><dt class="question fn-accordion-open-button">より正確に計測するには？<dd class="answer"><p class="letter">無料ダイエットアプリ「あすけん」を使うと、あなたの目標体重や・減量(増量)ペースに応じてパーソナライズされた目標摂取カロリーが自動計算されます。</p><a href="" class="anchor fn-to-app">実際に使ってみる</a></dl></div>
`

describe('Accordion', () => {
  it('Check Operation', () => {
    document.body.innerHTML = mockDOM
    const accordion = new Accordion(document.querySelectorAll('.fn-accordion-open-button'))
    accordion.core()

    Array.from(document.querySelectorAll('.fn-accordion-open-button'), (selector): void => {
      selector.dispatchEvent(new Event('click'))
      expect(selector.classList.contains('is-active')).toBe(true)
      expect(selector.nextElementSibling!.classList.contains('is-active')).toBe(true)
      selector.dispatchEvent(new Event('click'))
      expect(selector.classList.contains('is-active')).toBe(false)
      expect(selector.nextElementSibling!.classList.contains('is-active')).toBe(false)
    })
  })
})
