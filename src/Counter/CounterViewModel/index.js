export class CounterViewModel {
  constructor(model) {
    this.model = model;
  }

  getData() {
    return this.model.getData();
  }
}
