// generated by Neptune Namespaces v4.x.x
// file: tests/Art.StandardLib/namespace.js

module.exports = require('../namespace').addNamespace(
  'Art.StandardLib',
  (class StandardLib extends Neptune.PackageNamespace {})
  ._configureNamespace(require('../../../package.json'))
);
require('./Core/namespace');
require('./Inspect/namespace');