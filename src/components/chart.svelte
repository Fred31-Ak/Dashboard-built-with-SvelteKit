<script>
    import { Pie } from 'svelte-chartjs';
    import 'chart.js/auto';
    import { data } from './data.js';

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
        Plugin,
    } from 'chart.js';

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<Pie {data} options={{responsive: true}} />