<style src="./ChangePassword.css" scoped></style>
<template>
	<div class="change-password">
		<b-row>
		    	<b-col class="change-password-form">
		    		<div class="form-header">
		  					Change Password
		  			</div>
		  			<div class="password-change-success-icon" v-if="passwordChangeSuccessful">
		  				<font-awesome-icon icon="lock" />
		  			</div>
		  			<div class="password-change-success-text" v-if="passwordChangeSuccessful">
		  				Password Changed
		  			</div>
		  			<b-form @submit="onSubmit" v-if="!passwordChangeSuccessful">	
				        <b-form-group id="lbl-oldpassword"
				      				  class="lbl-text"
				      				  :class="{ 'form-group--error': $v.oldpassword.$error }"
				                      label="Old Password"
				                      label-for="txt-oldpassword">
					        <b-form-input id="txt-oldpassword"
					                      type="password"
					                      class="two-m-txt-input"
					                      v-model.trim="$v.oldpassword.$model"
					                      @blur.native="$v.oldpassword.$touch">
					        </b-form-input>
				        </b-form-group>
				        <div v-if="$v.oldpassword.$dirty">
				        	<div class="form-error" v-if="!$v.oldpassword.required">Old password is required</div>
		  					<div class="form-error" v-if="!$v.oldpassword.minLength">
		  						Old Password must have at least {{$v.oldpassword.$params.minLength.min}} letters.
		  					</div>
		  				</div>
		  				<b-form-group id="lbl-newpassword"
				      				  class="lbl-text"
				      				  :class="{ 'form-group--error': $v.newpassword.$error }"
				                      label="New Password"
				                      label-for="txt-newpassword">
					        <b-form-input id="txt-newpassword"
					                      type="password"
					                      class="two-m-txt-input"
					                      v-model.trim="$v.newpassword.$model"
					                      @blur.native="$v.newpassword.$touch">
					        </b-form-input>
				        </b-form-group>
				        <div v-if="$v.newpassword.$dirty">
				        	<div class="form-error" v-if="!$v.newpassword.required">New password is required</div>
		  					<div class="form-error" v-if="!$v.newpassword.minLength">
		  						New Password must have at least {{$v.newpassword.$params.minLength.min}} letters.
		  					</div>
		  				</div>

		  				<b-form-group id="lbl-newpasswordconfirm"
				      				  class="lbl-text"
				      				  :class="{ 'form-group--error': $v.newpasswordconfirm.$error }"
				                      label="New Password Again"
				                      label-for="txt-newpasswordconfirm">
					        <b-form-input id="txt-newpasswordconfirm"
					                      type="password"
					                      class="two-m-txt-input"
					                      v-model.trim="$v.newpasswordconfirm.$model"
					                      @blur.native="$v.newpasswordconfirm.$touch">
					        </b-form-input>
				        </b-form-group>
				        <div v-if="$v.newpasswordconfirm.$dirty">
				        	<div class="form-error" v-if="!$v.newpasswordconfirm.required">Password confrimation is required</div>
		  					<div class="form-error" v-if="!$v.newpasswordconfirm.sameAsPassword">
		  						Password confrimation must match the new password.
		  					</div>
		  				</div>
				       
				        <b-button class="normal-btn" type="submit"  :disabled='changePasswordInProgress'>
				        	{{ changePasswordText }}
				        	<half-circle-spinner
				        	  v-if="changePasswordInProgress"
				        	  class="btn-activity-indicator"
							  :animation-duration="1000"
							  :size="20"
							  :color="'#ffffff'"
							/>
				        </b-button>
				    </b-form>
				   
				</b-col>
		  	</b-row>
		
	</div>
</template>
<script src="./ChangePassword.js"></script>

