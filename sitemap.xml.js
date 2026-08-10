import { getAllSlugs } from "../data";

const SITE_URL = "https://repmax.vercel.app"; // update once you have a real domain

function generateSitemap(slugs) {
  const urls = ["", ...slugs]
    .map((slug) => {
      return `  <url>
    <loc>${SITE_URL}/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>${slug === "" ? "1.0" : "0.8"}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap(getAllSlugs());
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
