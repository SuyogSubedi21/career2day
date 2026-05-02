import Pocketbase from 'pocketbase';

// Default to /pb because Nginx proxies /pb/* -> PocketBase :8090.
// You can override this with VITE_PB_URL (e.g. https://api.example.com).
const POCKETBASE_API_URL = import.meta.env.VITE_PB_URL || '/pb';

const pocketbaseClient = new Pocketbase(POCKETBASE_API_URL);

export default pocketbaseClient;

export { pocketbaseClient };
