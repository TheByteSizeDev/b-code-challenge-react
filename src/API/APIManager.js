

export default Object.create(null, {
  all: {
    value: function() {
      return fetch('./app.json').then(data => data.json());
    }
  }
});