<style src="./MemberProfile.css" scoped></style>
<template>
	<div class="profile">
		<div class="back-link">
	  		<b-link  @click="goBackToCommunity">
	  			<font-awesome-icon icon="arrow-left" />
	  		 	Back to Community &nbsp; &nbsp;
	  		</b-link>
		</div>

		<b-row id="profile-content">
			<b-col md="3" cols="12">
				<div class="user-profile">
					<div class="username">{{ member.fullname }}</div>
					<div v-if="member.gradeAvailable" class="user-grade">{{ member.grade }}</div>
					<user-avatar
			  				class="profile-avatar"
			  				avatar-style="Transparent"
			  				:accessoriesType="member.avatar.accessoriesOptionValue.code"
			  				:topType="member.avatar.hairOptionValue.code"
			  				:facialHairType="member.avatar.facialHairOptionValue.code"
			  				:facialHairColor="member.avatar.facialHairColorOptionValue.code"
			  				:clotheType="member.avatar.clothesOptionValue.code"
			  				:skinColor="member.avatar.skinColorOptionValue.code"
			  				mouth-type="Twinkle"/>
			  		<div class="profile-button">
			  			<a href="">Send Message</a>	
			  		</div>
				</div>
			</b-col>
			<b-col md="3" cols="12">
				<div class="user-bio">
					<div class="bio-header">About</div>
					<div class="bio" 
					     v-bind:class="{'d-none':editUsersBio == true , 'd-block':editUsersBio == false}">
					    {{ member.bio }}
				    </div>
		            <b-form-textarea 
		               v-bind:class="{'d-none':editUsersBio == false , 'd-block':editUsersBio == true }"
	                   id="textarea1"
	                   v-model="member.bio"
	                   :no-resize="true"
	                   @input="setUserBio"
	                   :rows="4"
	                   :cols="35">
		            </b-form-textarea>
				</div>
			</b-col>
			<b-col md="3" cols="12">
				<div class="user-hashtags">
					<div class="tags-header">Hashtags</div>
					<div class="tags-body">
						<div class="hashtags" v-for="(tag, tagIndex) in member.tags"> 
							<span @click="deleteTag(tagIndex)" v-bind:class="{'d-none':editUsersTags == false , 'd-inline-block':editUsersTags == true }">
								<font-awesome-icon icon="times-circle" class="delete-tag"/>
								&nbsp;&nbsp;&nbsp;&nbsp;
							</span>
							
							{{ tag }} 
						</div>
					</div>
				</div>
			</b-col>
			<b-col md="5" cols="12">
				<div class="user-languages">
					<div class="languages-header">Languages</div>
					<b-row>
				          <b-col cols="12" md="5">
				            <div class="native-languages-lbl">
				            	Native:
				            </div>
				            <div class="native-languages" v-for="(language, index) in member.languages.native"> {{ language.name }}</div>
				           
				          </b-col>
				          <b-col cols="12" md="6">
				            <div class="learning-languages-lbl">
				            	Learning:
				            </div>
				             <div class="learning-languages" v-for="(language, index) in member.languages.learning"> {{ language.name }}</div>
				          </b-col>
        			</b-row>
				</div>
			</b-col>
		</b-row>
	</div>
</template>
<script src="./MemberProfile.js"></script>