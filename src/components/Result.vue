<template>
	<div>
    <p>Counter is: {{ singleCounter }}</p>
    <p>String counter says {{ stringCounter }}</p>
	</div>    
</template>

<script>
		import { mapGetters } from 'vuex';
    export default {
        computed: {
        	...mapGetters([
        	'singleCounter',
        	'stringCounter'
      		])
        }
    }
</script>