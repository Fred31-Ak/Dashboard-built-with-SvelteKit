<script>
    import "../css/app.css";
    import Nav from "../components/nav.svelte";
    import Sidebar from "../components/sidebar.svelte";
</script>
<div>
<Nav/>
<div>
    
    <Sidebar />
    
</div>
<slot />
</div>