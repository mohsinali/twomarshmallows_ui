<style src="./Register.css" scoped></style>
<template>
	<div class="two-m-register">
		<div>
			<b-alert
			    :show="dismissCountDown"
		        variant="danger"
		        @dismissed="dismissCountDown=0"
		        @dismiss-count-down="countDownChanged">
		      	<span class="form-error-msg">
		      		{{formErrorMsg}}
		        </span>
			    <b-progress variant="danger" :max="dismissSecs" :value="dismissCountDown" height="4px"/>
		    </b-alert>
			<b-row class="register-logo">
	    		<b-col>
			  		<b-img :src="logo"  alt="logo" width="300" height="134" />
			  	</b-col>
			</b-row>
			<b-row>
				<b-col>
			  		<div class="register-header">
			  			Registration
			  	    </div>
			  	</b-col>
			</b-row>
		    <b-row>
		    	<b-col class="register-form">
		  			<b-form @submit="onSubmit">
				        <b-form-group id="lbl-fullname"
				      				  class="lbl-text"
				      				  :class="{ 'form-group--error': $v.fullname.$error }"
				                      label="Full Name"
				                      label-for="txt-fullname">
					        <b-form-input id="txt-fullname"
					                      type="text"
					                      class="two-m-txt-input"
					                      v-model.trim="$v.fullname.$model"
					                      @blur.native="$v.fullname.$touch">
					        </b-form-input>
				        </b-form-group>
				        <div v-if="$v.fullname.$dirty">
				        	<div class="form-error" v-if="!$v.fullname.required">Full Name is required</div>
		  					<div class="form-error" v-if="!$v.fullname.minLength">
		  						Full Name must have at least {{$v.fullname.$params.minLength.min}} letters.
		  					</div>
		  				</div>
				        <b-form-group id="lbl-organization"
				      				  class="lbl-text"
				      				  :class="{ 'form-group--error': $v.organization.$error }"
				                      label="School / Organization"
				                      label-for="txt-organization">
					        <b-form-input id="txt-organization"
					                      type="text"
					                      class="two-m-txt-input"
					                      v-model.trim="$v.organization.$model"
					                      @blur.native="$v.organization.$touch">
					        </b-form-input>
				        </b-form-group>
				        <div v-if="$v.organization.$dirty">
				        	<div class="form-error"v-if="!$v.organization.required">Organization is required</div>
				        </div>
				        <b-form-group  id="lbl-email"
				      				    class="lbl-text"
				      				    :class="{ 'form-group--error': $v.email.$error }"
				                        label="Email"
				                        label-for="txt-email">
					        <b-form-input id="txt-email"
					                      type="text"
					                      class="two-m-txt-input"
					                      v-model.trim="$v.email.$model"
					                      @blur.native="$v.email.$touch">
					        </b-form-input>
				        </b-form-group>
				        <div v-if="$v.email.$dirty">
				        	<div class="form-error" v-if="!$v.email.required">Email is required</div>
				        	<div class="form-error" v-if="!$v.email.email">Please enter a valid email address</div>
				        </div>
				        <b-form-group  id="lbl-phone"
				      				    class="lbl-text"
				      				    :class="{ 'form-group--error': $v.phone.$error }"
				                        label="Phone"
				                        label-for="txt-phone">
					        <vue-tel-input v-model="phone" @onInput="onInput" @onBlur="$v.phone.$touch"/>
				        </b-form-group>
				        <div v-if="$v.phone.$dirty">
				        	<div class="form-error" v-if="!$v.phone.required">Phone Number is required</div>
				        	<div class="form-error" v-if="!$v.phone.phoneMustBeValid">Please enter a valid phone number for {{ phoneCountry }}</div>
				        </div>
				        <b-button class="normal-btn" type="submit"  :disabled='regInProgress'>
				        	{{ regBtnText }}
				        	<half-circle-spinner
				        	  v-if="regInProgress"
				        	  class="btn-activity-indicator"
							  :animation-duration="1000"
							  :size="20"
							  :color="'#ffffff'"
							/>
				        </b-button>
				    </b-form>
				    <div id="register" v-if='!regInProgress'>
				    	<span class="lbl-text">If you have an account</span>
				    	&nbsp;
				    	 <b-link id="register-link" class="lbl-text" href="/login">Login</b-link>
				    </div>
				</b-col>
		  	</b-row>
		</div>
	</div>
</template>
<script src="./Register.js"></script>
