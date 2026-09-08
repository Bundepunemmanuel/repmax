export default async function handler(req, res) {
  const key = "8e5cbb455db8428f8a37836e2f37d026";

  const urls = [
    "https://repmax-app.vercel.app/"
  ];

  const response = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      host: "repmax-app.vercel.app",
      key,
      keyLocation: `https://repmax-app.vercel.app/${key}.txt`,
      urlList: urls,
    }),
  });

  res.status(response.status).json({
    success: response.ok,
  });
    }
