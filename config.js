const defaultAuthConfig = {
	cacheLocation: 'localstorage',
};

const config = {
	auth: {
		...defaultAuthConfig,
		domain: 'auth-rocks-scary-tiger.cic-demo-platform.auth0app.com',
		clientId: 'n83XnMipj2uE9b5s08uOrenprdZsmvif',
		// UNCOMMENT the following line to test the private API
		   audience: ['api://authrocks/'],
	},
	app: {
		enableSilentAuth: false,
		port: 3000,
	},
	server: {
		permissions: ['authRocks'],
	},
};

export default config;
