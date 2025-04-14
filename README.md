# 如何填写支票 - 教学网站

这是一个用于教授人们如何正确填写支票的交互式教育网站。该网站使用Next.js和React构建，提供了详细的支票填写指南、交互式支票填写模拟器、常见错误解析和相关术语解释。

## 功能特点

1. **详细的支票填写步骤指南**：分步骤演示如何正确填写支票的每个部分。
2. **交互式支票模拟器**：用户可以在虚拟支票上练习填写各个字段，并获得即时反馈。
3. **常见错误页面**：解释填写支票时的常见错误及其避免方法。
4. **术语解释**：详细介绍与支票相关的专业术语。
5. **响应式设计**：适配各种设备屏幕大小，包括桌面电脑、平板和手机。
6. **多语言支持**：支持中英文切换，满足不同用户需求。
7. **数据分析**：集成Google Analytics，追踪用户行为和页面访问统计。
8. **SEO优化**：自动生成网站地图，提高搜索引擎可见性。

## 技术栈

- **Next.js**: React框架，提供服务端渲染和静态生成功能
- **React**: 用于构建用户界面的JavaScript库
- **TypeScript**: JavaScript的超集，提供类型安全
- **Tailwind CSS**: 实用工具优先的CSS框架，用于快速构建自定义设计
- **Google Analytics**: 网站数据分析工具，用于追踪用户行为和页面访问统计
- **next-sitemap**: 自动生成网站地图，优化SEO

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 集成服务

### Google Analytics

本项目已集成Google Analytics (GA4)，用于追踪网站访问数据和用户行为分析。GA代码已添加到应用程序的根布局文件中，适用于所有页面。

集成方式：
- 使用Next.js的Script组件加载GA脚本
- 配置策略为"afterInteractive"以优化加载性能
- 跟踪ID: G-1X5BLC3CRM

如需修改或禁用分析功能，请编辑`src/app/layout.tsx`文件中的相关代码。

### 网站地图 (Sitemap)

本项目使用`next-sitemap`自动生成网站地图，优化SEO并帮助搜索引擎爬取网站。

特点：
- 构建时自动生成静态网站地图 (sitemap-0.xml)
- 支持服务器端动态生成的网站地图 (server-sitemap.xml)
- 自动生成robots.txt文件
- 每次构建后自动更新

配置文件: `next-sitemap.config.js`

如需修改网站地图配置，请编辑此文件。对于动态生成的URL，请更新`src/app/server-sitemap.xml/route.js`文件。
