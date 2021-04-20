import { SingleTextInputDialog } from '@theia/core/lib/browser/dialogs';
import { ILogger } from '@theia/core/lib/common';
import { BinaryBuffer } from '@theia/core/lib/common/buffer';
import { Command } from '@theia/core/lib/common/command';
import URI from '@theia/core/lib/common/uri';
import { SingleUriCommandHandler } from '@theia/core/lib/common/uri-command-handler';
import { FileService } from '@theia/filesystem/lib/browser/file-service';
import { FileSystemUtils } from '@theia/filesystem/lib/common';
import { inject, injectable } from 'inversify';
import { OpenerService } from '@theia/core/lib/browser';

export const NewTreeExampleFileCommand: Command = {
  id: 'my-extension-tree.newExampleFile',
  label: 'New Tree Example File',
};

@injectable()
export class NewTreeExampleFileCommandHandler
  implements SingleUriCommandHandler {
  constructor(
    @inject(OpenerService)
    protected readonly openerService: OpenerService,
    @inject(FileService)
    protected readonly fileService: FileService,
    @inject(ILogger)
    protected readonly logger: ILogger
  ) {}

  async execute(uri: URI) {
    const stat = await this.fileService.resolve(uri);
    if (!stat) {
      this.logger.error(
        `[NewTreeExampleFileCommandHandler] Could not create file stat for uri`,
        uri
      );
      return;
    }

    const dir = stat.isDirectory
      ? stat
      : await this.fileService.resolve(uri.parent);
    if (!dir) {
      this.logger.error(
        `[NewTreeExampleFileCommandHandler] Could not create file stat for uri`,
        uri.parent
      );
      return;
    }

    const dirUri = dir.resource;
    const preliminaryFileUri = FileSystemUtils.generateUniqueResourceURI(
      dirUri,
      dir,
      'tutorial',
      '.json'
    );
    const dialog = new SingleTextInputDialog({
      title: 'New Example File',
      initialValue: preliminaryFileUri.path.base,
    });

    const fileName = await dialog.open();
    if (fileName) {
      const fileUri = dirUri.resolve(fileName);
      const contentBuffer = BinaryBuffer.fromString(
        JSON.stringify(defaultData, null, 2)
      );
      this.fileService
        .createFile(fileUri, contentBuffer)
        .then((_) => this.openerService.getOpener(fileUri))
        .then((openHandler) => openHandler.open(fileUri));
    }
  }
}

const defaultData = {
  typeId: '#tutorial',
  title: 'Tutorial 0',
  description: 'test description',
  tutorialFolder: 'theia-extension',
};
