<style src="./Chats.css" scoped></style>
<template>
	<div class="content">
		<b-row>
			<b-col md="3">
			    <div class="chatrooms-wrapper">
			    	<div class="chatroom"  
			    	     v-for="(chatroom, chatroomIndex) in chatrooms"
			    	     @click="loadChats(chatroomIndex)"
			    	     v-bind:class="{'active': chatroom.active == true, '': chatroom.active == false }">
			    	    <div class="chatroom-header">
			    	    	<user-avatar
				  				class="chatroom-member-avatar"
				  				avatar-style="Transparent"
				  				:accessoriesType="chatroom.avatar.accessoriesOptionValue.code"
				  				:topType="chatroom.avatar.hairOptionValue.code"
				  				:facialHairType="chatroom.avatar.facialHairOptionValue.code"
				  				:facialHairColor="chatroom.avatar.facialHairColorOptionValue.code"
				  				:clotheType="chatroom.avatar.clothesOptionValue.code"
				  				:skinColor="chatroom.avatar.skinColorOptionValue.code"
				  				mouth-type="Twinkle"/>
				  				<span class="chatroom-name"> {{ chatroom.chatroomName }}</span>
				  				<span class="chatroom-time-updated">{{chatroom.lastChatDatetimeFormatted}}</span>
			    	    </div>	
			    	    <div class="chatroom-last-message">
			    	    	{{ chatroom.lastChatrooMessage}}
			    	    </div>
			        </div>
			    </div>
			</b-col>
			<b-col md="9">
				<div class="chats-wrapper">
					<div class="chat"  
			    	     @click="likeUnlikeChat"
			    	     v-for="(chat, chatIndex) in chats"
			    	     v-bind:class="{'user-chat': chat.senderId === userId }">
			    	    <div class="chat-main-header" v-if="chat.mainChatroom">
			    	    	<user-avatar
				  				class="chat-sender-avatar"
				  				avatar-style="Transparent"
				  				:accessoriesType="chat.senderAvatar.accessoriesOptionValue.code"
				  				:topType="chat.senderAvatar.hairOptionValue.code"
				  				:facialHairType="chat.senderAvatar.facialHairOptionValue.code"
				  				:facialHairColor="chat.senderAvatar.facialHairColorOptionValue.code"
				  				:clotheType="chat.senderAvatar.clothesOptionValue.code"
				  				:skinColor="chat.senderAvatar.skinColorOptionValue.code"
				  				mouth-type="Twinkle"/>

				  				<span class="chat-sender-name"> {{ chat.senderName }}</span>
				  				<span class="chat-time-updated">{{ chat.createdOnDatetime }}</span>
				  				<div class="chat-header-divider"></div>
			    	    </div>	
			    	    <div class="chat-main-message" v-if="chat.mainChatroom">
			    	    	{{ chat.message}}
			    	    </div>
			    	    <div class="chat-private-message" v-if="!chat.mainChatroom">
			    	    	{{ chat.message}}
			    	        <div class="chat-time-updated">{{ chat.createdOnDatetime }}</div>
			    	    </div>
			        </div>
				</div>
				<div class="chats-sender">
					    <font-awesome-icon icon="paperclip" id="paperclip" />
					    <font-awesome-icon icon="microphone"  id="microphone" />
					    <b-form-textarea 
		                       id="txt-new-chat"
		                       v-model="newChat"
		                       placeholder="New Chat"
		                       :no-resize="true"
		                      >
		                </b-form-textarea>
		              
				</div>
			</b-col>
		</b-row>
	</div>
	
</template>
<script src="./Chats.js"></script>