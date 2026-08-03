/* =========================================================================
   MoviezDB — configuration
   -------------------------------------------------------------------------
   SETUP (required):
     1. Copy this file to `config.js`  (same folder)
     2. Get a FREE TMDB API key:  https://www.themoviedb.org/settings/api
     3. Paste your key below in `config.js` (NOT this example file)

   `config.js` is gitignored, so your key never gets committed or sold with
   the code. Each deployment / buyer supplies their own free key here.
   ========================================================================= */
window.MOVIEZDB_CONFIG = {
  TMDB_KEY: 'YOUR_TMDB_API_KEY_HERE',
  DEFAULT_LANG: 'en',

  // Optional — enables accounts, profiles, reviews, ratings & discussions.
  // From your Supabase project → Settings → API:
  //   SUPABASE_URL      = "Project URL"
  //   SUPABASE_ANON_KEY = the "anon"/"publishable" public key (safe in browser).
  //   ⚠️ NEVER put the secret / service_role key here.
  // Leave blank to run as a TMDB-only app (no accounts).
  SUPABASE_URL: '',
  SUPABASE_ANON_KEY: '',

  // Optional — enables the "YouTube" source on the Watch Free page (full,
  // free, legal movies pulled from a curated allowlist of legitimate
  // free-movie channels). Get a FREE key:
  //   1. https://console.cloud.google.com/  → create/select a project
  //   2. "Enable APIs & Services" → enable "YouTube Data API v3"
  //   3. "Credentials" → Create credentials → API key → paste below.
  //   (Free tier: 10,000 units/day — plenty for browsing.)
  // Leave blank to hide the YouTube source (Internet Archive still works).
  YOUTUBE_KEY: '',
};
