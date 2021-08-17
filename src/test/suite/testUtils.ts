import { spy } from "ts-mockito";
import ReactPanel from "../../ReactPanel";

export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const spyPanel = spy(ReactPanel.currentPanel);
