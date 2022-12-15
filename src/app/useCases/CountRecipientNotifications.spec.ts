import { CountRecipientNotifications } from './CountRecipientNotifications';
import { InMemoryNotificationsRepository } from '@test/repositories/InMemoryNotificationsRepository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-01' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-01' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-02' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-01',
    });

    expect(count).toBe(2);
  });
});
