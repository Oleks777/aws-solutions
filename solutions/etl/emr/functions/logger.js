import * as pino from 'pino';

export const logger = pino({
    name: 'emr-service',
    level: 'debug',
    formatters: {
        level: (label) => {
          return { level: label };
        },
    }
});