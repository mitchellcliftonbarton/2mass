'use strict';

define('e-2mass/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('authenticators/oauth2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/oauth2.js should pass ESLint\n\n');
  });

  QUnit.test('authorizers/oauth2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/oauth2.js should pass ESLint\n\n');
  });

  QUnit.test('components/alt-footer-left.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/alt-footer-left.js should pass ESLint\n\n10:7 - \'TweenMax\' is not defined. (no-undef)\n10:69 - \'Expo\' is not defined. (no-undef)\n10:110 - \'Expo\' is not defined. (no-undef)');
  });

  QUnit.test('components/alt-footer-right.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/alt-footer-right.js should pass ESLint\n\n');
  });

  QUnit.test('components/carousel-el.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/carousel-el.js should pass ESLint\n\n20:9 - \'$\' is not defined. (no-undef)\n24:9 - \'$\' is not defined. (no-undef)\n28:9 - \'$\' is not defined. (no-undef)\n32:9 - \'$\' is not defined. (no-undef)\n36:9 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('components/footer-rotate.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/footer-rotate.js should pass ESLint\n\n10:7 - \'TweenMax\' is not defined. (no-undef)\n10:20 - \'$\' is not defined. (no-undef)\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n12:17 - \'$\' is not defined. (no-undef)\n13:18 - \'Linear\' is not defined. (no-undef)');
  });

  QUnit.test('components/image-upload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/image-upload.js should pass ESLint\n\n');
  });

  QUnit.test('components/initial-loading-animation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/initial-loading-animation.js should pass ESLint\n\n');
  });

  QUnit.test('components/loading-animation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/loading-animation.js should pass ESLint\n\n');
  });

  QUnit.test('components/main-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/main-nav.js should pass ESLint\n\n12:31 - Empty block statement. (no-empty)\n17:13 - \'$\' is not defined. (no-undef)\n19:15 - \'$\' is not defined. (no-undef)\n28:11 - Unexpected console statement. (no-console)\n34:12 - Empty block statement. (no-empty)\n42:11 - \'$\' is not defined. (no-undef)\n43:9 - \'$\' is not defined. (no-undef)\n45:9 - \'$\' is not defined. (no-undef)\n47:9 - \'$\' is not defined. (no-undef)\n49:9 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('components/photo-clicker.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/photo-clicker.js should pass ESLint\n\n28:9 - Unexpected console statement. (no-console)\n31:11 - Unexpected console statement. (no-console)\n32:11 - \'$\' is not defined. (no-undef)\n33:11 - \'$\' is not defined. (no-undef)\n44:5 - \'$\' is not defined. (no-undef)\n47:11 - \'$\' is not defined. (no-undef)\n49:11 - \'$\' is not defined. (no-undef)\n51:15 - Unexpected console statement. (no-console)\n53:17 - \'$\' is not defined. (no-undef)\n54:17 - \'$\' is not defined. (no-undef)\n57:19 - \'$\' is not defined. (no-undef)\n61:15 - Unexpected console statement. (no-console)\n69:11 - \'$\' is not defined. (no-undef)\n95:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/random-landing.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/random-landing.js should pass ESLint\n\n27:7 - \'$\' is not defined. (no-undef)\n36:9 - Unexpected console statement. (no-console)\n43:7 - \'$\' is not defined. (no-undef)\n45:9 - \'$\' is not defined. (no-undef)\n65:15 - \'TweenMax\' is not defined. (no-undef)\n80:15 - \'TweenMax\' is not defined. (no-undef)\n98:9 - \'$\' is not defined. (no-undef)\n99:9 - \'$\' is not defined. (no-undef)\n103:11 - \'$\' is not defined. (no-undef)\n104:11 - \'$\' is not defined. (no-undef)\n105:11 - \'$\' is not defined. (no-undef)\n108:13 - \'$\' is not defined. (no-undef)\n109:13 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('components/show-listing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/show-listing.js should pass ESLint\n\n');
  });

  QUnit.test('components/show-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/show-nav.js should pass ESLint\n\n8:7 - \'TweenMax\' is not defined. (no-undef)\n9:7 - \'TweenMax\' is not defined. (no-undef)\n13:7 - \'TweenMax\' is not defined. (no-undef)\n14:7 - \'TweenMax\' is not defined. (no-undef)');
  });

  QUnit.test('components/video-thing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/video-thing.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/create-image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/create-image.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/create-page.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/create-page.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/create-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/create-person.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/create-piece.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/create-piece.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/home.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/zone-of-avoidance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/zone-of-avoidance.js should pass ESLint\n\n');
  });

  QUnit.test('models/image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/image.js should pass ESLint\n\n');
  });

  QUnit.test('models/person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/person.js should pass ESLint\n\n');
  });

  QUnit.test('models/piece.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/piece.js should pass ESLint\n\n');
  });

  QUnit.test('models/show.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/show.js should pass ESLint\n\n');
  });

  QUnit.test('models/upcoming.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/upcoming.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/create-image.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/create-image.js should pass ESLint\n\n5:9 - \'params\' is defined but never used. (no-unused-vars)\n64:16 - Empty block statement. (no-empty)\n89:16 - Empty block statement. (no-empty)\n103:11 - \'$\' is not defined. (no-undef)\n104:11 - \'$\' is not defined. (no-undef)\n107:11 - \'$\' is not defined. (no-undef)\n108:11 - \'$\' is not defined. (no-undef)\n116:7 - Unexpected console statement. (no-console)\n120:7 - Unexpected console statement. (no-console)\n137:11 - \'page\' is defined but never used. (no-unused-vars)\n155:14 - Empty block statement. (no-empty)');
  });

  QUnit.test('routes/create-page.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/create-page.js should pass ESLint\n\n5:9 - \'params\' is defined but never used. (no-unused-vars)\n54:11 - Unexpected console statement. (no-console)\n60:16 - Empty block statement. (no-empty)\n67:9 - Unexpected console statement. (no-console)\n84:16 - Empty block statement. (no-empty)\n98:11 - \'$\' is not defined. (no-undef)\n99:11 - \'$\' is not defined. (no-undef)\n102:11 - \'$\' is not defined. (no-undef)\n103:11 - \'$\' is not defined. (no-undef)\n133:11 - \'page\' is defined but never used. (no-unused-vars)\n151:14 - Empty block statement. (no-empty)');
  });

  QUnit.test('routes/create-person.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/create-person.js should pass ESLint\n\n5:9 - \'params\' is defined but never used. (no-unused-vars)\n60:16 - Empty block statement. (no-empty)\n81:16 - Empty block statement. (no-empty)\n95:11 - \'$\' is not defined. (no-undef)\n96:11 - \'$\' is not defined. (no-undef)\n99:11 - \'$\' is not defined. (no-undef)\n100:11 - \'$\' is not defined. (no-undef)\n108:7 - Unexpected console statement. (no-console)\n112:7 - Unexpected console statement. (no-console)\n126:11 - \'page\' is defined but never used. (no-unused-vars)\n144:14 - Empty block statement. (no-empty)');
  });

  QUnit.test('routes/create-piece.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/create-piece.js should pass ESLint\n\n5:9 - \'params\' is defined but never used. (no-unused-vars)\n61:16 - Empty block statement. (no-empty)\n84:16 - Empty block statement. (no-empty)\n98:11 - \'$\' is not defined. (no-undef)\n99:11 - \'$\' is not defined. (no-undef)\n102:11 - \'$\' is not defined. (no-undef)\n103:11 - \'$\' is not defined. (no-undef)\n111:7 - Unexpected console statement. (no-console)\n115:7 - Unexpected console statement. (no-console)\n129:11 - \'page\' is defined but never used. (no-unused-vars)\n147:14 - Empty block statement. (no-empty)');
  });

  QUnit.test('routes/friendship.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/friendship.js should pass ESLint\n\n17:9 - \'$\' is not defined. (no-undef)\n19:11 - \'$\' is not defined. (no-undef)\n21:9 - \'NProgress\' is not defined. (no-undef)\n24:7 - \'$\' is not defined. (no-undef)\n25:9 - Unexpected console statement. (no-console)\n27:11 - \'$\' is not defined. (no-undef)\n29:11 - \'$\' is not defined. (no-undef)\n33:1 - Irregular whitespace not allowed. (no-irregular-whitespace)\n38:13 - \'TweenMax\' is not defined. (no-undef)\n38:58 - \'Expo\' is not defined. (no-undef)\n38:87 - \'Expo\' is not defined. (no-undef)\n39:13 - \'TweenMax\' is not defined. (no-undef)\n42:1 - Irregular whitespace not allowed. (no-irregular-whitespace)\n43:1 - Irregular whitespace not allowed. (no-irregular-whitespace)\n47:9 - \'$\' is not defined. (no-undef)\n48:9 - \'$\' is not defined. (no-undef)\n50:11 - \'$\' is not defined. (no-undef)\n52:9 - \'NProgress\' is not defined. (no-undef)\n59:11 - \'TweenMax\' is not defined. (no-undef)\n60:11 - \'TweenMax\' is not defined. (no-undef)\n60:68 - \'Expo\' is not defined. (no-undef)\n60:110 - \'Expo\' is not defined. (no-undef)\n61:11 - \'TweenMax\' is not defined. (no-undef)\n61:72 - \'Expo\' is not defined. (no-undef)\n61:114 - \'Expo\' is not defined. (no-undef)\n78:11 - \'$\' is not defined. (no-undef)\n79:9 - \'$\' is not defined. (no-undef)\n81:11 - \'$\' is not defined. (no-undef)\n84:9 - \'$\' is not defined. (no-undef)\n86:11 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('routes/geminii.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/geminii.js should pass ESLint\n\n22:11 - \'$\' is not defined. (no-undef)\n24:13 - \'$\' is not defined. (no-undef)\n26:11 - \'NProgress\' is not defined. (no-undef)\n29:9 - \'$\' is not defined. (no-undef)\n30:11 - Unexpected console statement. (no-console)\n32:13 - \'$\' is not defined. (no-undef)\n34:13 - \'$\' is not defined. (no-undef)\n38:1 - Irregular whitespace not allowed. (no-irregular-whitespace)\n43:13 - \'TweenMax\' is not defined. (no-undef)\n43:58 - \'Expo\' is not defined. (no-undef)\n43:87 - \'Expo\' is not defined. (no-undef)\n44:13 - \'TweenMax\' is not defined. (no-undef)\n47:1 - Irregular whitespace not allowed. (no-irregular-whitespace)\n48:1 - Irregular whitespace not allowed. (no-irregular-whitespace)\n52:11 - \'$\' is not defined. (no-undef)\n54:11 - \'$\' is not defined. (no-undef)\n56:13 - \'$\' is not defined. (no-undef)\n58:11 - \'NProgress\' is not defined. (no-undef)\n65:13 - \'TweenMax\' is not defined. (no-undef)\n66:13 - \'TweenMax\' is not defined. (no-undef)\n66:70 - \'Expo\' is not defined. (no-undef)\n66:112 - \'Expo\' is not defined. (no-undef)\n67:13 - \'TweenMax\' is not defined. (no-undef)\n67:74 - \'Expo\' is not defined. (no-undef)\n67:116 - \'Expo\' is not defined. (no-undef)\n84:13 - \'$\' is not defined. (no-undef)\n85:11 - \'$\' is not defined. (no-undef)\n87:13 - \'$\' is not defined. (no-undef)\n90:11 - \'$\' is not defined. (no-undef)\n92:13 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/home.js should pass ESLint\n\n18:11 - \'$\' is not defined. (no-undef)\n20:13 - \'$\' is not defined. (no-undef)\n22:11 - \'NProgress\' is not defined. (no-undef)\n25:9 - \'$\' is not defined. (no-undef)\n26:11 - Unexpected console statement. (no-console)\n28:13 - \'$\' is not defined. (no-undef)\n30:13 - \'$\' is not defined. (no-undef)\n35:3 - Irregular whitespace not allowed. (no-irregular-whitespace)\n39:3 - Irregular whitespace not allowed. (no-irregular-whitespace)\n45:11 - \'$\' is not defined. (no-undef)\n46:11 - \'$\' is not defined. (no-undef)\n48:13 - \'$\' is not defined. (no-undef)\n50:11 - \'NProgress\' is not defined. (no-undef)\n58:13 - \'TweenMax\' is not defined. (no-undef)\n59:13 - \'TweenMax\' is not defined. (no-undef)\n59:70 - \'Expo\' is not defined. (no-undef)\n59:112 - \'Expo\' is not defined. (no-undef)\n60:13 - \'TweenMax\' is not defined. (no-undef)\n60:74 - \'Expo\' is not defined. (no-undef)\n60:116 - \'Expo\' is not defined. (no-undef)\n78:13 - \'$\' is not defined. (no-undef)\n80:13 - \'$\' is not defined. (no-undef)\n81:13 - \'TweenMax\' is not defined. (no-undef)\n81:70 - \'Expo\' is not defined. (no-undef)\n81:111 - \'Expo\' is not defined. (no-undef)\n82:13 - \'$\' is not defined. (no-undef)\n83:13 - \'$\' is not defined. (no-undef)\n87:13 - \'TweenMax\' is not defined. (no-undef)\n87:69 - \'Expo\' is not defined. (no-undef)\n87:111 - \'Expo\' is not defined. (no-undef)\n88:13 - \'$\' is not defined. (no-undef)\n89:13 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n4:11 - \'params\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/zone-of-avoidance.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/zone-of-avoidance.js should pass ESLint\n\n16:11 - \'$\' is not defined. (no-undef)\n18:13 - \'$\' is not defined. (no-undef)\n20:11 - \'NProgress\' is not defined. (no-undef)\n24:9 - \'$\' is not defined. (no-undef)\n25:11 - Unexpected console statement. (no-console)\n27:13 - \'$\' is not defined. (no-undef)\n29:13 - \'$\' is not defined. (no-undef)\n34:3 - Irregular whitespace not allowed. (no-irregular-whitespace)\n39:15 - \'TweenMax\' is not defined. (no-undef)\n39:60 - \'Expo\' is not defined. (no-undef)\n39:89 - \'Expo\' is not defined. (no-undef)\n40:15 - \'TweenMax\' is not defined. (no-undef)\n42:3 - Irregular whitespace not allowed. (no-irregular-whitespace)\n43:1 - Irregular whitespace not allowed. (no-irregular-whitespace)\n47:11 - \'$\' is not defined. (no-undef)\n48:11 - \'$\' is not defined. (no-undef)\n50:13 - \'$\' is not defined. (no-undef)\n53:11 - \'NProgress\' is not defined. (no-undef)\n61:13 - \'TweenMax\' is not defined. (no-undef)\n62:13 - \'TweenMax\' is not defined. (no-undef)\n62:70 - \'Expo\' is not defined. (no-undef)\n62:112 - \'Expo\' is not defined. (no-undef)\n63:13 - \'TweenMax\' is not defined. (no-undef)\n63:74 - \'Expo\' is not defined. (no-undef)\n63:116 - \'Expo\' is not defined. (no-undef)\n80:13 - \'$\' is not defined. (no-undef)\n81:11 - \'$\' is not defined. (no-undef)\n83:13 - \'$\' is not defined. (no-undef)\n86:11 - \'$\' is not defined. (no-undef)\n88:13 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('serializers/show.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/show.js should pass ESLint\n\n');
  });
});
define('e-2mass/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
  }
});
define('e-2mass/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  var TEST_CONTAINER_KEY = 'authenticator:test'; /* global wait */

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }
});
define('e-2mass/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'e-2mass/tests/helpers/start-app', 'e-2mass/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var Promise = _ember.default.RSVP.Promise;
});
define('e-2mass/tests/helpers/resolver', ['exports', 'e-2mass/resolver', 'e-2mass/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('e-2mass/tests/helpers/start-app', ['exports', 'ember', 'e-2mass/app', 'e-2mass/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    return _ember.default.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('e-2mass/tests/integration/components/alt-footer-left-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('alt-footer-left', 'Integration | Component | alt footer left', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "i2D13yP2",
      "block": "{\"statements\":[[1,[26,[\"alt-footer-left\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "OYDVmOMg",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"alt-footer-left\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/integration/components/alt-footer-right-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('alt-footer-right', 'Integration | Component | alt footer right', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "jIhexRfn",
      "block": "{\"statements\":[[1,[26,[\"alt-footer-right\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "rCGsPRK0",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"alt-footer-right\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/integration/components/carousel-el-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('carousel-el', 'Integration | Component | carousel el', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "QMlMIWwT",
      "block": "{\"statements\":[[1,[26,[\"carousel-el\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "oa1Xce89",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"carousel-el\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/integration/components/footer-rotate-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('footer-rotate', 'Integration | Component | footer rotate', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "bFq0I+f1",
      "block": "{\"statements\":[[1,[26,[\"footer-rotate\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "7HEoRgwI",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"footer-rotate\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/integration/components/image-upload-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('image-upload', 'Integration | Component | image upload', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "5cAi6Rl1",
      "block": "{\"statements\":[[1,[26,[\"image-upload\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "TEA5QiMv",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"image-upload\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/integration/components/initial-loading-animation-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('initial-loading-animation', 'Integration | Component | initial loading animation', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "snCmYBEQ",
      "block": "{\"statements\":[[1,[26,[\"initial-loading-animation\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "RWXmK++h",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"initial-loading-animation\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/integration/components/loading-animation-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('loading-animation', 'Integration | Component | loading animation', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "hLYULujI",
      "block": "{\"statements\":[[1,[26,[\"loading-animation\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "tADaGQAD",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"loading-animation\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/integration/components/main-nav-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('main-nav', 'Integration | Component | main nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "cHZ/rni3",
      "block": "{\"statements\":[[1,[26,[\"main-nav\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "Cr5WkSew",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"main-nav\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/integration/components/photo-clicker-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('photo-clicker', 'Integration | Component | photo clicker', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "n1UnF3wf",
      "block": "{\"statements\":[[1,[26,[\"photo-clicker\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "ZcqjIiuF",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"photo-clicker\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/integration/components/random-landing-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('random-landing', 'Integration | Component | random landing', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "KvSgHNQ2",
      "block": "{\"statements\":[[1,[26,[\"random-landing\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "1nVQNq/K",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"random-landing\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/integration/components/show-listing-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('show-listing', 'Integration | Component | show listing', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "x1BdsblQ",
      "block": "{\"statements\":[[1,[26,[\"show-listing\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "zwKDbnGy",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"show-listing\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/integration/components/show-nav-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('show-nav', 'Integration | Component | show nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "BfcgkaSV",
      "block": "{\"statements\":[[1,[26,[\"show-nav\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "ZNi863AT",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"show-nav\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/integration/components/video-thing-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('video-thing', 'Integration | Component | video thing', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "dgKQFEWJ",
      "block": "{\"statements\":[[1,[26,[\"video-thing\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "h+jI96Me",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"video-thing\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('e-2mass/tests/test-helper', ['e-2mass/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('e-2mass/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/alt-footer-left-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/alt-footer-left-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/alt-footer-right-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/alt-footer-right-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/carousel-el-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/carousel-el-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/footer-rotate-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/footer-rotate-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/image-upload-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/image-upload-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/initial-loading-animation-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/initial-loading-animation-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/loading-animation-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/loading-animation-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/main-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/main-nav-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/photo-clicker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/photo-clicker-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/random-landing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/random-landing-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/show-listing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/show-listing-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/show-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/show-nav-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/video-thing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/video-thing-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-image-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-image-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-page-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-page-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-person-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-person-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-piece-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-piece-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/zone-of-avoidance-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/zone-of-avoidance-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/artist-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/artist-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/image-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/image-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/piece-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/piece-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/shows-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/shows-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/upcoming-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/upcoming-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-image-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-image-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-page-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-page-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-person-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-person-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-piece-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-piece-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/friendship-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/friendship-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/geminii-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/geminii-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/loading-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/loading-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/zone-of-avoidance-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/zone-of-avoidance-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/show-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/show-test.js should pass ESLint\n\n');
  });
});
define('e-2mass/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('e-2mass/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('e-2mass/tests/unit/controllers/create-image-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:create-image', 'Unit | Controller | create image', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('e-2mass/tests/unit/controllers/create-page-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:create-page', 'Unit | Controller | create page', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('e-2mass/tests/unit/controllers/create-person-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:create-person', 'Unit | Controller | create person', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('e-2mass/tests/unit/controllers/create-piece-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:create-piece', 'Unit | Controller | create piece', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('e-2mass/tests/unit/controllers/home-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:home', 'Unit | Controller | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('e-2mass/tests/unit/controllers/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('e-2mass/tests/unit/controllers/zone-of-avoidance-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:zone-of-avoidance', 'Unit | Controller | zone of avoidance', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('e-2mass/tests/unit/models/artist-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('artist', 'Unit | Model | artist', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('e-2mass/tests/unit/models/image-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('image', 'Unit | Model | image', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('e-2mass/tests/unit/models/piece-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('piece', 'Unit | Model | piece', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('e-2mass/tests/unit/models/shows-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('shows', 'Unit | Model | shows', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('e-2mass/tests/unit/models/upcoming-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('upcoming', 'Unit | Model | upcoming', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('e-2mass/tests/unit/routes/about-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/routes/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/routes/create-image-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:create-image', 'Unit | Route | create image', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/routes/create-page-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:create-page', 'Unit | Route | create page', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/routes/create-person-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:create-person', 'Unit | Route | create person', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/routes/create-piece-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:create-piece', 'Unit | Route | create piece', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/routes/friendship-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:friendship', 'Unit | Route | friendship', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/routes/geminii-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:geminii', 'Unit | Route | geminii', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/routes/home-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/routes/loading-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:loading', 'Unit | Route | loading', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/routes/zone-of-avoidance-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:zone-of-avoidance', 'Unit | Route | zone of avoidance', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('e-2mass/tests/unit/serializers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('e-2mass/tests/unit/serializers/show-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('show', 'Unit | Serializer | show', {
    // Specify the other units that are required for this test.
    needs: ['serializer:show']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
require('e-2mass/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
