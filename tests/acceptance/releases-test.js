import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | releases', function(hooks) {
  setupApplicationTest(hooks);

  test('Percy snapshot', async function(assert) {
    await visit('/releases');
    await percySnapshot(assert);

    assert.ok(true);
  });
});