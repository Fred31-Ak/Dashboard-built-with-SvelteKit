<script>
    import { Icon, Home, ChartBar, ShieldExclamation, Adjustments, Cog } from "svelte-hero-icons";
</script>
<div class="h-screen sidebar w-48 bg-white fixed opacity-100 z-100 shadow-sm">
    <div class="sidebar-title text-center mx-auto text-lg my-5 text-gray-700 font-bold">Manager.</div>
<div class="justify-center mx-auto text-sm text-black my-12 p-2">
<ul class="list-none">
    <li class="text-justify cursor-pointer menu-item p-4">
      <div class="float-left pr-3 s-icon"><Icon src="{Home}" size="18" solid /></div>
      Home
    </li>
    <li class="text-justify cursor-pointer menu-item p-4">
        <div class="float-left pr-3 s-icon"><Icon src="{ChartBar}" size="18" solid/></div>
        Analytics
    </li>
    <li class="text-justify cursor-pointer p-4">
        <div class="float-left pr-3 s-icon"><Icon src="{ShieldExclamation}" size="18" solid/></div>
        Reports
    </li>
    <li class="text-justify cursor-pointer p-4">
        <div class="float-left pr-3 s-icon"><Icon src="{Adjustments}" size="18" solid/></div>
        Manage
    </li>
    <li class="text-justify cursor-pointer p-4">
        <div class="float-left pr-3 s-icon"><Icon src="{Cog}" size="18" solid/></div>
        Settings
    </li>
</ul>
</div>
</div>
