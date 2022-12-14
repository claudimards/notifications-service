import { SendNotification } from './../../app/useCases/SendNotification';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
