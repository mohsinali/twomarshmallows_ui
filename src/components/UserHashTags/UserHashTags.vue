<style src="./UserHashTags.css" scoped></style>
<template>
  <div>
    <span v-if="modifyHashTags">
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
        <span v-if="modifyHashTags">
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
            Pick some hashtags
        </div>
        <div class="tags-header">
          <span id="emphasis">Two</span> tags for now
        </div>
        <b-row>
          <div class="select-tags">
            <b-link v-for="(tag, index) in tags" :key="tag.id">
              <span class="unselected-tag" @click="selectUnselectTag(index)"  v-bind:class="[tag.selected ? 'selected-tag': 'unselected-tag']">
                {{ tag.value }}
              </span>
            </b-link>
          </div>
        </b-row>
        <b-row>
          <b-progress height="4px" :value="tagProgress" :max="max"></b-progress>
        </b-row>
        <b-row>
          <b-input-group class="add-own-hashtag">
            <b-form-input placeholder="Add own hashtag" v-model="ownTag"></b-form-input>
            <b-input-group-append>
              <b-btn @click="addOwnTag">
                <font-awesome-icon icon="plus"/> Add
              </b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-row>
    	</div>
    	<span v-if="modifyHashTags">
        <div class="next-step-link">
          <b-link @click="updateUserHashTags">
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
<script src="./UserHashTags.js"></script>
