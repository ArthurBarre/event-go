exports.createPages = async ({ actions }) => {
	const { createPage } = actions;

	createPage({
		path: "/",
		component: require.resolve("./src/pages/SignIn/SignIn.jsx"),
	});

	createPage({
		path: "/forgot-password",
		component: require.resolve("./src/pages/PasswordReset/PasswordReset.jsx"),
	});

	createPage({
		path: "/register",
		component: require.resolve("./src/pages/Register/Register.jsx"),
	});
};
