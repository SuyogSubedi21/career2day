import Pocketbase from 'pocketbase';

// In development, /hcgi/platform is proxied by Vite to http://localhost:8090
// In production, set VITE_PB_URL to your hosted PocketBase URL (e.g. https://pb.yourdomain.com)
const POCKETBASE_API_URL = import.meta.env.VITE_PB_URL || "/hcgi/platform";

const pocketbaseClient = new Pocketbase(POCKETBASE_API_URL);

export default pocketbaseClient;

export { pocketbaseClient };
