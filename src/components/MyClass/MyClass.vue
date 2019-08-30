<style src="./MyClass.css" scoped></style>
<template>
	<div class="my-community">
		<b-row v-if="numOfCommunityMembers <= 0" class="loading-error">
     	 	<b-alert variant="danger" show>No community members found yet, please add them by clicking on the "Add new student" button</b-alert>
		</b-row>
		<b-row v-else>
			<b-col cols="12" md="4"  v-for="(member, memberIndex) in communityMembers">
					
				<div class="community-member">
					<b-row>
						<user-avatar
			  				class="community-member-avatar"
			  				avatar-style="Transparent"
			  				:accessoriesType="member.avatar.accessoriesOptionValue.code"
			  				:topType="member.avatar.hairOptionValue.code"
			  				:facialHairType="member.avatar.facialHairOptionValue.code"
			  				:facialHairColor="member.avatar.facialHairColorOptionValue.code"
			  				:clotheType="member.avatar.clothesOptionValue.code"
			  				:skinColor="member.avatar.skinColorOptionValue.code"
			  				mouth-type="Twinkle"/>
		  				<span class="community-member-name">{{ member.fullname }} </span>
					</b-row>
					<div class="member-info" 
					     @mouseenter="showLinks(memberIndex)"
					     v-bind:class="{'d-none':member.showMemberLinks == true, 'd-block':member.showMemberLinks == false }">
						<b-row class="native-languages">
							<b-col class="text-desc">
					    		Speaks:
							</b-col>
							<b-col class="language-col">
								<div class="native-language" v-for="nativeLanguage in member.languages.native"> 
					    			{{ nativeLanguage.name }} <span class="text-desc">(native)</span>
					    		</div>
							</b-col>
							<b-col class="rating-col">
								<div v-for="nativeLanguage in member.languages.native"> 
					    			<span class="rating" v-for="(rating, ratingIndex) in language_rating_array"> 
						    			<b-img 
						    			    v-bind:class="{'rating-icon-full':nativeLanguage.rating > ratingIndex,
						    			                   'rating-icon-opaque':nativeLanguage.rating <= ratingIndex }"
						    			    :src="language_rating_active" 
						    			    fluid 
						    			    alt="." />
						    		</span>
					    		</div>
							</b-col>
						</b-row>
						<b-row class="learning-languages">
					    	<b-col class="text-desc">
					    		Learns:
							</b-col>
							<b-col>
								<div class="learning-language" v-for="(learningLanguage, index) in member.languages.learning"> 
					    			{{ learningLanguage.name }}
					    		</div>
							</b-col>
							<b-col class="rating-col">
								<div v-for="learningLanguage in member.languages.learning"> 
					    			<span class="rating" v-for="(rating, index) in language_rating_array"> 
						    			<b-img 
						    			    v-bind:class="{'rating-icon-full':learningLanguage.rating > index,
						    			                   'rating-icon-opaque':learningLanguage.rating <= index }"
						    			    :src="language_rating_active" 
						    			    fluid 
						    			    alt="." />

						    		</span>
					    		</div>
							</b-col>
						</b-row>
						<b-row class="tags">
							<b-col>
								<span class="member-tags" v-for="(tag, index) in member.tags"> {{ tag }} &nbsp;&nbsp;&nbsp; </span>
							</b-col>
						</b-row>
					</div>
					<div class="member-links"
					     @mouseleave="hideLinks(memberIndex)"
					     v-bind:class="{'d-block':member.showMemberLinks == true, 'd-none':member.showMemberLinks == false }">
						<b-row class="view-profile">
							<router-link :to="{ name: 'member-profile', params: { member }}">
								View Profile
							</router-link>
						</b-row>
						<b-row class="member-actions">
							<b-col cols="5">
								<router-link to="chats">Message</router-link>
							</b-col>
							<b-col cols="7">
								<b-link id="suspend" @click="suspendUser(memberIndex)">Suspend</b-link>
							</b-col>
						</b-row>
					</div>
				</div>
				
			</b-col>
			
		</b-row>
		<div class="add-new-student">
			Add New Student
			<router-link to="add-student">
				<font-awesome-icon icon="plus" />
			</router-link>
	    </div>	
	</div>
</template>
<script src="./MyClass.js"></script>

