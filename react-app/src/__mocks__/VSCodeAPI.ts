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
interface VSCodeApi {
  getState: () => any;
  setState: (newState: any) => any;
  postMessage: (message: any) => void;
}

// export const mockPostMessage = jest.fn();
// jest.mock('../VSCodeAPI', () => {
//   return jest.fn().mockImplementation(() => {
//     return { postMessage: mockPostMessage };
//   });
// });

class VSCodeWrapper {
  postMessage = jest.fn((message) => {
    return message;
  });

  onMessage = jest.fn();
}

export const VSCodeAPI: VSCodeWrapper = new VSCodeWrapper();
