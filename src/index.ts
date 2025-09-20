export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/sitemap.xml") {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lampiontogelnf.com/</loc>
    <lastmod>2025-09-20</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
;

      return new Response(sitemap, {
        headers: {
          "content-type": "application/xml; charset=UTF-8",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};
