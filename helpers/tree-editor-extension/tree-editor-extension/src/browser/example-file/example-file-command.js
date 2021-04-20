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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.NewTreeExampleFileCommandHandler = exports.NewTreeExampleFileCommand = void 0;
const dialogs_1 = require('@theia/core/lib/browser/dialogs');
const common_1 = require('@theia/core/lib/common');
const buffer_1 = require('@theia/core/lib/common/buffer');
const file_service_1 = require('@theia/filesystem/lib/browser/file-service');
const common_2 = require('@theia/filesystem/lib/common');
const inversify_1 = require('inversify');
const browser_1 = require('@theia/core/lib/browser');
exports.NewTreeExampleFileCommand = {
  id: 'my-extension-tree.newExampleFile',
  label: 'New Tree Example File',
};
let NewTreeExampleFileCommandHandler = class NewTreeExampleFileCommandHandler {
  constructor(openerService, fileService, logger) {
    this.openerService = openerService;
    this.fileService = fileService;
    this.logger = logger;
  }
  execute(uri) {
    return __awaiter(this, void 0, void 0, function* () {
      const stat = yield this.fileService.resolve(uri);
      if (!stat) {
        this.logger.error(
          `[NewTreeExampleFileCommandHandler] Could not create file stat for uri`,
          uri
        );
        return;
      }
      const dir = stat.isDirectory
        ? stat
        : yield this.fileService.resolve(uri.parent);
      if (!dir) {
        this.logger.error(
          `[NewTreeExampleFileCommandHandler] Could not create file stat for uri`,
          uri.parent
        );
        return;
      }
      const dirUri = dir.resource;
      const preliminaryFileUri = common_2.FileSystemUtils.generateUniqueResourceURI(
        dirUri,
        dir,
        'tutorial',
        '.json'
      );
      const dialog = new dialogs_1.SingleTextInputDialog({
        title: 'New Example File',
        initialValue: preliminaryFileUri.path.base,
      });
      const fileName = yield dialog.open();
      if (fileName) {
        const fileUri = dirUri.resolve(fileName);
        const contentBuffer = buffer_1.BinaryBuffer.fromString(
          JSON.stringify(defaultData, null, 2)
        );
        this.fileService
          .createFile(fileUri, contentBuffer)
          .then((_) => this.openerService.getOpener(fileUri))
          .then((openHandler) => openHandler.open(fileUri));
      }
    });
  }
};
NewTreeExampleFileCommandHandler = __decorate(
  [
    inversify_1.injectable(),
    __param(0, inversify_1.inject(browser_1.OpenerService)),
    __param(1, inversify_1.inject(file_service_1.FileService)),
    __param(2, inversify_1.inject(common_1.ILogger)),
  ],
  NewTreeExampleFileCommandHandler
);
exports.NewTreeExampleFileCommandHandler = NewTreeExampleFileCommandHandler;
const defaultData = {
  typeId: '#tutorial',
  title: 'Tutorial 0',
  description: 'test description',
  tutorialFolder: 'theia-extension',
};
//# sourceMappingURL=example-file-command.js.map
