<style src="./Login.css" scoped></style>
<template>
  <div class="two-m-login">
    <div>
      <b-row>
        <b-col>
          <b-alert
            :show="dismissCountDown"
            variant="danger"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
          >
            <span class="form-error-msg">{{formErrorMsg}}</span>
            <b-progress variant="danger" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
          </b-alert>
        </b-col>
      </b-row>
      <b-row class="login-logo">
        <b-col>
          <b-img :src="logo" alt="logo" width="300" height="134" />
        </b-col>
      </b-row>
      <b-row class="login-form">
        <b-col>
          <b-form @submit="onSubmit">
            <b-form-group
              id="lbl-user-id"
              class="lbl-text"
              :class="{ 'form-group--error': $v.userId.$error }"
              label="User Id"
              label-for="txt-user-id"
            >
              <b-form-input
                id="txt-user-id"
                type="text"
                class="two-m-txt-input"
                v-model="$v.userId.$model"
                @blur.native="$v.userId.$touch"
              ></b-form-input>
            </b-form-group>
            <div v-if="$v.userId.$dirty">
              <div class="form-error" v-if="!$v.userId.required">User Id is required</div>
            </div>
            <b-form-group
              id="lbl-user-password"
              class="lbl-text"
              label="Password"
              label-for="txt-user-password"
            >
              <b-form-input
                id="txt-user-password"
                type="password"
                class="two-m-txt-input"
                v-model="$v.password.$model"
                @blur.native="$v.password.$touch"
              ></b-form-input>
            </b-form-group>
            <div v-if="$v.password.$dirty">
              <div class="form-error" v-if="!$v.password.required">Password is required</div>
            </div>
            <b-button class="normal-btn" type="submit" :disabled="loginInProgress">
              {{ loginBtnText }}
              <half-circle-spinner
                v-if="loginInProgress"
                class="btn-activity-indicator"
                :animation-duration="1000"
                :size="20"
                :color="'#ffffff'"
              />
            </b-button>
          </b-form>
          <div id="register">
            <span class="lbl-text">New teacher/tutor?</span>
            &nbsp;
            <b-link id="register-link" class="lbl-text" href="/register">Register here</b-link>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script src="./Login.js"></script>
