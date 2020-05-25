import Exercise from '@/Modules/Exercise'

const mockDOM = `
  <div class="exercise"><img src="assets/images/icon_exercise.png?rev=a25e1e63a1645cc8" alt="Icon Exercise" class="icon-exercise"><h2 class="heading02">運動</h2><h4 class="heading04">日替わり筋トレ</h4><p class="letter">運動不⾜解消のために、<br>曜⽇ごとに部位を変えて鍛えましょう。</p><div class="gender-button-wrapper"><a class="gender-button is-female is-active fn-gender-button" data-gender="female">女性向け</a> <a class="gender-button is-male fn-gender-button" data-gender="male">男性向け</a></div><div class="day-menu-button-wrapper is-female fn-day-menu-button-wrapper" data-gender="female"><dl class="day-menu-button is-monday fn-exercise-day-menu-button is-active" data-date="monday"><dt class="day">Mon</dt><dd class="button-wrapper"><button class="button"></button></dd><dd class="menu">胸</dd><dd class="allow"></dd></dl><dl class="day-menu-button is-tuesday fn-exercise-day-menu-button" data-date="tuesday"><dt class="day">Tue</dt><dd class="button-wrapper"><button class="button"></button></dd><dd class="menu">腹筋</dd><dd class="allow"></dd></dl><dl class="day-menu-button is-wednesday fn-exercise-day-menu-button" data-date="wednesday"><dt class="day">Wed</dt><dd class="button-wrapper"><button class="button"></button></dd><dd class="menu">背中</dd><dd class="allow"></dd></dl><dl class="day-menu-button is-thursday fn-exercise-day-menu-button" data-date="thursday"><dt class="day">Thu</dt><dd class="button-wrapper"><button class="button"></button></dd><dd class="menu">体幹</dd><dd class="allow"></dd></dl><dl class="day-menu-button is-friday fn-exercise-day-menu-button" data-date="friday"><dt class="day">Fri</dt><dd class="button-wrapper"><button class="button"></button></dd><dd class="menu">下半身</dd><dd class="allow"></dd></dl><dl class="day-menu-button is-saturday fn-exercise-day-menu-button" data-date="saturday"><dt class="day">Sat</dt><dd class="button-wrapper"><button class="button"></button></dd><dd class="menu">腹筋</dd><dd class="allow"></dd></dl><dl class="day-menu-button is-sunday fn-exercise-day-menu-button" data-date="sunday"><dt class="day">Sun</dt><dd class="button-wrapper"><button class="button"></button></dd><dd class="menu">休み</dd><dd class="allow"></dd></dl></div></div>
  <div class="exercise-menu"><div class="menu is-female is-monday fn-menu is-active" data-gender="female" data-date="monday"><dl class="menu-heading-wrapper"><dt class="menu-heading">HIITで超燃焼！</dt><dd class="menu-data">バストアップに効く4種目</dd><dd class="menu-sub-data">20秒×4種目×2set</dd></dl><ul class="menu-list-wrapper"><li class="menu-list-letter">ノーマルプッシュアップ（膝つき）</li><li class="menu-list-letter">プランク（膝つき）</li><li class="menu-list-letter">ワイドプッシュアップ（膝つき）</li><li class="menu-list-letter">プランク（膝つき）</li></ul><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/4q_TttQzXYI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-female is-tuesday fn-menu" data-gender="female" data-date="tuesday"><dl class="menu-heading-wrapper"><dt class="menu-heading">6分くびれ腹筋</dt><dd class="menu-data">くびれを作る腹筋〜女性のための初級編〜</dd><dd class="menu-sub-data">40秒×6種目</dd></dl><ul class="menu-list-wrapper"><li class="menu-list-letter">クランチ</li><li class="menu-list-letter">クランチ足上げ</li><li class="menu-list-letter">プランク（膝つき）</li><li class="menu-list-letter">サイドプランク（右）</li><li class="menu-list-letter">サイドプランク（左）</li><li class="menu-list-letter">シザース</li></ul><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/cuSZxtuLbJk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-female is-wednesday fn-menu" data-gender="female" data-date="wednesday"><dl class="menu-heading-wrapper"><dt class="menu-heading">4分背中</dt><dd class="menu-data">猫背解消！スッキリした美姿勢をつくる背中トレーニング！</dd><dd class="menu-sub-data">20秒×4種目×2set</dd></dl><ul class="menu-list-wrapper"><li class="menu-list-letter">バックエクステンション</li><li class="menu-list-letter">ニートゥーエルボー（右腕・左脚）</li><li class="menu-list-letter">ニートゥーエルボー（左腕・右脚）</li><li class="menu-list-letter">ハイリバースプランク</li></ul><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/bKUhfgsuLJY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-female is-thursday fn-menu" data-gender="female" data-date="thursday"><dl class="menu-heading-wrapper"><dt class="menu-heading">4分体幹</dt><dd class="menu-data">ぽっこりお腹を解消！HIIT４種目</dd><dd class="menu-sub-data">20秒×4種目×2set</dd></dl><ul class="menu-list-wrapper"><li class="menu-list-letter">プランク</li><li class="menu-list-letter">サイドプランク（右）</li><li class="menu-list-letter">サイドプランク（左）</li><li class="menu-list-letter">ハイリバースプランク</li></ul><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/NN5MgiTlBA4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-female is-friday fn-menu" data-gender="female" data-date="friday"><dl class="menu-heading-wrapper"><dt class="menu-heading">自宅で4分</dt><dd class="menu-data">美尻・美脚をつくるHIIT４種目</dd><dd class="menu-sub-data">20秒×4種目×2set</dd></dl><ul class="menu-list-wrapper"><li class="menu-list-letter">スクワット</li><li class="menu-list-letter">アブダクション（左）</li><li class="menu-list-letter">アブダクション（右）</li><li class="menu-list-letter">ヒップリフト</li></ul><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/xXEouBPW59U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-female is-saturday is-sunday fn-menu" data-gender="female" data-date="saturday"><dl class="menu-heading-wrapper"><dt class="menu-heading">6分くびれ腹筋</dt><dd class="menu-data">くびれを作る腹筋〜女性のための中級編〜</dd><dd class="menu-sub-data">40秒×6種目</dd></dl><ul class="menu-list-wrapper"><li class="menu-list-letter">Vシットアップ（上半身のみ）</li><li class="menu-list-letter">サイクリング</li><li class="menu-list-letter">パワープランク（肘伸ばし）</li><li class="menu-list-letter">プランクツイスト（肘伸ばし）</li><li class="menu-list-letter">スターツイストシットアップ</li><li class="menu-list-letter">下腹部腹筋</li></ul><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/qjn7BzwyAHM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-male is-monday fn-menu" data-gender="male" data-date="monday"><dl class="menu-heading-wrapper"><dt class="menu-heading">自宅で4分</dt><dd class="menu-data">男前の大胸筋を作るHIITメニュー！</dd><dd class="menu-sub-data">20秒×4種目×2set</dd></dl><ul class="menu-list-wrapper"><li class="menu-list-letter">ノーマルプッシュアップ</li><li class="menu-list-letter">ワイドプッシュアップ</li><li class="menu-list-letter">ナロープッシュアップ</li><li class="menu-list-letter">ヒンズープッシュアップ</li></ul><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/wa5r8nUc5l4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-male is-tuesday fn-menu" data-gender="male" data-date="tuesday"><dl class="menu-heading-wrapper"><dt class="menu-heading">6分コミット</dt><dd class="menu-data">割れる腹筋メニュー初級編</dd><dd class="menu-sub-data">40秒×6種目</dd></dl><ul class="menu-list-wrapper"><li class="menu-list-letter">クランチ</li><li class="menu-list-letter">クランチ足上げ</li><li class="menu-list-letter">プランク</li><li class="menu-list-letter">サイドプランク（右）</li><li class="menu-list-letter">サイドプランク（左）</li><li class="menu-list-letter">シザース</li></ul><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/hAn076LReyY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-male is-wednesday fn-menu" data-gender="male" data-date="wednesday"><dl class="menu-heading-wrapper"><dt class="menu-heading">背中4分</dt><dd class="menu-data">HIITで運動不足解消！</dd><dd class="menu-sub-data">20秒×4種目×2set</dd></dl><ul class="menu-list-wrapper"><li class="menu-list-letter">ニートゥーエルボー（右腕・左脚）</li><li class="menu-list-letter">ニートゥーエルボー（左腕・右脚）</li><li class="menu-list-letter">バックエクステンション</li><li class="menu-list-letter">スーパーマン</li></ul><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/YxzbUml9fV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-male is-thursday fn-menu" data-gender="male" data-date="thursday"><dl class="menu-heading-wrapper"><dt class="menu-heading">体幹4分</dt><dd class="menu-data">HIITで運動不足解消！</dd><dd class="menu-sub-data">20秒×4種目×2set</dd></dl><ul class="menu-list-wrapper"><li class="menu-list-letter">ツーポイントプランク（右肘・左足）</li><li class="menu-list-letter">ツーポイントプランク（左肘・右足）</li><li class="menu-list-letter">プランクトライアングル（右）</li><li class="menu-list-letter">プランクトライアングル（左）</li></ul><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/ot_tPPPJ5go" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-male is-friday fn-menu" data-gender="male" data-date="friday"><dl class="menu-heading-wrapper"><dt class="menu-heading">自宅で4分</dt><dd class="menu-data">HIITで超脂肪燃焼！下半身４種目コミット</dd><dd class="menu-sub-data">20秒×4種目×2set</dd></dl><ul class="menu-list-wrapper"><li class="menu-list-letter">スクワット</li><li class="menu-list-letter">ランジ</li><li class="menu-list-letter">リザード</li><li class="menu-list-letter">バックランジ</li></ul><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/N_edz3hCIvQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div><div class="menu is-male is-saturday is-sunday fn-menu" data-gender="male" data-date="saturday"><dl class="menu-heading-wrapper"><dt class="menu-heading">6分コミット</dt><dd class="menu-data">割れる腹筋メニュー初級編</dd><dd class="menu-sub-data">40秒×6種目</dd></dl><ul class="menu-list-wrapper"><li class="menu-list-letter">片足レッグレイズ</li><li class="menu-list-letter">レッグレイズ</li><li class="menu-list-letter">プランクウォーク</li><li class="menu-list-letter">スパイダープランク</li><li class="menu-list-letter">ニートゥチェスト</li><li class="menu-list-letter">クランチツイスト</li></ul><div class="movie-wrapper"><iframe class="movie" width="560" height="315" src="https://www.youtube.com/embed/lmTVYE53CVs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div></div>
`

