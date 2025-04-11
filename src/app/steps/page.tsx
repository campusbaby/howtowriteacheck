'use client';

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/app/context/LanguageContext";

export default function StepsPage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* 页面标题 */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Check Writing Steps Guide' : '支票填写步骤指南'}
          </h1>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-lg max-w-prose mx-auto">
                <p className="text-base text-center leading-6 text-blue-600 font-semibold tracking-wide uppercase">
                  {language === 'en' ? 'DETAILED GUIDE' : '详细指南'}
                </p>
                <h2 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {language === 'en' ? 'How to Correctly Write a Check Step by Step' : '如何一步步正确填写支票'}
                </h2>
                <p className="mt-4 text-xl text-gray-500 leading-8">
                  {language === 'en' 
                    ? 'Correctly writing a check is an essential financial skill. Even in the digital age, checks are still necessary in certain situations. This guide will walk you through each step of writing a check to ensure it is valid and secure.' 
                    : '正确填写支票是一项基本的财务技能。即使在数字化时代，在某些场合仍然需要使用支票。本指南将引导您完成支票填写的每一个步骤，确保您的支票有效且安全。'}
                </p>
              </div>

              <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                <div className="bg-blue-50 p-4 rounded-lg mb-8">
                  <p className="text-sm text-blue-700">
                    <strong>{language === 'en' ? 'Note:' : '注意：'}</strong> {language === 'en' 
                      ? 'Before writing a check, make sure you are using an official check in a secure, private environment. Use a non-erasable blue or black ink pen.' 
                      : '在填写支票前，请确保您使用的是官方支票，并在安全、私密的环境中进行填写。请使用不可擦除的蓝色或黑色墨水笔填写。'}
                  </p>
                </div>

                {/* 步骤 1 */}
                <div className="border-l-4 border-blue-500 pl-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === 'en' ? 'Step 1: Write the Date' : '步骤 1：填写日期'}
                  </h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <p>
                        {language === 'en' 
                          ? 'Write the current date in the top right corner of the check. The date format is typically "MM/DD/YYYY" (e.g., 05/15/2023).' 
                          : '在支票的右上角填写当前日期。日期格式通常为"月/日/年"（如 05/15/2023）。'}
                      </p>
                      <ul className="mt-2 list-disc list-inside">
                        <li>
                          {language === 'en' 
                            ? 'Use the current date - do not postdate checks (write a future date) unless specifically necessary' 
                            : '使用当前日期 - 不要预先填写未来日期（这称为"远期支票"）'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Ensure the date is clearly legible' 
                            : '确保日期清晰可辨'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'If you want the check to be cashed after a specific date, you can write "Not valid before [date]"' 
                            : '如果您希望支票在特定日期之后才能兑现，可以写明"不早于某日期支付"'}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-center text-sm text-gray-500 mb-2">
                        {language === 'en' ? 'Date Example' : '日期示例'}
                      </p>
                      <p className="text-center font-mono">05/15/2023</p>
                    </div>
                  </div>
                </div>

                {/* 步骤 2 */}
                <div className="border-l-4 border-blue-500 pl-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === 'en' ? 'Step 2: Write the Recipient Name' : '步骤 2：填写收款人姓名'}
                  </h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <p>
                        {language === 'en' 
                          ? 'On the "Pay to the order of" line, write the name of the person or company who will receive the payment.' 
                          : '在"付给"（Pay to the order of）这一行填写收款人的姓名或公司名称。'}
                      </p>
                      <ul className="mt-2 list-disc list-inside">
                        <li>
                          {language === 'en' 
                            ? 'Use the full legal name of the recipient' 
                            : '使用收款人的完整法定名称'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Ensure the name is spelled correctly' 
                            : '确保姓名拼写正确'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Do not use nicknames or abbreviations' 
                            : '不要使用昵称或缩写'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'If unsure about the name, confirm with the recipient' 
                            : '如果不确定名称，请向收款人确认'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Never leave this blank or write "Cash" unless you intend anyone to be able to cash the check' 
                            : '不要留空此项，也不要写"现金"，除非您确实打算让任何人都能兑现此支票'}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-center text-sm text-gray-500 mb-2">
                        {language === 'en' ? 'Recipient Example' : '收款人示例'}
                      </p>
                      <p className="text-center font-mono">
                        {language === 'en' ? 'John Smith' : '张三'}
                      </p>
                      <p className="text-center mt-2 text-xs text-gray-500">
                        {language === 'en' ? 'or' : '或'}
                      </p>
                      <p className="text-center font-mono">
                        {language === 'en' ? 'ABC Company' : 'ABC公司'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 步骤 3 */}
                <div className="border-l-4 border-blue-500 pl-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === 'en' ? 'Step 3: Write the Amount in Numbers' : '步骤 3：填写金额（数字）'}
                  </h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <p>
                        {language === 'en' 
                          ? 'In the box with the "$" symbol on the right side of the check, write the amount in numbers.' 
                          : '在支票右侧带有"$"符号的方框中，填写支票金额的数字表示。'}
                      </p>
                      <ul className="mt-2 list-disc list-inside">
                        <li>
                          {language === 'en' 
                            ? 'Write clearly and legibly' 
                            : '数字必须清晰可辨'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Ensure the decimal point is in the correct position' 
                            : '确保小数点的位置正确'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Use dollars and cents (e.g., $100.50)' 
                            : '使用美元和美分（例如：$100.50）'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Write the amount as close to the dollar sign as possible, leaving no space for additional digits' 
                            : '在数字前后紧挨着填写，不要留出可以添加额外数字的空间'}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-center text-sm text-gray-500 mb-2">
                        {language === 'en' ? 'Numerical Amount Example' : '数字金额示例'}
                      </p>
                      <p className="text-center font-mono">$1,250.75</p>
                    </div>
                  </div>
                </div>

                {/* 步骤 4 */}
                <div className="border-l-4 border-blue-500 pl-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === 'en' ? 'Step 4: Write the Amount in Words' : '步骤 4：填写金额（文字）'}
                  </h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <p>
                        {language === 'en' 
                          ? 'On the line below the "Pay to the order of" line, write out the amount in words.' 
                          : '在"金额"行上，用文字拼写出支票金额。'}
                      </p>
                      <ul className="mt-2 list-disc list-inside">
                        <li>
                          {language === 'en' 
                            ? 'The written amount must match the numerical amount exactly' 
                            : '大写金额应与数字金额完全一致'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Start writing at the far left of the line' 
                            : '从行的最左侧开始书写'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Draw a line to fill any empty space after the amount to prevent alterations' 
                            : '在金额后面的任何空白处画一条线，防止他人添加文字'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Write both dollars and cents (e.g., "One thousand two hundred fifty and 75/100")' 
                            : '美元和美分都要写清楚（例如："One thousand two hundred fifty dollars and 75/100"）'}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-center text-sm text-gray-500 mb-2">
                        {language === 'en' ? 'Written Amount Example' : '文字金额示例'}
                      </p>
                      <p className="text-center font-mono text-xs">
                        {language === 'en' 
                          ? 'One thousand two hundred fifty dollars and 75/100' 
                          : '壹仟贰佰伍拾元柒角伍分'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 步骤 5 */}
                <div className="border-l-4 border-blue-500 pl-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === 'en' ? 'Step 5: Write the Memo' : '步骤 5：填写备注'}
                  </h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <p>
                        {language === 'en' 
                          ? 'In the "Memo" or "For" line in the bottom left corner of the check, write the purpose of the payment.' 
                          : '在支票左下角的"备注"（For或Memo）栏填写付款目的。'}
                      </p>
                      <ul className="mt-2 list-disc list-inside">
                        <li>
                          {language === 'en' 
                            ? 'Briefly state the purpose of the payment' 
                            : '简明扼要地说明支付目的'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Include account numbers, invoice numbers, or bill IDs if applicable' 
                            : '可以写账号、发票号、账单号等参考信息'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'This section is optional but highly recommended for record-keeping' 
                            : '这一部分是可选的，但强烈建议填写，有助于记录和跟踪支付'}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-center text-sm text-gray-500 mb-2">
                        {language === 'en' ? 'Memo Example' : '备注示例'}
                      </p>
                      <p className="text-center font-mono">
                        {language === 'en' ? 'Electric Bill #12345' : '电费账单 #12345'}
                      </p>
                      <p className="text-center mt-2 text-xs text-gray-500">
                        {language === 'en' ? 'or' : '或'}
                      </p>
                      <p className="text-center font-mono">
                        {language === 'en' ? 'May Rent' : '5月房租'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 步骤 6 */}
                <div className="border-l-4 border-blue-500 pl-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === 'en' ? 'Step 6: Sign the Check' : '步骤 6：签名'}
                  </h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    <div className="md:col-span-2">
                      <p>
                        {language === 'en' 
                          ? 'Sign your name on the signature line in the bottom right corner of the check.' 
                          : '在支票右下角的签名线上签下您的名字。'}
                      </p>
                      <ul className="mt-2 list-disc list-inside">
                        <li>
                          {language === 'en' 
                            ? 'Use the same signature that your bank has on file' 
                            : '使用您在银行登记的签名'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Sign only after completing all other parts of the check' 
                            : '在您完成所有其他步骤后再签名'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'An unsigned check is invalid' 
                            : '未签名的支票无效'}
                        </li>
                        <li>
                          {language === 'en' 
                            ? 'Keep your signature within the signature line' 
                            : '签名不要超出签名线'}
                        </li>
                        <li>
                          <strong>{language === 'en' ? 'Important:' : '重要：'}</strong> {language === 'en' 
                            ? 'Only sign after verifying all information is correct. Your signature authorizes the payment.' 
                            : '只有在确定所有信息都已正确填写后才签名，签名后的支票即代表授权付款'}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-center text-sm text-gray-500 mb-2">
                        {language === 'en' ? 'Signature Area Example' : '签名区域示例'}
                      </p>
                      <div className="border-b border-gray-400 pt-4 text-center font-mono font-bold text-gray-600">
                        {language === 'en' ? 'John Smith' : '张三'}
                      </div>
                      <p className="text-center mt-1 text-xs text-gray-500">
                        {language === 'en' 
                          ? 'Make sure to use your signature on file with your bank' 
                          : '请确保使用您在银行登记的签名'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 最终检查 */}
                <div className="bg-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-yellow-500">
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'en' ? 'Final Check' : '最终检查'}
                  </h3>
                  <p className="mt-2">
                    {language === 'en' 
                      ? 'Before delivering the check, do a final verification:' 
                      : '在交付支票之前，请进行最后的检查：'}
                  </p>
                  <ul className="mt-2 list-disc list-inside">
                    <li>
                      {language === 'en' ? 'Confirm the date is correct' : '确认日期正确'}
                    </li>
                    <li>
                      {language === 'en' ? 'Verify the recipient name is spelled correctly' : '确认收款人姓名拼写正确'}
                    </li>
                    <li>
                      {language === 'en' ? 'Ensure the numerical amount matches the written amount' : '确认数字金额与文字金额相符'}
                    </li>
                    <li>
                      {language === 'en' ? 'Verify you have signed the check' : '确认您已签名'}
                    </li>
                    <li>
                      {language === 'en' ? 'Confirm the memo information is clear' : '确认备注信息清晰明了'}
                    </li>
                    <li>
                      {language === 'en' 
                        ? 'Make sure there are no erasures or alterations (these may cause the check to be rejected)' 
                        : '确保支票上没有涂改痕迹（涂改可能导致支票被拒）'}
                    </li>
                  </ul>
                </div>

                {/* 安全提示 */}
                <div className="bg-red-50 p-6 rounded-lg mb-8 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'en' ? 'Security Tips' : '安全提示'}
                  </h3>
                  <ul className="mt-2 list-disc list-inside">
                    <li>
                      {language === 'en' ? 'Never sign a blank check' : '永远不要签署空白支票'}
                    </li>
                    <li>
                      {language === 'en' ? 'Keep your checkbook in a secure location' : '保管好您的支票簿'}
                    </li>
                    <li>
                      {language === 'en' 
                        ? 'Regularly review your bank statements to verify check transactions' 
                        : '定期检查您的银行对账单，确认支票交易'}
                    </li>
                    <li>
                      {language === 'en' 
                        ? 'Contact your bank immediately if checks are lost or stolen' 
                        : '如果支票丢失或被盗，立即联系您的银行'}
                    </li>
                    <li>
                      {language === 'en' ? 'Use a non-erasable pen to write checks' : '使用不可擦除的墨水笔填写支票'}
                    </li>
                    <li>
                      {language === 'en' 
                        ? 'Fill in all blank spaces on the amount lines or draw a line through them' 
                        : '在金额和收款人信息的空白处填满或画线'}
                    </li>
                  </ul>
                </div>

                {/* 常见问题 */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {language === 'en' ? 'Frequently Asked Questions' : '常见问题'}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        {language === 'en' ? 'What if I make a mistake while writing a check?' : '如果我填写错误怎么办？'}
                      </h4>
                      <p className="mt-1">
                        {language === 'en' 
                          ? 'If you make an error while writing a check, the best practice is to void that check (write "VOID" across it or cut it up) and start with a new one. Making corrections on a check might cause the bank to reject it.' 
                          : '如果您在填写支票时出错，最好的做法是销毁该支票（剪碎或撕毁），并使用新支票重新填写。在支票上涂改可能导致银行拒绝接受。'}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        {language === 'en' ? 'Can I postdate a check?' : '我可以提前填写支票吗？'}
                      </h4>
                      <p className="mt-1">
                        {language === 'en' 
                          ? 'Yes, you can write a future date on a check, known as "postdating." However, be aware that some banks may still process the check immediately, so this is not a guaranteed way to delay payment.' 
                          : '是的，您可以填写"远期支票"，即在支票上标注未来的日期。但请注意，有些银行可能会忽略日期而立即处理支票，因此这不是延迟付款的绝对保证。'}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        {language === 'en' ? 'How long is a check valid?' : '支票有效期是多久？'}
                      </h4>
                      <p className="mt-1">
                        {language === 'en' 
                          ? 'Generally, personal checks are valid for 6 months (180 days). However, this can vary by country and bank. If a check is older than the valid period, the recipient should contact the issuer for a new check.' 
                          : '通常，个人支票的有效期为6个月。但这可能因国家和银行而异。如果支票超过有效期，收款人应联系出票人请求新支票。'}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        {language === 'en' ? 'Do I need to write my address on the check?' : '我需要在支票上写我的地址吗？'}
                      </h4>
                      <p className="mt-1">
                        {language === 'en' 
                          ? 'If your address is pre-printed on the check, you don\'t need to write it again. If not, it\'s advisable to add your address as it helps verify your identity and allows the recipient to contact you if necessary.' 
                          : '如果您的地址已预先印在支票上，则无需再次填写。如果没有，建议添加您的地址，这有助于确认您的身份并方便收款人在必要时联系您。'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-between">
              <Link href="/simulator" className="text-blue-600 hover:text-blue-800 font-medium">
                {language === 'en' ? 'Try Check Simulator →' : '尝试支票模拟器 →'}
              </Link>
              <Link href="/errors" className="text-blue-600 hover:text-blue-800 font-medium">
                {language === 'en' ? 'View Common Errors →' : '查看常见错误 →'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 