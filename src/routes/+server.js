// src/routes/custom-event/+server.js
import { events } from 'sveltekit-sse';

/**
 *
 * @param {number} milliseconds
 * @returns
 */
function delay(milliseconds) {
  return new Promise(function run(resolve) {
    setTimeout(resolve, milliseconds);
  });
}

export function POST({ request, url }) {
  return events({
    timeout: 1000 * 60 * 60,
    request,
    async start({ emit }) {
      console.log('now listening'); // never fires

      const status = url.searchParams.get('status'); //  was intending to do something with status

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { error } = emit('message', JSON.stringify({ message: 'hello world', status }));
        if (error) {
          console.error(error);
          break;
        }
        await delay(1000);
      }
    }
  });
}
