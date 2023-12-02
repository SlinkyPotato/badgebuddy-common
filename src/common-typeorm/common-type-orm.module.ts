import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as entities from './entities';

@Module({})
export class CommonTypeOrmModule {
  static forRootAsync(): DynamicModule {
    return {
      module: CommonTypeOrmModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          name: 'default',
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
            type: 'mysql',
            host: configService.get('MARIADB_HOST'),
            port: configService.get<number>('MARIADB_PORT'),
            username: configService.get('MARIADB_USERNAME'),
            password: configService.get('MARIADB_PASSWORD'),
            database: configService.get('MARIADB_DATABASE'),
            entities: entities,
            synchronize: Boolean(configService.get<string>('MARIADB_SYNC')),
            autoLoadEntities: false,
          }),
        }),
      ],
      exports: [TypeOrmModule],
    };
  }
}
