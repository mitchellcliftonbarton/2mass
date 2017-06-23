export default function() {

  this.namespace = '/api';

  this.get('/shows');
  // this.get('/shows/:id');
  // this.get('/shows', (schema, request) => {
  //
  //   let query = {};
  //
  //   Object.keys(request.queryParams).forEach(key => {
  //
  //     let filterRegex = key.match(/filter\[([^&]*)\]/);
  //     if (filterRegex) {
  //       query[filterRegex[1]] = request.queryParams[key];
  //     }
  //   });
    // return request.query;
    // return schema.shows.where(query);

    // return schema.shows.where({ status: 'archive' });
  // });

  // this.get('/shows', (schema, request) => {
  //   return schema.shows.where({ status: 'upcoming' });
  // });
}
