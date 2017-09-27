import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('alt-footer-right', 'Integration | Component | alt footer right', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{alt-footer-right}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#alt-footer-right}}
      template block text
    {{/alt-footer-right}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
