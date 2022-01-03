export class Counter {
  getdata() {
    try {
      let data = localStorage.getItem("Data");
      return data;
    } catch (error) {
      return 0;
    }
  }
}
