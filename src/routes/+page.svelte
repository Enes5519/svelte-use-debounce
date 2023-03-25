<script lang="ts">
	import debounce from '$lib/debounce';

	let duration = 1000;
	let debouncedValue: string = '';
	let value: string = '';
</script>

<input type="range" bind:value={duration} max={2000} step={100} />
{duration}ms

<br />
<input
	type="text"
	use:debounce={{
		ms: duration,
		callback: (val) => {
			debouncedValue = val;
		}
	}}
	bind:value
/>

<p>Debounced: {debouncedValue}</p>
<p>Normal: {value}</p>
