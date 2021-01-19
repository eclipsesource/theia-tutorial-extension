import { TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';
export declare namespace CoffeeModel {
    namespace Type {
        const BrewingUnit = "BrewingUnit";
        const ControlUnit = "ControlUnit";
        const Dimension = "Dimension";
        const DripTray = "DripTray";
        const Display = "Display";
        const Machine = "Machine";
        const MultiComponent = "MultiComponent";
        const Processor = "Processor";
        const RAM = "RAM";
        const WaterTank = "WaterTank";
        function name(type: string): string;
    }
    /** Maps types to their creatable children */
    const childrenMapping: Map<string, TreeEditor.ChildrenDescriptor[]>;
}
//# sourceMappingURL=tree-model.d.ts.map