<style src="./UserLanguages.css" scoped></style>
<template>
  <div>
  	 <span v-if="modifyLanguages">
      <div class="previous-step-link">
        <b-link @click="backToProfile">
          <font-awesome-icon icon="arrow-left" />
           Back to profile
        </b-link>
      </div>
    </span>
    <span v-else>
      <div class="previous-step-link" v-if="customizationStep > 1">
        <b-link @click="previousPage">
          <font-awesome-icon icon="arrow-left" />
          Previous Step &nbsp; &nbsp;
        </b-link>
      </div>
    </span>
    
    <div class="account-customization">
      <div class="customization-header">
        <span v-if="modifyLanguages">
          <div class="customization-header-text">
           Information Change
          </div>
        </span> 
        <span v-else>
          <div class="customization-header-text">
            Account Customization
          </div>
          <div class="customization-step-text">
            Step {{customizationStep}} / 4
          </div>
          <div class="customization-step-msg">
            This can be changed later
          </div>
        </span>
      </div>
      <div class="customization-content">
        <div class="customization-content-header">
            Your languages
        </div>
        <b-row>
          <b-col cols="12" md="6">
            <div class="native-languages">
              <label class="native-language-question">
                What are your native language(s)?
              </label>
              <multiselect 
                     class="native-language-selector"
                     v-model="nativeLanguagesValue"
                     :options="languageOptions"
                     placeholder="Select Language(s)"
                     :searchable="true"
                     select-label=""
                     deselect-label=""
                     :multiple="true"
                     @input="prepareNativeLanguages"
                     label="name"
                     track-by="name"/>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="learning-languages">
              <label class="learning-language-question">
                What language(s) are you learning?
              </label>
                <multiselect 
                   class="native-language-selector"
                   v-model="learningLanguagesValue"
                   :options="languageOptions"
                   placeholder="Select Language(s)"
                   :searchable="true"
                   select-label=""
                   deselect-label=""
                   :multiple="true"
                   @input="prepareLearningLanguages"
                   label="name"
                   track-by="name"/>
            </div>
          </b-col>
        </b-row>
    	</div>
    	<span v-if="modifyLanguages">
        <div class="next-step-link">
          <b-link @click="updateUserLanguages">
            &nbsp; &nbsp;&nbsp; &nbsp;Save &nbsp; &nbsp;&nbsp; &nbsp;
          </b-link>
        </div>
      </span> 
      <span v-else>
        <div class="next-step-link">
          <b-link  @click="nextPage">
            Next Step &nbsp; &nbsp;
            <font-awesome-icon icon="arrow-right" />
          </b-link>
        </div>
      </span>
    </div>
  </div>
</template>
<script src="./UserLanguages.js"></script>
