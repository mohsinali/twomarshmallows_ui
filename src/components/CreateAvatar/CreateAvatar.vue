<style src="./CreateAvatar.css" scoped></style>
<template>
  <div>

    <div class="previous-step-link" v-if="modifyAvatar">
      <b-link @click="backToProfile">
        <font-awesome-icon icon="arrow-left" />
         Back to profile
      </b-link>
    </div>
    <div class="account-customization">
      <div class="customization-header">
        <span v-if="modifyAvatar">
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
        <span v-if="modifyAvatar">
          <div class="customization-content-header">
            Modify Avatar
          </div>
        </span> 
        <span v-else>
          <div class="customization-content-header">
            Create your own Avatar
          </div>
        </span>
        
        <b-row class="avatar-container">
          <user-avatar
            id="user-avatar"
            avatar-style="Transparent"
            :accessoriesType="accessoriesOptionValue.code"
            :topType="hairOptionValue.code"
            :facialHairType="facialHairOptionValue.code"
            :facialHairColor="facialHairColorOptionValue.code"
            :clotheType="clothesOptionValue.code"
            :skinColor="skinColorOptionValue.code"
            mouth-type="Twinkle">
          </user-avatar>
        </b-row>
        <b-row class="avatar-selectors">
          <b-col cols="12" md="2">
            <label for="avatar-top" class="label-headers">
              Hat / Hair Style
            </label>
            <multiselect class="avatar-option-selector"
                   v-model="hairValue"
                   :options="hairOptions"
                   :placeholder="hairOptionValue.option"
                   :searchable="false"
                   :allow-empty="false"
                   select-label=""
                   deselect-label=""
                   @input="setAvatarHairOption"
                   label="option"
                   track-by="option"/>
          </b-col>
          <b-col cols="12" md="2">
            <label for="avatar-hair" class="label-headers">
              Accessories
            </label>
            <multiselect class="avatar-option-selector"
                   v-model="accessoriesValue"
                   :options="accessoriesOptions"
                   :placeholder="accessoriesOptionValue.option"
                   :searchable="false"
                   :allow-empty="false"
                   select-label=""
                   deselect-label=""
                   @input="setAvatarAccessoriesOption"
                   label="option"
                   track-by="option"/>
          </b-col>
          <b-col cols="12" md="2">
            <label for="avatar-hair" class="label-headers">
              Facial Hair
            </label>
            <multiselect class="avatar-option-selector"
                   v-model="facialHairValue"
                   :options="facialHairOptions"
                   :placeholder="facialHairOptionValue.option"
                   :searchable="false"
                   :allow-empty="false"
                   select-label=""
                   deselect-label=""
                   @input="setAvatarFacialHairOption"
                   label="option"
                   track-by="option"/>
          </b-col>
          <b-col cols="12" md="2">
            <label for="avatar-hair" class="label-headers">
              Facial Hair Color
            </label>
            <multiselect class="avatar-option-selector"
                   v-model="facialHairColorValue"
                   :options="facialHairColorOptions"
                   :placeholder="facialHairColorOptionValue.option"
                   :searchable="false"
                   :allow-empty="false"
                   select-label=""
                   deselect-label=""
                   @input="setAvatarFacialHairColorOption"
                   label="option"
                   track-by="option"/>
          </b-col>
            <b-col cols="12" md="2">
              <label for="avatar-clothes" class="label-headers">
                Clothes
              </label>
              <multiselect class="avatar-option-selector"
                     v-model="clothesValue"
                     :options="clothesOptions"
                     :placeholder="clothesOptionValue.option"
                     :searchable="false"
                     :allow-empty="false"
                     select-label=""
                     deselect-label=""
                     @input="setAvatarClothesOption"
                     label="option"
                     track-by="option"/>
            </b-col>
            <b-col cols="12" md="2">
              <label for="avatar-skin-color" class="label-headers">
                Skin
              </label>
              <multiselect class="avatar-option-selector"
                     v-model="skinColorValue"
                     :options="skinColorOptions"
                     :placeholder="skinColorOptionValue.option"
                     :searchable="false"
                     :allow-empty="false"
                     select-label=""
                     deselect-label=""
                     @input="setAvatarSkinColorOption"
                     label="option"
                     track-by="option"/>
            </b-col>
        </b-row>
      </div>
      <span v-if="modifyAvatar">
        <div class="next-step-link">
          <b-link @click="updateUserAvatar">
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
<script src="./CreateAvatar.js"></script>
