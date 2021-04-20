'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.markingElements = exports.AssistanceCommand = void 0;
/********************************************************************************
 *
 * Copyright (c) 2020 EclipseSource and others.
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
const inversify_1 = require('inversify');
const $ = require('jquery');
const file_service_1 = require('@theia/filesystem/lib/browser/file-service');
exports.AssistanceCommand = {
  id: 'Assistance.command',
  label: 'assistance',
};
let markingElements = class markingElements {
  constructor(fileService) {
    this.fileService = fileService;
    this.idList = [];
    this.currentHint = -1;
    this.findNewCurrent = () => {
      for (let i = 0; i < this.idList.length; i++) {
        let tmp = this.idList[i];
        if (
          $(this.asId(this.idList[i]) + ':visible').length ||
          $('div' + ':visible')
            .filter(function () {
              return $(this).children().length === 0 && $(this).text() === tmp;
            })
            .parent().length > 0
        ) {
          this.currentHint = i;
          this.currentLeftPosition();
          this.currentTopPosition();
        }
      }
    };
    this.asId = (id) => {
      return '#' + $.escapeSelector(id);
    };
    this.asContent = (content) => {
      return 'div:contains(' + content + ')';
    };
    this.markCurrent = () => {
      $('body').append(
        '<span id="pointer" style="color:yellow;" >&#8592;</span>'
      );
      $('#pointer').css({
        left: this.currentLeftPosition(),
        top: this.currentTopPosition(),
        position: 'absolute',
        'z-index': '1000',
      });
    };
    this.currentLeftPosition = () => {
      if ($(this.asId(this.idList[this.currentHint])).length) {
        this.leftPostion =
          $(this.asId(this.idList[this.currentHint]))[0].getBoundingClientRect()
            .right + $(window)['scrollLeft']();
      } else {
        let tmp = this.idList[this.currentHint];
        this.leftPostion =
          $('div' + ':visible')
            .filter(function () {
              return $(this).children().length === 0 && $(this).text() === tmp;
            })
            .parent()[0]
            .getBoundingClientRect().right + $(window)['scrollLeft']();
      }
      return this.leftPostion;
    };
    this.currentTopPosition = () => {
      if ($(this.asId(this.idList[this.currentHint])).length) {
        this.topPosition =
          $(this.asId(this.idList[this.currentHint]))[0].getBoundingClientRect()
            .top + $(window)['scrollTop']();
      } else {
        let tmp = this.idList[this.currentHint];
        this.topPosition =
          $('div' + ':visible')
            .filter(function () {
              return $(this).children().length === 0 && $(this).text() === tmp;
            })
            .offset().top + $(window)['scrollTop']();
      }
      return this.topPosition;
    };
    this.finishAssistance = () => {
      if (this.observer != undefined) {
        this.observer.disconnect();
        this.observer = null;
      }
      MutationObserver = window.MutationObserver;
      let observer = new MutationObserver(() => {
        let oldHint = this.currentHint;
        let oldTop = this.topPosition;
        let oldLeft = this.leftPostion;
        this.findNewCurrent();
        if (oldHint == this.currentHint) {
          if (oldTop != this.topPosition || oldLeft != this.leftPostion) {
            this.markCurrent();
          }
        } else {
          this.cleanUp();
          observer.disconnect();
        }
      });
      observer.observe(document, {
        subtree: true,
        childList: true,
      });
      setTimeout(() => {
        this.cleanUp();
      }, 5000);
    };
    this.cleanUp = () => {
      $('#pointer').remove();
      this.currentHint = -1;
      this.topPosition = -1;
      this.leftPostion = -1;
    };
    this.prepareNextStep = () => {
      if (this.observer != undefined) {
        this.observer.disconnect();
        this.observer = null;
      }
      MutationObserver = window.MutationObserver;
      this.observer = new MutationObserver(() => {
        this.observe();
      });
      this.observer.observe(document, {
        subtree: true,
        childList: true,
      });
    };
    this.observe = () => {
      let oldHint = this.currentHint;
      let oldTop = this.topPosition;
      let oldLeft = this.leftPostion;
      this.findNewCurrent();
      if (
        oldHint != this.currentHint ||
        oldTop != this.topPosition ||
        oldLeft != this.leftPostion
      ) {
        this.markCurrent();
        if (this.currentHint + 1 == this.idList.length) {
          this.finishAssistance();
        } else {
          this.prepareNextStep();
        }
      }
    };
  }
  initialize() {
    this.fileService.onDidFilesChange((event) => {
      let relevantURI;
      event.changes.forEach((change) => {
        if (change.resource.toString().endsWith('/.tutorial/assistance.json')) {
          relevantURI = change.resource;
        }
      });
      if (relevantURI != undefined) {
        this.fileService.read(relevantURI).then((fileText) => {
          this.idList = JSON.parse(fileText.value);
          this.observe();
        });
      }
    });
    /*
        theia version 1.4
        this.fileSystemWatcher.onFilesChanged(event => {
            let relevantURI: URI | undefined;
            event.forEach(e => {
                if (e.uri.toString().endsWith(".tutorial/assistance.json")) {
                    relevantURI = e.uri;
                }
            });
            if (relevantURI != undefined) {
                this.fileSystem.resolveContent(relevantURI.toString(), {encoding: "utf8"}).then((result) => {

                    this.idList = JSON.parse(result.content);

                    this.observe();
                });
            }
        });
        */
  }
};
markingElements = __decorate(
  [
    inversify_1.injectable(),
    __param(0, inversify_1.inject(file_service_1.FileService)),
  ],
  markingElements
);
exports.markingElements = markingElements;
//# sourceMappingURL=assistance-contribution.js.map
