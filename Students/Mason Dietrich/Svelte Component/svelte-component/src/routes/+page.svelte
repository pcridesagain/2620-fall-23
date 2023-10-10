<script>
    import Tabs from "../components/Tabs.svelte";

    let menuItems = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
    let activeItem = 'Menu 1'

    const tabChange = (e) => {
        activeItem = e.detail
        }
</script>


<div class="m-10">
    <h1 class="text-2xl">Welcome to my Svelte Component</h1>
    <h2>Mason Dietrich DGM 2620</h2>
</div>

<div>
    <Tabs {activeItem} {menuItems} on:tabChange={tabChange}/>
                    
</div>
