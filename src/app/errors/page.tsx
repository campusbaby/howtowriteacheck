'use client';

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ErrorsPage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* 页面标题 */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Common Check Writing Errors' : '支票填写常见错误'}
          </h1>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-lg max-w-prose mx-auto">
                <p className="text-base text-center leading-6 text-red-600 font-semibold tracking-wide uppercase">
                  {language === 'en' ? 'IMPORTANT NOTICE' : '注意事项'}
                </p>
                <h2 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {language === 'en' ? 'Avoid These Common Check Writing Errors' : '避免这些常见的支票填写错误'}
                </h2>
                <p className="mt-4 text-xl text-gray-500 leading-8">
                  {language === 'en' 
                    ? 'Errors when writing checks can lead to rejection, processing delays, and even potential fraud. Understanding these common mistakes will help you write checks correctly and securely.' 
                    : '填写支票时的错误可能导致支票被拒付、延迟处理，甚至可能引发欺诈。了解这些常见错误将帮助您正确、安全地填写支票。'}
                </p>
              </div>

              <div className="mt-6 prose prose-red prose-lg text-gray-500 mx-auto">
                <p className="text-red-700 font-semibold">
                  {language === 'en' 
                    ? 'Please be aware of the following common errors and pay special attention to avoid these problems when writing checks:' 
                    : '请注意以下常见错误，并在填写支票时特别留意避免这些问题：'}
                </p>

                {/* 错误 1 */}
                <div className="mt-8 bg-red-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600">
                        <span className="text-xl font-bold">1</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-red-800">
                        {language === 'en' ? 'Date Errors' : '日期错误'}
                      </h3>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-700 mb-3">
                            {language === 'en' 
                              ? 'The date is crucial for check processing. Here are common date errors:' 
                              : '日期是支票处理的重要依据。以下是常见的日期错误：'}
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              {language === 'en' ? 'Forgetting to write the date' : '忘记填写日期'}
                            </li>
                            <li>
                              {language === 'en' ? 'Using an incorrect date format (e.g., using another country\'s format)' : '日期格式错误（例如，使用了其他国家的日期格式）'}
                            </li>
                            <li>
                              {language === 'en' ? 'Date is illegible or difficult to read' : '日期不清晰或难以辨认'}
                            </li>
                            <li>
                              {language === 'en' ? 'Using an expired date' : '使用过期日期'}
                            </li>
                          </ul>
                          <p className="mt-3 text-red-700 font-medium">
                            {language === 'en' ? 'Correct Practice:' : '正确做法：'}
                          </p>
                          <p>
                            {language === 'en' 
                              ? 'Use a clear date format (such as MM/DD/YYYY) and ensure the date is current and valid.' 
                              : '使用清晰的日期格式（如 MM/DD/YYYY），确保日期是有效的当前日期。'}
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-red-200">
                          <p className="font-semibold text-center mb-2 text-red-600">
                            {language === 'en' ? 'Error Examples' : '错误示例'}
                          </p>
                          <div className="space-y-3">
                            <div className="p-2 border border-red-300 rounded-md">
                              <p className="text-center text-sm line-through text-red-500">
                                {language === 'en' ? 'Left blank' : '留空'}
                              </p>
                              <p className="text-xs text-center mt-1">
                                {language === 'en' ? 'Error: Date not written' : '错误：未填写日期'}
                              </p>
                            </div>
                            <div className="p-2 border border-red-300 rounded-md">
                              <p className="text-center text-sm line-through text-red-500">15/05/23</p>
                              <p className="text-xs text-center mt-1">
                                {language === 'en' ? 'Error: Date format confusion (day/month/year)' : '错误：日期格式混淆（日/月/年）'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 错误 2 */}
                <div className="mt-8 bg-red-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600">
                        <span className="text-xl font-bold">2</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-red-800">
                        {language === 'en' ? 'Amount Discrepancies' : '金额不一致'}
                      </h3>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-700 mb-3">
                            {language === 'en' 
                              ? 'The numerical amount and written amount must match exactly. This is one of the most common errors:' 
                              : '数字金额与文字金额必须完全一致，这是最常见的错误之一：'}
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              {language === 'en' ? 'Numerical amount doesn\'t match written amount' : '数字金额与文字金额不匹配'}
                            </li>
                            <li>
                              {language === 'en' ? 'Forgetting to include cents in the numerical field' : '忘记在数字金额栏中包含美分'}
                            </li>
                            <li>
                              {language === 'en' ? 'Missing the decimal portion in the written amount' : '文字金额中缺少小数部分'}
                            </li>
                            <li>
                              {language === 'en' ? 'Unclear or incomplete written expression' : '文字表达不清或不完整'}
                            </li>
                          </ul>
                          <p className="mt-3 text-red-700 font-medium">
                            {language === 'en' ? 'Correct Practice:' : '正确做法：'}
                          </p>
                          <p>
                            {language === 'en' 
                              ? 'Ensure the numerical amount and written amount match exactly, including cents. For example, $1,234.56 corresponds to "One thousand two hundred thirty-four and 56/100".' 
                              : '确保数字金额和文字金额完全一致，包括分的部分。例如，$1,234.56 对应 "One thousand two hundred thirty-four and 56/100"。'}
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-red-200">
                          <p className="font-semibold text-center mb-2 text-red-600">
                            {language === 'en' ? 'Error Examples' : '错误示例'}
                          </p>
                          <div className="space-y-3">
                            <div className="p-2 border border-red-300 rounded-md">
                              <p className="text-sm"><span className="font-mono">$1,250.75</span> {language === 'en' ? '(numerical amount)' : '(数字金额)'}</p>
                              <p className="text-sm line-through text-red-500"><span className="font-mono">One thousand two hundred dollars only</span> {language === 'en' ? '(written amount)' : '(文字金额)'}</p>
                              <p className="text-xs mt-1">
                                {language === 'en' ? 'Error: Amounts don\'t match and cents are missing' : '错误：两种金额不一致且缺少美分'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 错误 3 */}
                <div className="mt-8 bg-red-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600">
                        <span className="text-xl font-bold">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-red-800">
                        {language === 'en' ? 'Signature Issues' : '签名问题'}
                      </h3>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-700 mb-3">
                            {language === 'en' 
                              ? 'The signature is crucial for check validity. Here are common signature errors:' 
                              : '签名是支票有效性的关键，以下是常见的签名错误：'}
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              {language === 'en' ? 'Forgetting to sign the check' : '忘记签名'}
                            </li>
                            <li>
                              {language === 'en' ? 'Signature doesn\'t match the one on file with the bank' : '签名与银行记录的签名不符'}
                            </li>
                            <li>
                              {language === 'en' ? 'Incomplete or too messy signature' : '签名不完整或过于潦草'}
                            </li>
                            <li>
                              {language === 'en' ? 'Signature outside the designated area' : '签名超出了指定区域'}
                            </li>
                            <li>
                              {language === 'en' ? 'Only one person signing for a joint account' : '多人账户只有一人签名'}
                            </li>
                          </ul>
                          <p className="mt-3 text-red-700 font-medium">
                            {language === 'en' ? 'Correct Practice:' : '正确做法：'}
                          </p>
                          <p>
                            {language === 'en' 
                              ? 'Use your complete signature as registered with your bank, ensure it\'s clear and within the designated signature area. For joint accounts, make sure all required signatures are present.' 
                              : '使用与银行记录一致的完整签名，确保签名清晰且位于指定的签名区域内。如果是联名账户，确保所有必要的签名都已完成。'}
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-red-200">
                          <p className="font-semibold text-center mb-2 text-red-600">
                            {language === 'en' ? 'Error Examples' : '错误示例'}
                          </p>
                          <div className="space-y-3">
                            <div className="p-2 border border-red-300 rounded-md">
                              <p className="text-center text-sm line-through text-red-500">
                                {language === 'en' ? 'Left blank' : '留空'}
                              </p>
                              <p className="text-xs text-center mt-1">
                                {language === 'en' ? 'Error: No signature' : '错误：未签名'}
                              </p>
                            </div>
                            <div className="p-2 border border-red-300 rounded-md">
                              <p className="text-center text-sm line-through text-red-500">
                                {language === 'en' ? 'Messy abbreviated signature' : '潦草的缩写签名'}
                              </p>
                              <p className="text-xs text-center mt-1">
                                {language === 'en' ? 'Error: Doesn\'t match signature on file' : '错误：与银行记录不符'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 错误 4 */}
                <div className="mt-8 bg-red-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600">
                        <span className="text-xl font-bold">4</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-red-800">
                        {language === 'en' ? 'Payee Information Errors' : '收款人信息错误'}
                      </h3>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-700 mb-3">
                            {language === 'en' 
                              ? 'Errors in payee information can lead to checks being unable to be deposited or being deposited incorrectly:' 
                              : '收款人信息的错误可能导致支票无法存入或被错误存入：'}
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              {language === 'en' ? 'Misspelling the payee\'s name' : '收款人姓名拼写错误'}
                            </li>
                            <li>
                              {language === 'en' ? 'Using a non-legal name (like a nickname)' : '使用非法定名称（如昵称）'}
                            </li>
                            <li>
                              {language === 'en' ? 'Improper abbreviation of the name' : '名称缩写不当'}
                            </li>
                            <li>
                              {language === 'en' ? 'Name is difficult to read' : '名称难以辨认'}
                            </li>
                            <li>
                              {language === 'en' ? 'Leaving the "Pay to" line blank or writing "Cash"' : '在"付给"行留空或填写"现金"'}
                            </li>
                          </ul>
                          <p className="mt-3 text-red-700 font-medium">
                            {language === 'en' ? 'Correct Practice:' : '正确做法：'}
                          </p>
                          <p>
                            {language === 'en' 
                              ? 'Ensure the payee\'s full legal name is spelled correctly and written clearly. If uncertain, confirm the correct spelling with the payee.' 
                              : '确保收款人的完整法定名称拼写正确，文字清晰。如果不确定，请向收款人确认正确的名称拼写。'}
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-red-200">
                          <p className="font-semibold text-center mb-2 text-red-600">
                            {language === 'en' ? 'Error Examples' : '错误示例'}
                          </p>
                          <div className="space-y-3">
                            <div className="p-2 border border-red-300 rounded-md">
                              <p className="text-sm line-through text-red-500"><span className="font-mono">ABC Co.</span> {language === 'en' ? '(should be ABC Company)' : '(应为 ABC Company)'}</p>
                              <p className="text-xs mt-1">
                                {language === 'en' ? 'Error: Incomplete company name used' : '错误：使用了不完整的公司名称'}
                              </p>
                            </div>
                            <div className="p-2 border border-red-300 rounded-md">
                              <p className="text-sm line-through text-red-500"><span className="font-mono">Cash</span></p>
                              <p className="text-xs mt-1">
                                {language === 'en' ? 'Error: Using "Cash" allows anyone to cash the check' : '错误：使用"现金"会使支票可由任何人兑现'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 错误 5 */}
                <div className="mt-8 bg-red-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600">
                        <span className="text-xl font-bold">5</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-red-800">
                        {language === 'en' ? 'Alterations and Corrections' : '涂改和修改'}
                      </h3>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-700 mb-3">
                            {language === 'en' 
                              ? 'Any alteration or correction on a check can cause it to be rejected:' 
                              : '支票上的任何涂改或修改都可能导致支票被拒：'}
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              {language === 'en' ? 'Erasing or crossing out any information' : '擦除或涂改任何信息'}
                            </li>
                            <li>
                              {language === 'en' ? 'Using correction fluid or correction tape' : '使用修正液或修正带'}
                            </li>
                            <li>
                              {language === 'en' ? 'Modifying the amount or other information after signing' : '在签名后修改金额或其他信息'}
                            </li>
                            <li>
                              {language === 'en' ? 'Excessive writing or corrections making information hard to read' : '过度书写或修改使信息难以辨认'}
                            </li>
                          </ul>
                          <p className="mt-3 text-red-700 font-medium">
                            {language === 'en' ? 'Correct Practice:' : '正确做法：'}
                          </p>
                          <p>
                            {language === 'en' 
                              ? 'If you make a mistake, void the current check (write "VOID" across it) and use a new check. Never attempt to modify information already written.' 
                              : '如果填写错误，请作废当前支票（在支票上大写"VOID"），并使用新支票重新填写。切勿尝试修改已填写的信息。'}
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-red-200">
                          <p className="font-semibold text-center mb-2 text-red-600">
                            {language === 'en' ? 'Error Examples' : '错误示例'}
                          </p>
                          <div className="space-y-3">
                            <div className="p-2 border border-red-300 rounded-md">
                              <p className="text-sm line-through text-red-500">
                                {language === 'en' ? 'Amount altered: $1,<span className="bg-gray-200">2</span>50.75' : '涂改金额：$1,<span className="bg-gray-200">2</span>50.75'}
                              </p>
                              <p className="text-xs mt-1">
                                {language === 'en' ? 'Error: Numerical amount altered' : '错误：金额数字被涂改'}
                              </p>
                            </div>
                            <div className="p-2 border border-red-300 rounded-md">
                              <p className="text-sm line-through text-red-500">
                                {language === 'en' ? 'Using correction fluid to cover mistakes' : '使用修正液遮盖错误'}
                              </p>
                              <p className="text-xs mt-1">
                                {language === 'en' ? 'Error: Using correction fluid to modify check information' : '错误：使用修正液修改支票信息'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 安全警告 */}
                <div className="mt-12 bg-red-100 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-medium text-red-800">
                    {language === 'en' ? 'Security Warning' : '安全警告'}
                  </h3>
                  <p className="mt-2 text-gray-700">
                    {language === 'en' 
                      ? 'In addition to the common errors above, the following behaviors can pose serious financial risks:' 
                      : '除了上述常见错误外，以下行为可能导致严重的财务风险：'}
                  </p>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <span className="font-semibold text-red-700">
                        {language === 'en' ? 'Signing blank checks:' : '签署空白支票：'}
                      </span> 
                      {language === 'en' 
                        ? ' Never sign a blank check! This could allow anyone to fill in any amount and cash it.' 
                        : ' 永远不要签署空白支票！这可能使任何人填写任意金额并兑现。'}
                    </li>
                    <li>
                      <span className="font-semibold text-red-700">
                        {language === 'en' ? 'Leaving space after amounts:' : '在金额后留有空白：'}
                      </span> 
                      {language === 'en' 
                        ? ' Leaving space after numerical and written amounts can allow others to add extra digits or words, changing the amount.' 
                        : ' 在数字和文字金额后留下空白可能使他人添加额外数字或文字，从而更改金额。'}
                    </li>
                    <li>
                      <span className="font-semibold text-red-700">
                        {language === 'en' ? 'Using erasable ink:' : '使用可擦除墨水：'}
                      </span> 
                      {language === 'en' 
                        ? ' Using erasable ink allows fraudsters to easily modify information.' 
                        : ' 使用可擦除墨水填写支票使欺诈者能够轻松修改信息。'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-between">
              <Link href="/simulator" className="text-blue-600 hover:text-blue-800 font-medium">
                {language === 'en' ? '← Back to Simulator' : '← 返回模拟器'}
              </Link>
              <Link href="/terms" className="text-blue-600 hover:text-blue-800 font-medium">
                {language === 'en' ? 'View Terminology →' : '查看术语解释 →'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 