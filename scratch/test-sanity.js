const fs = require('fs');
const path = require('path');

// Read .env.local
const envFile = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
envFile.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length >= 2) {
    const key = parts[0].trim();
    const val = parts.slice(1).join('=').trim().replace(/^["']|["']$/g, '');
    if (key) process.env[key] = val;
  }
});

const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2023-01-01',
  useCdn: false
});

async function main() {
  console.log('Testing connection to Sanity...');
  const posts = await client.fetch('*[_type == "post"][0...3]{_id, title, "slug": slug.current}');
  console.log('Existing posts count:', posts.length);
  console.log(posts);
}

main().catch(err => {
  console.error('Error:', err);
});
