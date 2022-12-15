import { Module } from '@nestjs/common';

import { PrismaNotificationsRepository } from './prisma/repositories/PrismaNotificationsRepository';
import { PrismaService } from './prisma/prisma.service';
import { NotificationsRepository } from '@app/repositories/NotificationsRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
