/*

 JumpTop.ts

*/

// Import Package Modules.
import jump from 'jump.js'

export default class JumpTop {
  // Types.
  private windowHeight: number
  private currentScrollY: number
  private selectors: {
    readonly jumpTopBtn: HTMLElement | null
    readonly scrollTop: HTMLAnchorElement | null
  }

  public constructor() {
    this.windowHeight = window.innerHeight
    this.currentScrollY = window.pageYOffset
    this.selectors = {
      jumpTopBtn: document.querySelector('.fn-btn-jump-top'),
      scrollTop: document.querySelector('.fn-scroll-top')
    }
    this.checkScroll()
  }

  private checkScroll(): void {
    window.addEventListener('scroll', (): void => {
      this.windowHeight = window.innerHeight
      this.currentScrollY = window.pageYOffset
    })
  }

  public showBtn(): void {
    this.windowHeight < this.currentScrollY ? this.selectors.jumpTopBtn!.classList.add('is-active') : this.selectors.jumpTopBtn!.classList.remove('is-active')
  }

  public toTop(): void {
    this.selectors.jumpTopBtn!.addEventListener('click', (event): void => {
      jump(this.selectors.scrollTop!)
      event.preventDefault()
    })
  }
}
