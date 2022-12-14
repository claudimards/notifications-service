import { PrismaNotificationsRepository } from './prisma/repositories/PrismaNotificationsRepository';
import { NotificationsRepository } from 'src/app/repositories/NotificationsRepository';
import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';

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
