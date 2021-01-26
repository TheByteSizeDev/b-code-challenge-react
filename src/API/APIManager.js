
// My one single fetch call to my tiny fake database. Please see the app.json file in the public folder
export default Object.create(null, {
  all: {
    value: function() {
      return fetch('./app.json').then(data => data.json());
    }
  }
});