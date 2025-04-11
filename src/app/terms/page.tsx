'use client';

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/app/context/LanguageContext";

export default function TermsPage() {
  const { t, language } = useLanguage();
  
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* 页面标题 */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('terms.title', '支票术语解释')}</h1>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-lg max-w-prose mx-auto">
                <p className="text-base text-center leading-6 text-blue-600 font-semibold tracking-wide uppercase">
                  {language === 'en' ? 'TERMINOLOGY GUIDE' : '术语指南'}
                </p>
                <h2 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {language === 'en' ? 'Understanding Check Terminology' : '理解支票相关术语'}
                </h2>
                <p className="mt-4 text-xl text-gray-500 leading-8">
                  {language === 'en' 
                    ? 'Learning check-related terminology helps you better understand the check writing process and banking transactions. Below are common terms related to checks and their explanations.'
                    : '了解支票相关的术语有助于您更好地理解支票填写过程和银行交易。以下是与支票相关的常见术语及其解释。'}
                </p>
              </div>

              <div className="mt-10 prose prose-blue prose-lg text-gray-500 mx-auto">
                {/* 术语列表 */}
                <div className="space-y-12">
                  {/* 支票基本术语 */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700">
                      {language === 'en' ? 'Basic Check Terminology' : '支票基本术语'}
                    </h3>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Check' : '支票'} (Check)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'A written instruction that orders a bank to pay a specific amount from the drawer\'s account to a designated payee. A check is a promise of payment, not currency itself.'
                            : '一种书面指令，要求银行从出票人的账户中支付特定金额给指定的收款人。支票是一种付款承诺，不是货币本身。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Drawer/Issuer' : '出票人'} (Drawer/Issuer)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The person or entity who writes the check and owns the bank account from which the funds will be drawn.'
                            : '签发支票的人或实体，即银行账户的所有者，授权从其账户中提取资金的人。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Payee' : '收款人'} (Payee)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The recipient named on the check who will receive the payment. This is the person or entity written on the "Pay to the order of" line.'
                            : '支票上指定的收款方，可以是个人、公司或其他实体。支票上"付给谁"那一行填写的就是收款人。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Drawee Bank' : '付款银行'} (Drawee Bank)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The bank of the drawer responsible for paying the check amount from the drawer\'s account. The bank\'s name and information are printed on the check.'
                            : '出票人的银行，负责从出票人的账户中支付支票金额。支票上印有该银行的名称和信息。'}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* 支票组成部分 */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700">
                      {language === 'en' ? 'Check Components' : '支票组成部分'}
                    </h3>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Date Line' : '日期行'} (Date Line)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The area in the upper right corner of the check where the date the check is written is entered. Standard format is month/day/year (MM/DD/YYYY).'
                            : '支票右上角用于填写支票签发日期的部分。标准格式为月/日/年（MM/DD/YYYY）。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Pay to the Order of Line' : '收款人行'} (Pay to the Order of Line)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The line on the check where the name of the payee (person or entity receiving the money) is written. Usually starts with "Pay to the Order of".'
                            : '支票上用于填写收款人姓名或实体名称的行。通常以"Pay to the Order of"开头。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Amount Box' : '金额框'} (Amount Box)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The box on the right side of the check with a "$" symbol where the numerical amount of the check is written.'
                            : '支票右侧带有"$"符号的方框，用于填写支票金额的数字表示。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Amount Line' : '金额行'} (Amount Line)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The line below the "Pay to the Order of" line where the amount is spelled out in words, usually ending with "Dollars".'
                            : '位于"Pay to the Order of"行下方，用于以文字形式拼写支票金额的横线，通常以"Dollars"结尾。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Memo Line' : '备注行'} (Memo Line)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The "For" or "Memo" line in the lower left corner of the check used to indicate the purpose of the check or reference information, such as an invoice number or transaction purpose.'
                            : '支票左下角的"For"或"Memo"行，用于注明支票用途或参考信息，如账单号或交易目的。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Signature Line' : '签名行'} (Signature Line)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The line in the bottom right corner of the check where the drawer signs to authorize the payment.'
                            : '支票右下角的横线，供出票人签名，确认授权付款的地方。'}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* 银行识别信息 */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700">
                      {language === 'en' ? 'Bank Identification Information' : '银行识别信息'}
                    </h3>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'MICR Line' : '磁码行'} (MICR Line)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The line of special characters at the bottom of the check containing bank codes, account numbers, and check numbers, printed in magnetic ink for machine reading.'
                            : '支票底部的一行特殊字符，包含银行代码、账号和支票号码，使用磁性墨水印刷，便于机器快速读取处理。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Check Number' : '支票号码'} (Check Number)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The sequential number printed on the upper right corner and on the MICR line of the check, used to identify and track specific checks.'
                            : '印在支票右上角和底部磁码行上的序列号，用于识别和追踪特定支票。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Routing Number' : '银行代码'} (Routing Number)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'A nine-digit code that identifies the financial institution where the drawer\'s account is held, usually the leftmost number on the MICR line. This code is crucial for bank-to-bank transfers.'
                            : '九位数的代码，用于识别付款银行，通常位于磁码行的最左侧。该代码对银行间转账至关重要。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Account Number' : '账号'} (Account Number)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The number that identifies the drawer\'s specific account at the financial institution, usually found in the middle or right section of the MICR line.'
                            : '出票人在银行的账户号码，通常位于磁码行的中间或靠右位置，用于确定资金来源账户。'}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* 支票处理术语 */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700">
                      {language === 'en' ? 'Check Processing Terminology' : '支票处理术语'}
                    </h3>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Endorsement' : '背书'} (Endorsement)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The act of signing on the back of a check by the payee, indicating acceptance of the check and agreement to deposit or cash it. Proper endorsement is a necessary step in check processing.'
                            : '收款人在支票背面签名的行为，表示接受支票并同意存入或兑现。正确的背书是支票处理的必要步骤。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Blank Endorsement' : '空白背书'} (Blank Endorsement)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'An endorsement where the payee only signs their name on the back of the check without any restrictive notation. This type of endorsement allows the check to be deposited or cashed by anyone who holds it, which can be risky.'
                            : '收款人仅在支票背面签名，没有任何限制说明。这种背书使支票可以由任何持有人存入或兑现，存在风险。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Restrictive Endorsement' : '限制性背书'} (Restrictive Endorsement)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'An endorsement that includes specific instructions such as "For Deposit Only" or "For Deposit to Account #..." along with the signature, adding security by preventing others from cashing the check.'
                            : '在支票背面签名并注明"仅供存入"或"存入账户"等限制性文字，增加安全性，防止他人现金兑现。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Check Clearing' : '支票清算'} (Check Clearing)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The process of transferring a check from the receiving bank to the paying bank and the final deduction of funds from the drawer\'s account. Modern clearing systems mostly use electronic methods.'
                            : '支票从收款银行转移到付款银行并最终从出票人账户中扣款的过程。现代清算系统大多使用电子方式处理。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Hold Period' : '资金冻结期'} (Hold Period)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The waiting period set by a bank after a check is deposited before the funds are available for use. Larger checks or checks from non-local banks typically have longer hold periods.'
                            : '银行在支票存入后，在资金可供使用前设定的等待期。大额支票或非本地银行的支票通常有较长的冻结期。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Check Stub' : '支票存根'} (Check Stub)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'The record portion of a checkbook that remains after a check is torn out, used to record check date, payee, amount, and purpose for the drawer\'s record-keeping.'
                            : '支票簿中与支票相连的记录部分，用于记录支票日期、收款人、金额和用途，便于出票人追踪支票使用情况。'}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* 特殊支票类型 */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700">
                      {language === 'en' ? 'Special Check Types' : '特殊支票类型'}
                    </h3>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Cashier\'s Check' : '本票'} (Cashier's Check)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'A check issued directly by a bank, where funds are guaranteed by the bank itself. More secure and reliable than personal checks, often used for large transactions.'
                            : '由银行直接签发的支票，资金由银行自身提供担保，比个人支票更为安全可靠，通常用于大额交易。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Certified Check' : '保付支票'} (Certified Check)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'A personal check that has been verified by the drawer\'s bank as having sufficient funds in the account. The bank stamps or marks the check as certified and temporarily freezes the corresponding amount.'
                            : '由出票人的银行证明其账户中有足够资金支付该支票的个人支票，银行会在支票上盖章证明并暂时冻结相应金额。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Traveler\'s Check' : '旅行支票'} (Traveler's Check)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'A prepurchased check of a fixed amount that requires the purchaser\'s signature twice (when purchasing and when cashing), primarily used for financial security while traveling.'
                            : '预先购买的固定金额支票，需要购买者两次签名（购买时和兑现时），主要用于旅行时的资金安全。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Post-dated Check' : '远期支票'} (Post-dated Check)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'A check written with a future date, theoretically meant to be cashed or deposited only on or after that date, though actual enforcement may vary depending on bank policies.'
                            : '日期填写为未来某日的支票，理论上应在该日期后才能兑现，但实际执行可能因银行政策而异。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Bounced Check/NSF Check' : '空头支票'} (Bounced Check/NSF Check)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'A check that cannot be honored because of insufficient funds in the account. Writing bounced checks can result in fees, account closure, and even legal consequences in some cases.'
                            : '因账户资金不足而无法兑现的支票。开具空头支票可能导致罚款、账户关闭，甚至在某些情况下承担法律责任。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Stop Payment Check' : '止付支票'} (Stop Payment Check)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'A check for which the drawer has issued instructions to the bank to stop payment on a check that has been written but not yet cashed. Usually involves a fee and has time limitations.'
                            : '出票人向银行发出指令，阻止支付已开出但尚未兑现的支票。通常需要支付手续费，且有时间限制。'}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* 电子支付相关术语 */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700">
                      {language === 'en' ? 'Electronic Payment Terminology' : '电子支付相关术语'}
                    </h3>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'E-Check' : '电子支票'} (E-Check)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'An electronic version of a traditional paper check that authorizes the transfer of funds from the drawer\'s account to the payee\'s account electronically, reducing processing time and costs.'
                            : '传统纸质支票的电子版本，通过电子方式授权从出票人账户转账到收款人账户，减少处理时间和成本。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Mobile Check Deposit' : '移动支票存储'} (Mobile Check Deposit)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'A service that allows depositing checks by taking photos with a smartphone app and uploading them to the bank\'s system, eliminating the need to visit a bank or ATM in person.'
                            : '通过智能手机应用拍摄支票照片并上传到银行系统进行存储的服务，无需亲自前往银行或ATM。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'Check Image Replacement' : '支票图像替代'} (Check Image Replacement)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'A system where electronic images of checks are used instead of the physical checks for processing and record-keeping, speeding up the clearing process and reducing paper handling.'
                            : '用支票的电子图像代替实体支票进行处理和记录的系统，加速清算过程并减少纸质处理。'}
                        </dd>
                      </div>
                      <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {language === 'en' ? 'ACH - Automated Clearing House' : '自动清算所'} (ACH)
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {language === 'en' 
                            ? 'An electronic network for financial transactions that processes large volumes of credit and debit transactions, including direct deposits, bill payments, and business-to-business transfers.'
                            : '电子支付网络，用于处理大量的信贷和借记交易，包括直接存款、账单支付和企业间转账等。'}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* 支票安全提示 */}
                <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-700">
                    {language === 'en' ? 'Check Security Terms and Tips' : '支票安全术语与提示'}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 font-bold mr-2">•</span>
                      <span>
                        <strong className="text-gray-900">
                          {language === 'en' ? 'Security Features' : '防伪特征'} (Security Features):
                        </strong>
                        <span className="text-gray-600">
                          {language === 'en' 
                            ? ' Modern checks typically include multiple security measures such as microprinting, security watermarks, thermochromic ink, and holograms to prevent forgery.'
                            : ' 现代支票通常包含多种防伪措施，如微型印刷、安全水印、热敏墨水和全息图等，用于防止伪造。'}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 font-bold mr-2">•</span>
                      <span>
                        <strong className="text-gray-900">
                          {language === 'en' ? 'Check Fraud' : '支票欺诈'} (Check Fraud):
                        </strong>
                        <span className="text-gray-600">
                          {language === 'en' 
                            ? ' Any illegal activity involving checks, including forgery, alteration, theft, or unauthorized use of checks. Understanding preventive measures is crucial for self-protection.'
                            : ' 任何涉及支票的非法活动，包括伪造、修改、盗窃或未经授权使用支票。了解防范措施对保护自己至关重要。'}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 font-bold mr-2">•</span>
                      <span>
                        <strong className="text-gray-900">
                          {language === 'en' ? 'Secure Deposit Envelope' : '凭证信封'} (Secure Deposit Envelope):
                        </strong>
                        <span className="text-gray-600">
                          {language === 'en' 
                            ? ' Special envelopes used for ATM deposits that provide additional privacy and security by preventing others from seeing check information.'
                            : ' 用于ATM存款的特殊信封，提供额外的隐私和安全性，防止他人看到支票信息。'}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 font-bold mr-2">•</span>
                      <span>
                        <strong className="text-gray-900">
                          {language === 'en' ? 'Positive Pay' : '正面截留背书'} (Positive Pay):
                        </strong>
                        <span className="text-gray-600">
                          {language === 'en' 
                            ? ' A fraud prevention service offered by banks where the customer provides details of issued checks to the bank, which then verifies this information before paying checks.'
                            : ' 银行提供的欺诈防范服务，客户向银行提供已开出支票的详细信息，银行在支付前核对支票信息。'}
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-between">
              <Link href="/errors" className="text-blue-600 hover:text-blue-800 font-medium">
                {language === 'en' ? '← View Common Errors' : '← 查看常见错误'}
              </Link>
              <Link href="/steps" className="text-blue-600 hover:text-blue-800 font-medium">
                {language === 'en' ? 'Back to Writing Steps →' : '回到填写步骤 →'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 