import { NotificationsRepository } from '@application/repositories/notification-repository';
import { Module } from '@nestjs/common';
import { PrismaNotificationsRepository } from './prisma/prisma-notifications-repository';
import { PrismaService } from './prisma/prisma.service';

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
