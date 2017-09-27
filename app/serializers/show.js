import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    images: { serialize: true }
  }
});
