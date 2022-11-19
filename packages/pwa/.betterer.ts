import { typescript } from '@betterer/typescript';

export default {
  'Typescript Type Checks': typescript('./tsconfig.json', {
    strict: true
  })
};