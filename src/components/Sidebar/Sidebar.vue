<style src="./Sidebar.css" scoped></style>
<template>
	<aside class="sidebar">
		<div class="sidebar-link" 
		     v-bind:class="{ active: sidebarLink.isActive, 'd-none': sidebarLink.name === 'My Class' && !userIsTutor }" 
		     v-for="(sidebarLink, index) in sidebarLinks"
		     @click="makeLinkActive(index)">
				<font-awesome-icon :icon="sidebarLink.icon" />
				<span class="sidebar-link-text">
					{{ sidebarLink.name }}
				</span>
		</div>
	</aside>
</template>
<script src="./Sidebar.js"></script>

