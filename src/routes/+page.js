{
  /* <script>
  import { onMount } from 'svelte';
  import { source } from 'sveltekit-sse';

  onMount(() => {
    const searchParams = new URLSearchParams(location.search);

    searchParams.set('status', 'waiting');

    const queue = source(`/?${searchParams.toString()}`).select('message').json();

    return queue.subscribe((value) => console.log('aaaaaaaaaaa', value));
  });
</script> */
}

// src/routes/custom-event/+page.ts
import { source } from 'sveltekit-sse';

export const load = async ({ url, parent }) => {
  const searchParams = new URLSearchParams(url.search);

  searchParams.set('status', 'waiting');
  const queue = source(`/queue?${searchParams.toString()}`).select('message').json();

  queue.subscribe((value) => console.log('aaaaaaaaaaa', value)); // value is empty

  return {
    ...(await parent())
  };
};
