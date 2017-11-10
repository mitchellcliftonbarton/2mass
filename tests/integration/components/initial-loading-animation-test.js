import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('initial-loading-animation', 'Integration | Component | initial loading animation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{initial-loading-animation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#initial-loading-animation}}
      template block text
    {{/initial-loading-animation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
