import Pocketbase, { LocalAuthStore } from 'pocketbase';

const POCKETBASE_API_URL = import.meta.env.VITE_PB_URL || '/pb';

const adminPocketbaseClient = new Pocketbase(
  POCKETBASE_API_URL,
  new LocalAuthStore('career2day_admin_auth')
);

export default adminPocketbaseClient;

export { adminPocketbaseClient };
