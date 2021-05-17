exports.createPages = async ({ actions }) => {
	const { createPage } = actions;

	createPage({
		path: "/login",
		component: require.resolve("./src/pages/Login/Login.jsx"),
	});

	createPage({
		path: "/",
		component: require.resolve("./src/pages/SignIn/SignIn.jsx"),
	});
};
