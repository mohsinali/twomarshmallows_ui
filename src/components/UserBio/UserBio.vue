<style src="./UserBio.css" scoped></style>
<template>
  <div>
  	<div class="previous-step-link" v-if="customizationStep > 1 && customizationStep <= 4">
  		<b-link @click="previousPage">
  			<font-awesome-icon icon="arrow-left" />
  		 	Previous Step &nbsp; &nbsp;
  		</b-link>
  	</div>
    <div class="account-customization">
    	<div class="customization-header">
        <div class="customization-header-text">
          Account Customization
        </div>
        <div class="customization-step-text">
          Step {{customizationStep}} / 4
        </div>
        <div class="customization-step-msg">
          This can be changed later
        </div>
      </div>
      <div class="customization-content">
        <div class="customization-content-header">
            Tell us a little about yourself...
        </div>
        <b-row>
          <b-col>
            <div class="max-characters">
              Max 200 characters
            </div>
            <div class="bio-entry">
                <b-form-textarea 
                       id="textarea1"
                       v-model="userBioValue"
                       placeholder="Enter something"
                       :no-resize="true"
                       @input="setUserBio"
                       :rows="7"
                       :cols="70">
                </b-form-textarea>
            </div>

          </b-col>
        </b-row>
    	</div>
    	<div class="next-step-link">
    		<b-link @click="completeRegistration">
    			Complete Registration
    		</b-link>
    	</div>
    </div>
  </div>
</template>
<script src="./UserBio.js"></script>
