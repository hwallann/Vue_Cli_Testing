<template>
	<nav>
		<ul>
			<!-- <li><a href="/add"></li> -->
			<li><router-link to="/" exact>Blog</router-link></li>
			<li><router-link to="/add" exact>Add a New Blog</router-link></li>
		</ul>
	</nav>
</template>

<script type="text/javascript">
	
export default {}

</script>

<style type="text/css" scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active {
	background: #eee;
	color: #444;
}
</style>