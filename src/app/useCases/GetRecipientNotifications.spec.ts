import { InMemoryNotificationsRepository } from '@test/repositories/InMemoryNotificationsRepository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotifications } from './GetRecipientNotifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-01',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-01' }),
        expect.objectContaining({ recipientId: 'recipient-01' }),
      ]),
    );
  });
});
