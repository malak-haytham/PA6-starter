import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	deprecated: {
		looseRouteMatching: true,
	},
};

export default nextConfig;
