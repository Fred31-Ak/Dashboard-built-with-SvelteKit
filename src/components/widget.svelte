<script>
    import Calendar from "./calendar.svelte";
    import Chart from "./chart.svelte";
</script>
<div class="flex mt-16 grid-rows-1 grid-flow-col gap-4">
    <div class="info-card w-2/5 shadow p-8 bg-white">
        <div class="font-bold text-lg text-gray-700">Featured Info 01</div>
        <p class="description py-4">Some information</p>
        <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    </div>
    <div class="info-card w-2/5 shadow p-8 bg-white">
        <div class="font-bold text-lg text-gray-700">Featured Info 02</div>
        <p class="description py-4">Some information</p>
        <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    </div>
    <div class="info-card w-2/5 shadow p-8 bg-white">
        <div class="font-bold text-lg text-gray-700">Featured Info 03</div>
        <p class="description py-4">Some information</p>
        <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    </div>
</div>
<div class="flex mt-8 grid-rows-1 grid-flow-col gap-4">
    <div class="info-card w-3/5 shadow p-8 bg-white">
    <div class="font-bold text-lg text-gray-700">Featured Info 04</div>
    <p class="description py-4">Some information</p>
    <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>

    </div>
    <div class="info-card w-2/5 shadow p-8 bg-white">
        <div class="font-bold text-lg text-gray-700">Featured Info 05</div>
        <p class="description py-4">Some information</p>
        <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    
        </div>
</div>
<div class="flex mt-8 grid-rows-1 grid-flow-col gap-4">
    <div class="h-96 info-card w-2/3 shadow p-8 bg-white">
    <div class="font-bold text-lg text-gray-700">Featured Info 06</div>
    <p class="description py-4">Some information</p>
    <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    <Chart />
    </div>
        <!-- <div class="font-bold text-lg text-gray-700">Featured Info 06</div> -->
        <Calendar />

      
</div>