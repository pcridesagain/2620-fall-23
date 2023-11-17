<script>
    import SegmentedBars from "../components/SegmentedBars.svelte";

</script>


<section class="m-4">
    <p>Passing in props:</p>
    <SegmentedBars segments={["segment1", "segment2"]}/>
    <p>Using default:</p>
    <SegmentedBars/>
</section>