describe('Exercise', () => {
  it('Check Initialize', () => {
    document.body.innerHTML = mockDOM
    const exercise = new Exercise()
    exercise.init()

    Array.from(document.querySelectorAll('.fn-exercise-day-menu-button'), (selector): void => {
      if (selector.getAttribute('data-date') === exercise.today) {
        expect(selector.classList.contains('is-active')).toBe(true)
      }
    })

    Array.from(document.querySelectorAll('.fn-menu'), (selector): void => {
      if (
        selector.getAttribute('data-gender') === document.querySelector('.fn-day-menu-button-wrapper')!.getAttribute('data-gender') &&
        selector.getAttribute('data-date') === (exercise.today === 'sunday' ? 'saturday' : exercise.today)
      ) {
        expect(selector.classList.contains('is-active')).toBe(true)
      }
    })
  })

  it('Check Gender Button', () => {
    document.body.innerHTML = mockDOM
    const exercise = new Exercise()
    exercise.pressGenderButton()

    Array.from(document.querySelectorAll('.fn-gender-button'), (selector, index): void => {
      selector.dispatchEvent(new Event('click'))

      Array.from(new Array(document.querySelectorAll('.fn-gender-button').length), (_selector, _index): void => {
        if (index !== _index) {
          expect(document.querySelectorAll('.fn-gender-button')[_index].classList.contains('is-active')).toBe(false)
        }
      })

      expect(selector.classList.contains('is-active')).toBe(true)
      expect(document.querySelector('.fn-day-menu-button-wrapper')!.classList.contains(`is-${selector.getAttribute('data-gender')}`)).toBe(true)
      expect(document.querySelector('.fn-day-menu-button-wrapper')!.getAttribute('data-gender') === selector.getAttribute('data-gender')).toBe(true)

      Array.from(document.querySelectorAll('.fn-menu'), (selector): void => {
        if (
          selector.getAttribute('data-gender') === document.querySelector('.fn-day-menu-button-wrapper')!.getAttribute('data-gender') &&
          selector.getAttribute('data-date') === (exercise.today === 'sunday' ? 'saturday' : exercise.today)
        ) {
          expect(selector.classList.contains('is-active')).toBe(true)
        } else {
          expect(selector.classList.contains('is-active')).toBe(false)
        }
      })
    })
  })

  it('Check Day Menu Button', () => {
    document.body.innerHTML = mockDOM
    const exercise = new Exercise()
    exercise.pressDayMenuButton()

    Array.from(document.querySelectorAll('.fn-exercise-day-menu-button'), (selector, index): void => {
      selector.dispatchEvent(new Event('click'))
      const pickDate = selector.getAttribute('data-date')

      Array.from(new Array(document.querySelectorAll('.fn-exercise-day-menu-button').length), (_selector, _index): void => {
        if (index !== _index) {
          expect(document.querySelectorAll('.fn-exercise-day-menu-button')[_index].classList.contains('is-active')).toBe(false)
        }
      })

      expect(selector.classList.contains('is-active')).toBe(true)

      Array.from(document.querySelectorAll('.fn-menu'), (selector): void => {
        if (
          selector.getAttribute('data-gender') === document.querySelector('.fn-day-menu-button-wrapper')!.getAttribute('data-gender') &&
          selector.getAttribute('data-date') === pickDate
        ) {
          expect(selector.classList.contains('is-active')).toBe(true)
        } else {
          expect(selector.classList.contains('is-active')).toBe(false)
        }
      })
    })
  })
})
