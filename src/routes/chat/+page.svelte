<script lang="ts">
	import Form from '$lib/component/Form.svelte';
	import type { ActionData, PageServerData } from './$types';

	export let data: PageServerData;
	export let form: ActionData;
</script>

<div>
	{data.greeting}
</div>

{#if !form?.completed}
	<div>form not completed</div>
{:else}
	<div>form completed!</div>
{/if}

<Form endPoint="/chat" />

{#if form?.a}
	<div>
		{form.a}
	</div>
{/if}
