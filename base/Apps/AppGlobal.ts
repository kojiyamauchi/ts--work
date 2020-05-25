/*
 AppGlobal.ts
*/

// Import Modules.
import JumpTop from '@/Modules/JumpTop'
import CopyURL from '@/Modules/CopyURL'

export default class AppGlobal {
  // Types.
  private readonly jumpTop: JumpTop
  private readonly copyURL: CopyURL

  public constructor() {
    this.jumpTop = new JumpTop()
    this.copyURL = new CopyURL()
  }

  public init(): void {
    this.jumpTop.toTop()
    this.copyURL.core()
  }

  public domContentLoaded(): void {
    // Add DOM Content Loaded Method.
  }

  public load(): void {
    // Add Load Method.
  }

  public resize(): void {
    // Add Resize Method.
  }

  public scroll(): void {
    this.jumpTop.showBtn()
  }
}
