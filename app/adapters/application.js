import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: 'https://arcane-eyrie-59193.herokuapp.com',
  // host: 'http://localhost:5000',

  namespace: 'api',
  authorizer: 'authorizer:oauth2',
  queryRecord(store, type, query) {
    return this.query(store, type, query).then((response) => {
      if (response.data.length)
        response.data = response.data[0]
      // console.log(query)
      return response
    })
  }
});
