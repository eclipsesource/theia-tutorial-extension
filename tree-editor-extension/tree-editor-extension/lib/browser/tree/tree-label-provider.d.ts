import { LabelProviderContribution } from '@theia/core/lib/browser';
export declare class TreeLabelProvider implements LabelProviderContribution {
    canHandle(element: object): number;
    getIcon(element: object): string | undefined;
    getName(element: object): string | undefined;
    private getTypeName;
}
//# sourceMappingURL=tree-label-provider.d.ts.map