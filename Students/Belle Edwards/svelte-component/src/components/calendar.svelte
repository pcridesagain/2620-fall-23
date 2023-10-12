<script>
	/**
	 * @type {any}
	 */
	export let theme;
	console.log(theme);

	let selectedCell = '';
</script>

<div id="calendar">
	<table class={theme}>
		<thead>
			<th>S</th>
			<th>M</th>
			<th>T</th>
			<th>W</th>
			<th>TH</th>
			<th>F</th>
			<th>S</th>
		</thead>
		<tbody>
			<tr>
				<td class="disabled" />
				<td class="disabled" />
				<td class="disabled" />
				<td class="disabled" />
				<td class="disabled" />
				<td>1</td>
				<td>2</td>
			</tr>
			<tr>
				<td>3</td>
				<td>4</td>
				<td>5</td>
				<td>6</td>
				<td>7</td>
				<td>8</td>
				<td>9</td>
			</tr>
			<tr>
				<td>10</td>
				<td>11</td>
				<td>12</td>
				<td>13</td>
				<td>14</td>
				<td>15</td>
				<td>16</td>
			</tr>
			<tr>
				<td>17</td>
				<td>18</td>
				<td>19</td>
				<td>20</td>
				<td>21</td>
				<td>22</td>
				<td>23</td>
			</tr>
			<tr>
				<td>24</td>
				<td>25</td>
				<td>26</td>
				<td>27</td>
				<td>28</td>
				<td>29</td>
				<td>30</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	table.light {
		background-color: white;
		border: solid;
		border-color: black;
		width: 375px;
		height: 280px;
	}

	table.dark {
		background-color: black;
		color: white;
		border: solid;
		border-color: black;
		width: 375px;
		height: 280px;
	}
	table {
		padding: 40px;
		font-family: 'inter';
	}
	th {
		color: #6c7072;
		text-align: center;
		font-size: 12px;
		font-style: normal;
		font-weight: 400px;
		line-height: 12px;
	}
	td {
		text-align: center;
		padding: 12px;
		justify-content: center;
		align-items: center;
		flex: 1 0 0;
		align-self: stretch;
	}
	td:hover {
		background-color: #5538ee;
		color: white;
		border-radius: 50%;
	}
	.disabled {
		pointer-events: none;
	}
</style>
