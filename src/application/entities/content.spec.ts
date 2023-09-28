import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Voce recebeu um solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('OK')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('OK'.repeat(241))).toThrow();
  });
});
