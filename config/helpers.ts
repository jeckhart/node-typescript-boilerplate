import * as path from 'path';

export const ROOT = path.resolve(__dirname, '..');

export function root(...args: any[]): string {
  return path.join(ROOT,...args);
}
