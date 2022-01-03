export class Counter {
  getData() {
    try {
      const data = localStorage.getItem("Data");
      if (data) {
        return data;
      }
      return 0;
    } catch (error) {
      return 0;
    }
  }
}
