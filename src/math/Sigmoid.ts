/**
 * @docs https://en.wikipedia.org/wiki/Sigmoid_function
 */
export class Sigmoid {
  static counter: number = 0;

  static calc(input: number): number {
    this.counter++;
    let output = 1 / (1 + Math.pow(Math.E, -1 * input));
    return output;
  }
}
