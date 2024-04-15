<script>
  import { onMount } from 'svelte';
  import { source } from 'sveltekit-sse';

  onMount(() => {
    const searchParams = new URLSearchParams(location.search);

    searchParams.set('status', 'waiting');

    const queue = source(`/?${searchParams.toString()}`).select('message').json();

    return queue.subscribe((value) => console.log('aaaaaaaaaaa', value));
  });
</script>
