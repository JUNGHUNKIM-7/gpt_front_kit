<script lang="ts">
	import { enhance } from '$app/forms';
	export let endPoint: string;
</script>

<form method="POST" action={endPoint} use:enhance>
	<label for="q">
		<input type="text" name="q" id="q" />
	</label>
	<button>submit</button>
</form>
