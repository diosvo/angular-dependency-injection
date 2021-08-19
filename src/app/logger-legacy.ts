import { Logger } from './logger';

export const LoggerLegacy: Logger = {
  prefix: 'legacy root',

  log(message: string): void {
    console.log(`${this.prefix} (legacy): ${message}`);
  }
};
