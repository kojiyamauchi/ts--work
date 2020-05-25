import Stretch from '@/Modules/Stretch'

const mockDOM = `
  <div class="stretch"><h4 class="heading04">日替わりストレッチ</h4><p class="letter">気になる部位を選び、<br>動画に従ってストレッチしましょう。</p><div class="strech-button-wrapper"><a class="strech-button is-stiff-shoulders is-active fn-stretch-button" data-stretch="stiff-shoulders">肩こり</a> <a class="strech-button is-back-pain fn-stretch-button" data-stretch="back-pain">腰痛</a> <a class="strech-button is-hunchback fn-stretch-button" data-stretch="hunchback">ねこぜ</a> <a class="strech-button is-swelling fn-stretch-button" data-stretch="swelling">足<br><small class="is-small">のむくみ</small></a> <a class="strech-button is-tiredness fn-stretch-button" data-stretch="tiredness"><small class="is-small">お尻と太もも<br>の疲れ</small></a> <a class="strech-button is-knee fn-stretch-button" data-stretch="knee">ひざ<br><small class="is-small">の痛み</small></a></div></div>
  <div class="stretch-menu"><div class="menu is-stiff-shoulders is-active fn-stretch-menu" data-stretch="stiff-shoulders"><dl class="menu-heading-wrapper"><dt class="menu-heading">デスクワーク疲れの肩こり予防</dt><dd class="menu-data">RIZAP式30秒ストレッチ！</dd></dl><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/aoo3pxuBn2Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-back-pain fn-stretch-menu" data-stretch="back-pain"><dl class="menu-heading-wrapper"><dt class="menu-heading">座り仕事による腰痛予防</dt><dd class="menu-data">RIZAP式30秒ストレッチ！</dd></dl><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/UPb24cTConA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-hunchback fn-stretch-menu" data-stretch="hunchback"><dl class="menu-heading-wrapper"><dt class="menu-heading">ねこぜでお困りですか？</dt><dd class="menu-data">RIZAP式30秒ストレッチ！</dd></dl><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/7LAhybB-Yc4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-swelling fn-stretch-menu" data-stretch="swelling"><dl class="menu-heading-wrapper"><dt class="menu-heading">足のむくみ改善</dt><dd class="menu-data">RIZAP式30秒ストレッチ！</dd></dl><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/H93GV1ZXp6g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-tiredness fn-stretch-menu" data-stretch="tiredness"><dl class="menu-heading-wrapper"><dt class="menu-heading">お尻＆太もものシェイプアップ！</dt><dd class="menu-data">RIZAP式30秒ストレッチ！</dd></dl><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/p0fSWS4hf5s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-knee fn-stretch-menu" data-stretch="knee"><dl class="menu-heading-wrapper"><dt class="menu-heading">ひざが痛いのは骨盤が原因？</dt><dd class="menu-data">RIZAP式30秒ストレッチ！</dd></dl><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/UaFF9TxbdR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div></div>
`

describe('Stretch', () => {
  it('Check Core', () => {
    document.body.innerHTML = mockDOM
    const stretch = new Stretch()
    stretch.core()

    Array.from(document.querySelectorAll('.fn-stretch-button'), (selector, index): void => {
      selector.dispatchEvent(new Event('click'))

      Array.from(new Array(document.querySelectorAll('.fn-stretch-button').length), (_selector, _index): void => {
        if (index !== _index) {
          expect(document.querySelectorAll('.fn-stretch-button')[_index].classList.contains('is-active')).toBe(false)
        }
      })

      expect(selector.classList.contains('is-active')).toBe(true)

      const pickData = selector.getAttribute('data-stretch')

      Array.from(document.querySelectorAll('.fn-stretch-menu'), (selector): void => {
        if (selector.getAttribute('data-stretch') === pickData) {
          expect(selector.classList.contains('is-active')).toBe(true)
        } else {
          expect(selector.classList.contains('is-active')).toBe(false)
        }
      })
    })
  })
})
