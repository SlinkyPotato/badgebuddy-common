import { PinoLogger } from 'nestjs-pino';
import { Injectable } from '@nestjs/common';
import { NodeEnvs } from '../enums/node-envs.enum';

@Injectable()
export class CommonPinoLogger extends PinoLogger {
  constructor(appName: string) {
    console.log('creating logger...');

    const targets = [];
    targets.push({
      level: 'info', // all logs printed since info does not map
      target: 'pino/file',
      options: {
        destination: './logs/app.log',
        sync: false,
        mkdir: true,
      },
    });
    targets.push({
      level: 50,
      target: 'pino/file',
      options: {
        destination: './logs/error.log',
        sync: false,
        mkdir: true,
      },
    });
    if (
      process.env.LOGTAIL_TOKEN != null &&
      process.env.LOGTAIL_TOKEN !== '' &&
      process.env.LOGTAIL_TOKEN !== undefined
    ) {
      targets.push({
        target: '@logtail/pino',
        options: {
          sourceToken: process.env.LOGTAIL_TOKEN,
        },
      });
    }
    if (process.env.NODE_ENV !== NodeEnvs.PRODUCTION) {
      // https://github.com/pinojs/pino-pretty
      // skip printing to console for production
      targets.push({
        target: 'pino-pretty',
        options: {
          colorize: true,
          colorizeObjects: true,
          hideObject: true, // but not error object
        },
      });
    }
    super({
      pinoHttp: {
        name: appName,
        level: 'info',
        transport: {
          targets: targets,
        },
      },
    });
  }
}
