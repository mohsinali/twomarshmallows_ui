<style src="./AddNewStudent.css" scoped></style>
<template>
	<div class="add-new-student">
		<div class="back-link">
	  		<b-link  @click="goBackToClass">
	  			<font-awesome-icon icon="arrow-left" />
	  		 	Back to Class &nbsp; &nbsp;
	  		</b-link>
		</div>
		<b-row>
	    	<b-col class="add-new-student-form">
	    		<div class="form-header">
	  				Add New Student
	  			</div>
	  			<b-form @submit="onSubmit">	
	  				<b-form-group id="lbl-name"
			      				  class="lbl-text"
			      				  :class="{ 'form-group--error': $v.name.$error }"
			                      label="Name"
			                      label-for="txt-name">
				        <b-form-input id="txt-name"
				                      type="text"
				                      class="two-m-txt-input"
				                      v-model.trim="$v.name.$model"
				                      @blur.native="$v.name.$touch">
				        </b-form-input>
			        </b-form-group>
			        <div v-if="$v.name.$dirty">
			        	<div class="form-error" v-if="!$v.name.required">Name is required</div>
		  			</div>

		  			<b-form-group id="lbl-grade"
			      				  class="lbl-text"
			      				  :class="{ 'form-group--error': $v.grade.$error }"
			                      label="Grade"
			                      label-for="txt-grade">
				        <b-form-input id="txt-grade"
				                      type="text"
				                      class="two-m-txt-input"
				                      v-model.trim="$v.grade.$model"
				                      @blur.native="$v.grade.$touch">
				        </b-form-input>
			        </b-form-group>
			        <div v-if="$v.grade.$dirty">
			        	<div class="form-error" v-if="!$v.grade.required">Grade is required</div>
		  			</div>

		  			<b-form-group id="lbl-school"
			      				  class="lbl-text"
			      				  :class="{ 'form-group--error': $v.school.$error }"
			                      label="School"
			                      label-for="txt-school">
				        <b-form-input id="txt-school"
				                      type="text"
				                      class="two-m-txt-input"
				                      v-model.trim="$v.school.$model"
				                      @blur.native="$v.school.$touch">
				        </b-form-input>
			        </b-form-group>
			        <div v-if="$v.school.$dirty">
			        	<div class="form-error" v-if="!$v.school.required">School is required</div>
		  			</div>

		  			<b-form-group id="lbl-age"
			      				  class="lbl-text"
			      				  :class="{ 'form-group--error': $v.age.$error }"
			                      label="Age"
			                      label-for="txt-age">
				        <b-form-input id="txt-age"
				                      type="text"
				                      class="two-m-txt-input"
				                      v-model.trim="$v.age.$model"
				                      @blur.native="$v.age.$touch">
				        </b-form-input>
			        </b-form-group>
			        <div v-if="$v.age.$dirty">
			        	<div class="form-error" v-if="!$v.age.required">Age is required</div>
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

			        <b-button class="normal-btn" type="submit"  :disabled='newStudentRegistrationInProgress'>
				        	{{ submitText }}
				        	<half-circle-spinner
				        	  v-if="newStudentRegistrationInProgress"
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
<script src="./AddNewStudent.js"></script>

