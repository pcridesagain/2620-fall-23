<script lang="ts">
	import './calendar.css';
	import { onMount } from 'svelte';

	export let label: string;
	export let backgroundColor: string;
	export let textColor: string;

	$: console.log(label, backgroundColor, textColor);
	console.log(label, backgroundColor, textColor);

	const currentDate = new Date();
	let year = currentDate.getFullYear();
	let month = currentDate.getMonth();
	let weeks: (string | number)[][] = [];
	$: console.log(weeks);
	const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

	function createWeeks() {
		const firstDay = new Date(year, month, 1).getDay();
		const daysInMonth = new Date(year, month + 1, 0).getDate();
		weeks = [];
		let date = 1;
		for (let index = 0; index < 6; index++) {
			let week: (string | number)[] = [];
			for (let i = 0; i < 7; i++) {
				if (index === 0 && i < firstDay) {
					week.push('');
				} else if (date > daysInMonth) {
					break;
				} else {
					week.push(date);
					date++;
				}
			}
			weeks.push(week);
		}
	}

	onMount(() => {
		createWeeks();
	});
</script>

<!-- class="max-w-sm w-full border bg-[{backgroundColor}] text-[{textColor}]" -->
<section class=".storybook-section">
	<h1>{label}</h1>
	<table>
		<thead>
			<tr>
				{#each weekDays as day}
					<th>{day}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each weeks as week}
				<tr>
					{#each week as day}
						<td>
							{day}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</section>
