// config.js - The Single Source of Truth for Aether Webstudio
const AETHER_API_CONFIG = {
  // TikTok OAuth credentials
  CLIENT_KEY: "sbawsb9lzwltcl6uv2",
  REDIRECT_URI: "https://moonlight-haven.github.io/AetherEnhancetest/studio.html",
  
  // Render backend (TikTok API proxy + Video Patcher proxy)
  SERVER_API_ROOT: "https://aether-backend-engine.onrender.com/api",
  
  // Video Patcher - uses Render as HTTPS proxy to Pterodactyl
  // Your Render server forwards requests to Pterodactyl automatically
  PATCH_API_URL: "https://aether-backend-engine.onrender.com/api/patch",
  PATCH_API_KEY: "aether_patch_secret_key_2026"
};

// Global access for all pages
window.AETHER_API_CONFIG = AETHER_API_CONFIG;
