<script>
    import Chart from "./chart.svelte";
    import {Icon, CheckCircle, DotsCircleHorizontal, XCircle, ShieldExclamation, ClipboardList, TrendingUp  } from "svelte-hero-icons";
</script>
<div class="flex mt-16 grid-rows-1 gap-4">
    <div class="info-card md:w-2/5 shadow p-6 bg-white">
        <Icon class="text-green-600 float-right" src="{CheckCircle}" size="24" solid/>
        <div class="font-bold text-lg text-gray-700">Completed Orders
        </div>
        <p class="description py-2">Orders confirmed and delivered successfully</p>
        <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    </div>
    <div class="info-card md:w-2/5 shadow p-6 bg-white">
        <Icon class="text-yellow-600 float-right" src="{DotsCircleHorizontal}" size="24" solid/>
        <div class="font-bold text-lg text-gray-700">Pending Confirmation
                  </div>
        <p class="description py-2">Awaiting confirmation</p>
        <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    </div>
    <div class="info-card md:w-2/5 shadow p-6 bg-white">
        <Icon class="text-red-600 float-right" src="{XCircle}" size="24" solid/>
        <div class="font-bold text-lg text-gray-700">Rejected
        </div>
        <p class="description py-2">Orders rejected</p>
        <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    </div>
</div>
<div class="flex mt-8 grid-rows-1 gap-4">
    <div class="info-card md:w-3/5 shadow p-6 bg-white">
        <Icon class="text-red-600 float-right" src="{ShieldExclamation}" size="24" solid/>
    <div class="font-bold text-lg text-gray-700">Reports
    </div>
    <p class="description py-2">Some information</p>
    <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>

    </div>
    <div class="info-card md:w-2/5 shadow p-6 bg-white">
        <Icon class="text-purple-600 float-right" src="{ClipboardList}" size="24" solid/>
        <div class="font-bold text-lg text-gray-700">Tasks
        </div>
        <p class="description py-2">Some information</p>
        <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    
        </div>
</div>
<div class="mt-8 md:w-full">
    <div class=" info-card shadow p-6 bg-white">
        <Icon class="text-sky-600 float-right" src="{TrendingUp}" size="24" solid/>
    <div class="font-bold text-lg text-gray-700">Sales Analytics</div>
    <p class="description py-2">Some information</p>
    <p class="sub py-2 text-gray-400 text-sm font-bold">Sub</p>
    <Chart />
    </div>
       
      
</div>