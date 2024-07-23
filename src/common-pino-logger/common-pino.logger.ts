import { PinoLogger } from 'nestjs-pino';
import { Injectable } from '@nestjs/common';
import { TransportTargetOptions } from 'pino';

@Injectable()
export class CommonPinoLogger extends PinoLogger {
  constructor(appName: string) {
    process.stdout.write('creating logger...');

    let targets: TransportTargetOptions[] = [
      {
        level: 'trace',
        target: 'pino/file',
        options: {
          destination: './logs/app.log',
          sync: false,
          mkdir: true,
        },
      },
      {
        level: 'error',
        target: 'pino/file',
        options: {
          destination: './logs/error.log',
          sync: false,
          mkdir: true,
        },
      },
    ];
    if (process.env.LOGTAIL_ACTIVE === 'true') {
      targets = [
        ...targets,
        {
          level: 'trace',
          target: '@logtail/pino',
          options: {
            sourceToken: process.env.LOGTAIL_TOKEN,
          },
        },
      ];
    }
    if (process.env.LOG_PRINT_CLI !== 'false') {
      // https://github.com/pinojs/pino-pretty
      // skip printing to console for production
      targets = [
        ...targets,
        {
          level: 'trace',
          target: 'pino-pretty',
          options: {
            colorize: true,
            colorizeObjects: true,
            singleLine: true,
          },
        },
      ];
    }
    console.log('done');
    super({
      pinoHttp: {
        name: appName,
        level: process.env.LOG_LEVEL,
        transport: {
          targets: targets,
        },
      },
    });
  }
}
