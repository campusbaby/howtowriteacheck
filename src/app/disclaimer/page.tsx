'use client';

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/app/context/LanguageContext";

export default function DisclaimerPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* 页面标题 */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Disclaimer' : '免责声明'}
          </h1>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="prose prose-blue max-w-none">
                {language === 'en' ? (
                  <>
                    <h2>Disclaimer</h2>
                    <p>
                      <strong>Educational Purpose Only:</strong> The check writing guide, simulator, and all related information provided on this website are intended for educational and reference purposes only. 
                    </p>
                    
                    <p>
                      <strong>No Guarantees:</strong> While we strive to provide accurate and up-to-date information, we make no warranties or representations about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website for any purpose.
                    </p>
                    
                    <h3>Please Note:</h3>
                    <ul>
                      <li>Different banks may have specific check formats and requirements. Always refer to your specific bank's guidelines.</li>
                      <li>This website is not responsible for any direct or indirect losses arising from the use of information presented on this site.</li>
                      <li>For important or large-amount check transactions, we recommend consulting directly with your bank or financial advisor.</li>
                      <li>This website does not collect or store any data you enter in the simulator.</li>
                      <li>Banking regulations and check processing procedures may vary by country, state, or institution and may change over time.</li>
                    </ul>

                    <h3>No Legal or Financial Advice</h3>
                    <p>
                      The information provided on this website does not constitute legal or financial advice. For specific guidance related to your financial matters, please consult with qualified professionals such as bankers, financial advisors, or attorneys.
                    </p>

                    <h3>Third-Party Links</h3>
                    <p>
                      Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                    </p>

                    <h3>Use At Your Own Risk</h3>
                    <p>
                      By using this website, you acknowledge that you are doing so at your own risk. You understand and agree that neither the website owners nor contributors shall be held liable for any damages or losses resulting from the use of this website or the information it contains.
                    </p>

                    <p className="text-sm text-gray-500 mt-8">
                      Last updated: {new Date().toLocaleDateString()}
                    </p>
                  </>
                ) : (
                  <>
                    <h2>免责声明</h2>
                    <p>
                      <strong>仅供教育目的：</strong>本网站提供的支票填写指南、模拟器和所有相关信息仅供教育和参考目的。
                    </p>
                    
                    <p>
                      <strong>无保证：</strong>尽管我们努力提供准确和最新的信息，但我们不对本网站上包含的信息、产品、服务或相关图形的完整性、准确性、可靠性、适用性或可用性做出任何保证或陈述。
                    </p>
                    
                    <h3>请注意：</h3>
                    <ul>
                      <li>不同银行可能有特定的支票格式和要求，请务必参考您的银行提供的具体指南。</li>
                      <li>本网站不对因使用本站提供的信息而导致的任何直接或间接损失承担责任。</li>
                      <li>对于重要或大额支票交易，我们建议您直接咨询您的银行或财务顾问。</li>
                      <li>本网站不收集或存储您在模拟器中输入的任何数据。</li>
                      <li>银行法规和支票处理程序可能因国家、州或机构而异，并且可能随时间变化。</li>
                    </ul>

                    <h3>非法律或财务建议</h3>
                    <p>
                      本网站提供的信息不构成法律或财务建议。对于与您的财务事务相关的具体指导，请咨询银行工作人员、财务顾问或律师等合格专业人士。
                    </p>

                    <h3>第三方链接</h3>
                    <p>
                      我们的网站可能包含指向非由我们提供或维护的外部网站的链接。我们不保证这些外部网站上任何信息的准确性、相关性、及时性或完整性。
                    </p>

                    <h3>使用风险自负</h3>
                    <p>
                      通过使用本网站，您承认您是在自担风险的情况下使用的。您理解并同意，网站所有者和贡献者都不对因使用本网站或其包含的信息而导致的任何损害或损失承担责任。
                    </p>

                    <p className="text-sm text-gray-500 mt-8">
                      最后更新：{new Date().toLocaleDateString()}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <Link href="/simulator" className="text-blue-600 hover:text-blue-800 font-medium">
                {language === 'en' ? '← Back to Simulator' : '← 返回模拟器'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 