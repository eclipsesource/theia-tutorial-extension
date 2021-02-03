import { rankWith, scopeEndsWith } from '@jsonforms/core';

export default rankWith(
    31234123, //increase rank as needed
    scopeEndsWith('openFile')
);