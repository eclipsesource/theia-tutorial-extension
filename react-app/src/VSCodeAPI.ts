/********************************************************************************
 * Copyright (c) 2020-2021 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * https://www.eclipse.org/legal/epl-2.0, or the MIT License which is
 * available at https://opensource.org/licenses/MIT.
 *
 * SPDX-License-Identifier: EPL-2.0 OR MIT
 ********************************************************************************/
declare const acquireVsCodeApi: () => VSCodeApi;

interface VSCodeApi {
  getState: () => any;
  setState: (newState: any) => any;
  postMessage: (message: any) => void;
}

class VSCodeWrapper {
  private readonly vscodeApi: VSCodeApi = acquireVsCodeApi();

  public postMessage(message: any): void {
    this.vscodeApi.postMessage(message);
  }

  public onMessage(callback: (message: any) => void): () => void {
    window.addEventListener('message', callback);
    return () => window.removeEventListener('message', callback);
  }
}

export const VSCodeAPI: VSCodeWrapper = new VSCodeWrapper();
