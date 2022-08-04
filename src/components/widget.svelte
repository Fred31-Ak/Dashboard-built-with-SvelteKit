<script>
    import Calendar from "./calendar.svelte";
    import Chart from "./chart.svelte";
    import {Icon, CheckCircle, DotsCircleHorizontal, XCircle, ShieldExclamation, ClipboardList  } from "svelte-hero-icons";
</script>
<div class="flex mt-16 grid-rows-1 grid-flow-col gap-4">
    <div class="info-card md:w-2/5 shadow p-6 bg-white">
        <div class="font-bold text-lg text-gray-700">Completed Orders
        </div>
        <Icon class="text-green-600" src="{CheckCircle}" size="24" solid/>
        <p class="description py-2">Orders confirmed and delivered successfully</p>
        <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    </div>
    <div class="info-card md:w-2/5 shadow p-6 bg-white">
        <div class="font-bold text-lg text-gray-700">Pending Confirmation
                  </div>
                  <Icon class="text-yellow-600" src="{DotsCircleHorizontal}" size="24" solid/>

        <p class="description py-2">Awaiting confirmation</p>
        <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    </div>
    <div class="info-card md:w-2/5 shadow p-6 bg-white">
        <div class="font-bold text-lg text-gray-700">Rejected
        </div>
        <Icon class="text-red-600" src="{XCircle}" size="24" solid/>

        <p class="description py-2">Orders rejected</p>
        <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    </div>
</div>
<div class="flex mt-8 grid-rows-1 grid-flow-col gap-4">
    <div class="info-card md:w-3/5 shadow p-6 bg-white">
    <div class="font-bold text-lg text-gray-700">Reports
    </div>
    <Icon class="text-red-600" src="{ShieldExclamation}" size="24" solid/>
    <p class="description py-2">Some information</p>
    <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>

    </div>
    <div class="info-card md:w-2/5 shadow p-6 bg-white">
        <div class="font-bold text-lg text-gray-700">Tasks
        </div>
        <Icon class="text-purple-600" src="{ClipboardList}" size="24" solid/>

        <p class="description py-2">Some information</p>
        <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    
        </div>
</div>
<div class="flex mt-8 grid-rows-1 grid-flow-col gap-4">
    <div class="h-96 info-card w-2/3 shadow p-6 bg-white">
    <div class="font-bold text-lg text-gray-700">Sales Analytics</div>
    <p class="description py-2">Some information</p>
    <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    <Chart />
    </div>
        <!-- <div class="font-bold text-lg text-gray-700">Featured Info 06</div> -->
        <Calendar />

      
</div>