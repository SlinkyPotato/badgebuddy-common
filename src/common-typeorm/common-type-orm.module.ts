import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  DiscordGuildEntity,
  DiscordUserEntity,
  EventDiscordDetailsEntity,
  EventDiscordParticipantEntity,
  EventEntity,
  PoapLinkDiscordDetailsEntity,
  PoapLinkEntity
} from './entities';
@Module({})
export class CommonTypeOrmModule {
  static forRootAsync(): DynamicModule {
    return {
      module: CommonTypeOrmModule,
      imports: [
        TypeOrmModule.forRootAsync({
          name: process.env.MARIADB_DATABASE,
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
            type: 'mysql',
            host: configService.get('MARIADB_HOST'),
            port: configService.get<number>('MARIADB_PORT'),
            username: configService.get('MARIADB_USERNAME'),
            password: configService.get('MARIADB_PASSWORD'),
            database: configService.get('MARIADB_DATABASE'),
            entities: [
              EventEntity,
              EventDiscordDetailsEntity,
              EventDiscordParticipantEntity,
              DiscordGuildEntity,
              DiscordUserEntity,
              PoapLinkEntity,
              PoapLinkDiscordDetailsEntity,
            ],
            synchronize: configService.get<boolean>('MARIADB_SYNC'),
            autoLoadEntities: false,
          }),
        }),
      ],
      exports: [TypeOrmModule],
    };
  }
}
