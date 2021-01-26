(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "../node_modules/@theia/core/lib/electron-browser/token/electron-token-frontend-module.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-browser/token/electron-token-frontend-module.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var electron = __webpack_require__(/*! electron */ "electron");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var electron_token_1 = __webpack_require__(/*! ../../electron-common/electron-token */ "../node_modules/@theia/core/lib/electron-common/electron-token.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(electron_token_1.ElectronSecurityToken).toConstantValue(electron.remote.getGlobal(electron_token_1.ElectronSecurityToken));
});


/***/ }),

/***/ "../node_modules/@theia/core/lib/electron-common/electron-token.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-common/electron-token.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronSecurityToken = void 0;
/**
 * This token is unique the the current running instance. It is used by the backend
 * to make sure it is an electron browser window that is connecting to its services.
 *
 * The identifier is a string, which makes it usable as a key for cookies or similar.
 */
exports.ElectronSecurityToken = 'x-theia-electron-token';
;


/***/ })

}]);
//# sourceMappingURL=32.bundle.js.map