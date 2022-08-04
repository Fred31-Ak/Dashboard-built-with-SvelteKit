<script>
	// import { Datepicker } from 'svelte-calendar';
    import { InlineCalendar } from 'svelte-calendar';

    const theme = {
        calendar: {
            width: '400px',
			shadow: 'none',
            
            colors: {
            background: {
                highlight: '#2F97C1'
            }
        },

        font: {
      regular: "16px",
      large: "18px"
    },
        },

       
    }
</script>

<InlineCalendar {theme}/>