<style src="./Home.css" scoped></style>
<template>
	<div class="home">
		<b-row class="home-row">
			<b-col md="2" class="sidebar-column">
				<Sidebar/>
			</b-col>
			<b-col md="10" class="content-column">
				<router-view></router-view>
			</b-col>
		</b-row>
	</div>
</template>
<script src="./Home.js"></script>

