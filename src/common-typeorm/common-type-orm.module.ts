import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { EventEntity } from './entities/event.entity';
import { EventDiscordDetailsEntity } from './entities/event-discord-details.entity';
import { EventDiscordParticipantEntity } from './entities/event-discord-participant.entity';
import { DiscordGuildEntity } from './entities/discord-guild.entity';
import { DiscordUserEntity } from './entities/discord-user.entity';
import { PoapLinkEntity } from './entities/poap-link.entity.entity';
import { PoapLinkDiscordDetailsEntity } from './entities/poap-link-discord-details.entity';
@Module({})
export class CommonTypeOrmModule {
  static forRootAsync(): DynamicModule {
    return {
      module: CommonTypeOrmModule,
      imports: [
        TypeOrmModule.forRootAsync({
          name: process.env.MARIADB_DATABASE,
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
      exports: [],
    };
  }
}
