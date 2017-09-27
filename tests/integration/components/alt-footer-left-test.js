import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('alt-footer-left', 'Integration | Component | alt footer left', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{alt-footer-left}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#alt-footer-left}}
      template block text
    {{/alt-footer-left}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
