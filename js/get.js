class GET {
  value;
  constructor(parameter) {
    const params = new URLSearchParams(window.location.search);
    this.value = params.get(parameter);
  }
}

export default GET;
