import { SendNotification } from './../../app/useCases/SendNotification';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from '@app/useCases/CancelNotification';
import { CountRecipientNotifications } from '@app/useCases/CountRecipientNotifications';
import { GetRecipientNotifications } from '@app/useCases/GetRecipientNotifications';
import { ReadNotification } from '@app/useCases/ReadNotification';
import { UnreadNotification } from '@app/useCases/UnreadNotification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
