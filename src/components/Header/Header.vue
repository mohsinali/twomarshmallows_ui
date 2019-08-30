<style src="./Header.css" scoped></style>
<template>
	<b-navbar class="w-100" toggleable="md" type="dark" variant="info">
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<b-img class="logo-header" :src="logo_header" fluid width="280" height="53" alt="logo-header"/>
		<b-collapse is-nav id="nav_collapse">
		    <!-- Right aligned nav items -->
		    <b-navbar-nav class="ml-auto" v-if="userLoggedIn">
		    	<b-nav-item id="username">
		    		{{username}}
		    		<span id="user-not-verified" v-if="!userVerified">
		    			(not verified)
		    		</span>
		    		&nbsp; &nbsp; &nbsp; &nbsp;
		    		<user-avatar
		    		    v-if="userAvatarSetup"
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
		    		<font-awesome-icon v-else id="user-icon" icon="user" />

		    	</b-nav-item>

			    <b-nav-item-dropdown right>
			        <!-- Using button-content slot -->
			        <template slot="button-content">
			          	<span id="user-icon">
		    				<font-awesome-icon icon="caret-down" />
		    			</span>
			        </template>
			        <b-dropdown-item id="dropdown-link" href="#" @click="logout">Log Out</b-dropdown-item>
			    </b-nav-item-dropdown>
		    </b-navbar-nav>

		</b-collapse>
	</b-navbar>
</template>
<script src="./Header.js"></script>
