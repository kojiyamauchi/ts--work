/*
 AppTop.ts
*/

// Import Modules.
import PickQueryString from '@/Modules/PickQueryString'
import Exercise from '@/Modules/Exercise'
import Stretch from '@/Modules/Stretch'
import Meal from '@/Modules/Meal'
import Recipe from '@/Modules/Recipe'
import AnchorLink from '@/Modules/AnchorLink'
import Accordion from '@/Modules/Accordion'

export default class AppTop {
  // Types.
  private selectors: {
    readonly buttonToExercise: NodeListOf<HTMLElement>
    readonly anchorExercise: HTMLElement | null
    readonly buttonToMeal: NodeListOf<HTMLElement>
    readonly anchorMeal: HTMLElement | null
    readonly buttonToApp: NodeListOf<HTMLElement>
    readonly anchorApp: HTMLElement | null
    readonly accordionOpenButton: NodeListOf<HTMLElement>
  }

  private readonly pickQueryString: PickQueryString
  private readonly exercise: Exercise
  private readonly stretch: Stretch
  private readonly meal: Meal
  private readonly recipe: Recipe
  private readonly anchorToExercise: AnchorLink
  private readonly anchorToMeal: AnchorLink
  private readonly anchorToApp: AnchorLink
  private readonly accordion: Accordion

  public constructor() {
    this.selectors = {
      buttonToExercise: document.querySelectorAll('.fn-to-exercise'),
      anchorExercise: document.querySelector('.fn-anchor-exercise'),
      buttonToMeal: document.querySelectorAll('.fn-to-meal'),
      anchorMeal: document.querySelector('.fn-anchor-meal'),
      buttonToApp: document.querySelectorAll('.fn-to-app'),
      anchorApp: document.querySelector('.fn-anchor-app'),
      accordionOpenButton: document.querySelectorAll('.fn-accordion-open-button')
    }

    this.pickQueryString = new PickQueryString()
    this.exercise = new Exercise()
    this.stretch = new Stretch()
    this.meal = new Meal()
    this.recipe = new Recipe()
    this.anchorToExercise = new AnchorLink(this.selectors.buttonToExercise, this.selectors.anchorExercise)
    this.anchorToMeal = new AnchorLink(this.selectors.buttonToMeal, this.selectors.anchorMeal)
    this.anchorToApp = new AnchorLink(this.selectors.buttonToApp, this.selectors.anchorApp)
    this.accordion = new Accordion(this.selectors.accordionOpenButton)
  }

  public init(): void {
    this.pickQueryString.core()
    this.exercise.init()
    this.exercise.pressGenderButton()
    this.exercise.pressDayMenuButton()
    this.stretch.core()
    this.meal.init()
    this.meal.maxLength()
    this.meal.addHeightResult()
    this.meal.activityButtonResult()
    this.recipe.init()
    this.recipe.core()
    this.anchorToExercise.core()
    this.anchorToMeal.core()
    this.anchorToApp.core()
    this.accordion.core()
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
