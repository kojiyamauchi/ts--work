/*
 AppCalorie.ts
*/

// Import Modules.
import AddQueryString from '@/Modules/AddQueryString'
import Diagnosis from '@/Modules/Diagnosis'

export default class AppCalorie {
  // Types.
  private readonly addQueryString: AddQueryString
  private readonly diagnosis: Diagnosis

  public constructor() {
    this.addQueryString = new AddQueryString()
    this.diagnosis = new Diagnosis()
  }

  public init(): void {
    this.addQueryString.core()
    this.diagnosis.pressFirstButton()
    this.diagnosis.pressSecondButton()
    this.diagnosis.pressThirdButton()
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
    // Add Scroll Method.
  }
}
