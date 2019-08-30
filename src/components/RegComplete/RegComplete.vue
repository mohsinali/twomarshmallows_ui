<style src="./RegComplete.css" scoped></style>
<template>
	<div class="reg-complete-content">
		<div id="thank-you">
			Thank you!
		</div>
		<div id="reg-complete-application-msg">
			Your application has been received.
		</div>
		<div id="reg-complete-thumbs-up">
			<font-awesome-icon icon="thumbs-up" />
		</div>
		<div id="reg-complete-credentials-msg">
			You will receive login credentials once a representative has contacted you and verified your identity.
		</div>
		<half-circle-spinner
		  :animation-duration="1000"
		  :size="60"
		  :color="'#F5BD91'"
		/>
	</div>
</template>
<script src="./RegComplete.js"></script>
