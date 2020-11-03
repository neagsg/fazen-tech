import qs from 'qs';
import { Linking } from 'react-native';

export async function sendEmail(to, subject, body, options = {}) {
  const { cc, bcc } = options;

  let url = `mailto:${to}`;

  // console.log(body);

  const query = qs.stringify({
    subject: subject,
    body: body[2],
    cc: cc,
    bcc: bcc,
  });

  if (query.length) {
    url += `?${query}`;
  }
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error('Provided URL can not be handled');
  }

  return Linking.openURL(url);
}
