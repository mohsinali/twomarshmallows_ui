<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  body {
    background-color:#ffffff;
    width: 100%;
  }
  body, html {
    margin: 0;
    height: 100%;
  }

  .form-control {
    font-size: 13px;
  }

  .form-control:focus {
   border-color: inherit;
   -webkit-box-shadow: none;
   box-shadow: none;
  }

  #app {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }

  .normal-btn {
    background-color: #F5BD91;
    width: 100%;
    height: 42px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    border: none;
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .normal-btn:hover,
  .normal-btn:active,
  .normal-btn:focus  {
    background-color: #E78E48 !important;
  }

  .toasted.bubble {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    background-color: #E78E48 !important;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 600;
  }

  .row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .lbl-text {
    font-size: 13px;
    text-shadow: 2px 2px 5px #eee;
  }

  .two-m-txt-input {
    border: 1px solid #F5BD91;
  }

  .two-m-txt-input:focus {
    outline: none !important;
    box-shadow: none !important;
    border: 2px solid #E78E48;
    border-radius: 5px;
  }

  .form-error-msg,
  .form-error {
    color: red;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .btn-activity-indicator {
    float: right;
  }

  /*
  *
  * START CUSTOMIZATION PAGES
  *
  */

  .account-customization {
    margin-top: 50px;
  }

  .next-step-link,
  .customization-header {
    margin: 0 auto;
    width: 400px;
  }
  .customization-header-text {
    margin-top: 3px;
    text-align: center;
    color: #5f5f5f;
  }

  .customization-step-text {
    margin-top: 10px;
    text-align: center;
    color: #f6be91;
    font-weight: bold;
  }

  .customization-step-msg {
    margin-top: 10px;
    text-align: center;
    font-size: 10px;
    color: #5f5f5f;
  }

  .customization-content {
    margin: 0 auto;
    width: 90%;
    margin-top: 40px;
    -webkit-box-shadow: 0px 0px 4px 1px rgba(246,190,145,0.32);
    -moz-box-shadow: 0px 0px 4px 1px rgba(246,190,145,0.32);
    box-shadow: 0px 0px 4px 1px rgba(246,190,145,0.32);
    background-color: #ffffff;
  }

  .customization-content-header {
    font-weight: bold;
    font-size: 13px;
    text-align: center;
    padding-top: 20px;
    color: #5f5f5f;
  }

  .label-headers {
    font-size: 12px;
    font-weight: 500;
    margin-left: 5px;
    margin-top: 15px;
  }
  /* the links */
  .next-step-link {
    text-align: center;
    padding-top: 50px;
  }

  .next-step-link a {
    color: #ffffff;
    background-color: #f6be91;
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 20px;
  }

  .next-step-link a:hover {
    background-color: #E78E48;
  }

  .previous-step-link {
    top: 120px;
    left: 80px;
    position: absolute;
  }

  .previous-step-link a {
    color: #f6be91;
    background-color: #ffffff;
    border: solid 1px #f6be91;
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
  }

  .previous-step-link a:hover {
     color: #E78E48;
     border: solid 1px #E78E48;
  }
  /*
  *
  * END OF CUSTOMIZATION PAGES
  *
  */

  /*
  *
  * THE MULTI-SELECTOR
  *
  */

  .multiselect__option,
  .multiselect__single {
   font-size: 13px;
   color: #4e4e4e;
  }

  .multiselect__option--selected.multiselect__option--highlight {
    background: rgba(246, 190, 145, 0.05);
    font-size: 13px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4e4e4e;
  }

  .multiselect__option--highlight {
    background: rgba(246, 190, 145, 0.05);
  }

  .multiselect__select:before {
    color: #f6be91;
    border-color: #f6be91 transparent transparent;
  }

  .multiselect__tag-icon:after {
    color: #ffffff;
  }
  .multiselect__tag-icon:hover {
    background-color: #e78e48;
  }

  .multiselect__tags {
    border: 1px solid #f6be91;
    border-radius: 5px;
  }

  .multiselect__tag {
    background-color: #f6be91;
    color: #ffffff;
    font-weight: bold;
  }

  /*
  *
  *
  * END OF THE MULTI-SELECTOR
  *
  */

   /*
  *
  * LOADING ERROR CSS
  *
  */
.loading-error {
  min-height: 100%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;

  align-items: center;
  justify-content: center;
}

  /*
  *
  *
  * END OF THE LOADING ERROR CSS
  *
  */


/*
  *
  * MEDIA QUERIES
  *
  */
@media (max-width: 767px) {
 
}

  /*
  *
  * END OF THE MEDIA QUERIES
  *
  */


</style>
