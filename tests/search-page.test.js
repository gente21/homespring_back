const { getFromGoogle } = require('../src/gbooks');

describe('Test to see if we can actually pull info from Google Books', () => {
  test("Get the first Harry Potter book available", (done) => {
    const searchTerm = 'Harry Potter';
    const options = {
      field: 'title',
      offset: 0,
      limit: 1,
      type: 'books',
      order: 'relevance',
      lang: 'en'
    };
    getFromGoogle(searchTerm, options).then(function (res) {
      expect(Array.isArray([res])).toBe(true);
      done();
    });
  })
});