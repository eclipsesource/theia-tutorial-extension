"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewTreeExampleFileCommandHandler = exports.NewTreeExampleFileCommand = void 0;
var dialogs_1 = require("@theia/core/lib/browser/dialogs");
var common_1 = require("@theia/core/lib/common");
var buffer_1 = require("@theia/core/lib/common/buffer");
var file_service_1 = require("@theia/filesystem/lib/browser/file-service");
var common_2 = require("@theia/filesystem/lib/common");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
exports.NewTreeExampleFileCommand = {
    id: 'my-extension-tree.newExampleFile',
    label: 'New Tree Example File'
};
var NewTreeExampleFileCommandHandler = /** @class */ (function () {
    function NewTreeExampleFileCommandHandler(openerService, fileService, logger) {
        this.openerService = openerService;
        this.fileService = fileService;
        this.logger = logger;
    }
    NewTreeExampleFileCommandHandler.prototype.execute = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var stat, dir, _a, dirUri, preliminaryFileUri, dialog, fileName, fileUri_1, contentBuffer;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fileService.resolve(uri)];
                    case 1:
                        stat = _b.sent();
                        if (!stat) {
                            this.logger.error("[NewTreeExampleFileCommandHandler] Could not create file stat for uri", uri);
                            return [2 /*return*/];
                        }
                        if (!stat.isDirectory) return [3 /*break*/, 2];
                        _a = stat;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.fileService.resolve(uri.parent)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        dir = _a;
                        if (!dir) {
                            this.logger.error("[NewTreeExampleFileCommandHandler] Could not create file stat for uri", uri.parent);
                            return [2 /*return*/];
                        }
                        dirUri = dir.resource;
                        preliminaryFileUri = common_2.FileSystemUtils.generateUniqueResourceURI(dirUri, dir, 'tree-example', '.tree');
                        dialog = new dialogs_1.SingleTextInputDialog({
                            title: 'New Example File',
                            initialValue: preliminaryFileUri.path.base
                        });
                        return [4 /*yield*/, dialog.open()];
                    case 5:
                        fileName = _b.sent();
                        if (fileName) {
                            fileUri_1 = dirUri.resolve(fileName);
                            contentBuffer = buffer_1.BinaryBuffer.fromString(JSON.stringify(defaultData, null, 2));
                            this.fileService.createFile(fileUri_1, contentBuffer)
                                .then(function (_) { return _this.openerService.getOpener(fileUri_1); })
                                .then(function (openHandler) { return openHandler.open(fileUri_1); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NewTreeExampleFileCommandHandler = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.OpenerService)),
        __param(1, inversify_1.inject(file_service_1.FileService)),
        __param(2, inversify_1.inject(common_1.ILogger)),
        __metadata("design:paramtypes", [Object, file_service_1.FileService, Object])
    ], NewTreeExampleFileCommandHandler);
    return NewTreeExampleFileCommandHandler;
}());
exports.NewTreeExampleFileCommandHandler = NewTreeExampleFileCommandHandler;
var defaultData = {
    "typeId": "#tutorial",
    "title": "Tutorial 0",
    "description": "test description",
    "tutorialFolder": "theia-extension",
};
//# sourceMappingURL=example-file-command.js.map