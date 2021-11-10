const gbooks = require('google-books-search');

export function getFromGoogle(query: string, options: any): Promise<any[]> {
  return new Promise(function(resolve, reject) {
    gbooks.search(query, options, function(error, results) {
      setTimeout(function() {
        resolve(results);
      }, 1000);
    });
  });
}

export async function getGoogleBooks(req, res, next) {
  if(req.body.query !== undefined) {
    const options = {
      field: 'title',
      offset: 0, // Always paginate to zero, it will be incremented by the client
      limit: 39, // This is an artificial limit to avoid overloading the API
      type: 'books',
      order: 'relevance',
      lang: 'en'
    };
    getFromGoogle(req.body.query, options).then(results => {
      res.status(200).send(results);
      return;
    }).catch(err => {
      res.status(500).send(err);
      return;
    });
  } else {
    res.status(400).json({ error: 'Malformed' });
    return;
  }   
}