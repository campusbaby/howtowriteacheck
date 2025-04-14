import { getServerSideSitemap } from 'next-sitemap';

export async function GET() {
  // 在此处获取动态URL列表
  // 这里只是示例，您可以从数据库、CMS或其他数据源获取实际URL
  const pages = [
    {
      loc: 'https://howtowriteacheck.online',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://howtowriteacheck.online/simulator',
      lastmod: new Date().toISOString(),
    },
    // 添加网站的所有其他页面
  ];

  return getServerSideSitemap(pages);
} 