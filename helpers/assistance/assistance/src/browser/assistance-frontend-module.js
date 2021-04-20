'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * Generated using theia-extension-generator
 */
const assistance_contribution_1 = require('./assistance-contribution');
const inversify_1 = require('inversify');
const frontend_application_1 = require('@theia/core/lib/browser/frontend-application');
exports.default = new inversify_1.ContainerModule((bind) => {
  // add your contribution bindings here
  bind(frontend_application_1.FrontendApplicationContribution).to(
    assistance_contribution_1.markingElements
  );
});
//# sourceMappingURL=assistance-frontend-module.js.map
