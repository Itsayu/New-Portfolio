const withPWA = require('next-pwa')({
	disable: process.env.NODE_ENV === 'development',
	dest: 'public',
	scope: '/',
	sw: 'service-worker.js', // Service worker file name
	register: true, // Register service worker
	maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // Allow up to 10 MB files to be cached
  });
  
  module.exports = withPWA({
	webpack: (config) => {
	  return config;
	},
  
	reactStrictMode: true,
	swcMinify: true, 
  
	env: {
	  dir: '/',
	},
  
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: '**.vercel.app',
		  pathname: '/api/**',
		},
		{
		  protocol: 'https',
		  hostname: '**.cloudinary.com',
		  pathname: '/**',
		},
		{
		  protocol: 'https',
		  hostname: '**.shields.io',
		  pathname: '/badge/**',
		},
		{
		  protocol: 'https',
		  hostname: '**.githubusercontent.com',
		  pathname: '/**',
		},
		{
		  protocol: 'https',
		  hostname: 'github.com',
		  pathname: '/**',
		},
		{
		  hostname: 'drive.google.com', // Added without protocol
		},
	  ],
	},
  
	experimental: {
	  forceSwcTransforms: true, // Enables SWC transforms
	},
  
	// Uncomment if you're planning to do a static export
	/*
	output: {
	  directory: 'out', // Target directory for static export
	},
	*/
  });
  