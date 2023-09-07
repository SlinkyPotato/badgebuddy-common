### common-pino-logger

#### pino
https://github.com/pinojs/pino/blob/master/docs/api.md

#### log levels
https://github.com/pinojs/pino/blob/master/docs/api.md#loggerlevels-object
Levels are mapped to values to determine the minimum threshold that a logging method
should be enabled at (see logger.level).

The logger.levels property holds the mappings between levels and values, and vice versa.
```
'10': 'trace',
'20': 'debug',
'30': 'info',
'40': 'warn',
'50': 'error',
'60': 'fatal'
```

All logger methods have args format the same as pino, but pino methods
`trace` and `info` are mapped to `verbose` and `log` to satisfy
`LoggerService` interface of NestJS.

Enable `trace` LOG_LEVEL to view `verbose` logs.

#### pino-pretty
https://github.com/pinojs/pino/blob/master/docs/pretty.md
