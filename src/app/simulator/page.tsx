'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/app/context/LanguageContext';

export default function SimulatorPage() {
  const { t, language } = useLanguage();
  const [date, setDate] = useState('');
  const [payTo, setPayTo] = useState('');
  const [amountNumber, setAmountNumber] = useState('');
  const [amountWords, setAmountWords] = useState('');
  const [memo, setMemo] = useState('');
  const [signature, setSignature] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  // 格式化金额数字
  const formatAmount = (value: string) => {
    // 移除非数字和点号
    let cleaned = value.replace(/[^\d.]/g, '');
    
    // 确保只有一个小数点
    const decimalIndex = cleaned.indexOf('.');
    if (decimalIndex !== -1) {
      const beforeDecimal = cleaned.substring(0, decimalIndex + 1);
      const afterDecimal = cleaned.substring(decimalIndex + 1).replace(/\./g, '');
      cleaned = beforeDecimal + afterDecimal.substring(0, 2); // 最多两位小数
    }
    
    // 添加千位分隔符
    const parts = cleaned.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    return parts.join('.');
  };

  // 将数字转换为文字表示
  const convertToWords = (amount: string) => {
    if (!amount) return '';
    
    // 移除逗号和处理金额
    const cleanAmount = amount.replace(/,/g, '');
    const parts = cleanAmount.split('.');
    const dollarsOriginal = parseInt(parts[0]);
    let remainingDollars = dollarsOriginal;
    const cents = parts.length > 1 ? parseInt(parts[1].padEnd(2, '0').substring(0, 2)) : 0;
    
    if (isNaN(dollarsOriginal)) return '';
    
    if (language === 'zh') {
      // 中文版本逻辑
      const ones = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
      const teens = ['十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九'];
      const tens = ['', '十', '二十', '三十', '四十', '五十', '六十', '七十', '八十', '九十'];
      
      const numToWords = (num: number) => {
        if (num < 10) return ones[num];
        if (num < 20) return teens[num - 10];
        return tens[Math.floor(num / 10)] + ones[num % 10];
      };
      
      let result = '';
      
      if (dollarsOriginal === 0) {
        result = '零';
      } else {
        // 处理百万
        if (Math.floor(remainingDollars / 1000000) > 0) {
          result += numToWords(Math.floor(remainingDollars / 1000000)) + '百万';
          remainingDollars %= 1000000;
        }
        
        // 处理千
        if (Math.floor(remainingDollars / 1000) > 0) {
          result += numToWords(Math.floor(remainingDollars / 1000)) + '千';
          remainingDollars %= 1000;
        }
        
        // 处理百
        if (Math.floor(remainingDollars / 100) > 0) {
          result += numToWords(Math.floor(remainingDollars / 100)) + '百';
          remainingDollars %= 100;
        }
        
        // 处理十和个位
        if (remainingDollars > 0) {
          result += numToWords(remainingDollars);
        }
      }
      
      result += '元';
      
      // 处理分
      if (cents > 0) {
        const tenCents = Math.floor(cents / 10);
        const oneCents = cents % 10;
        
        if (tenCents > 0) {
          result += ones[tenCents] + '角';
        }
        
        if (oneCents > 0) {
          result += ones[oneCents] + '分';
        }
      } else {
        result += '整';
      }
      
      return result;
    } else {
      // 英文版本逻辑
      const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      
      const numToWords = (num: number) => {
        if (num < 20) return ones[num];
        const digit = num % 10;
        return tens[Math.floor(num / 10)] + (digit ? '-' + ones[digit] : '');
      };
      
      const convert = (num: number): string => {
        if (num === 0) return '';
        else if (num < 20) return ones[num];
        else if (num < 100) return numToWords(num);
        else if (num < 1000) return ones[Math.floor(num / 100)] + ' hundred ' + (num % 100 ? 'and ' + convert(num % 100) : '');
        else if (num < 1000000) return convert(Math.floor(num / 1000)) + ' thousand ' + (num % 1000 ? convert(num % 1000) : '');
        else return convert(Math.floor(num / 1000000)) + ' million ' + (num % 1000000 ? convert(num % 1000000) : '');
      };
      
      let result = dollarsOriginal === 0 ? 'zero' : convert(dollarsOriginal);
      
      // 首字母大写
      result = result.charAt(0).toUpperCase() + result.slice(1);
      
      // 添加美元和分
      if (cents > 0) {
        result += ` and ${cents}/100`;
      } else {
        result += ' and 00/100';
      }
      
      return result;
    }
  };

  // 处理金额变化
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatAmount(value);
    setAmountNumber(formattedValue);
    setAmountWords(convertToWords(formattedValue));
  };

  // 验证支票
  const validateCheck = () => {
    const newErrors: string[] = [];
    
    if (!date) {
      newErrors.push(t('simulator.error.date'));
    } else {
      // 验证日期格式是否为MM/DD/YYYY
      const dateFormatRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
      if (!dateFormatRegex.test(date)) {
        newErrors.push(t('simulator.error.date_format'));
      }
    }
    
    if (!payTo) {
      newErrors.push(t('simulator.error.payTo'));
    }
    
    if (!amountNumber) {
      newErrors.push(t('simulator.error.amountNumber'));
    }
    
    if (!amountWords) {
      newErrors.push(t('simulator.error.amountWords'));
    } else if (amountNumber && amountWords) {
      // 验证金额数字和金额大写是否一致
      const expectedWords = convertToWords(amountNumber);
      if (amountWords !== expectedWords) {
        newErrors.push(t('simulator.error.amount_mismatch'));
      }
    }
    
    if (!signature) {
      newErrors.push(t('simulator.error.signature'));
    }
    
    setErrors(newErrors);
    setSuccess(newErrors.length === 0);
    setShowFeedback(true);
  };

  // 重置表单
  const resetForm = () => {
    setDate('');
    setPayTo('');
    setAmountNumber('');
    setAmountWords('');
    setMemo('');
    setSignature('');
    setShowFeedback(false);
    setErrors([]);
    setSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* 页面标题 */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('simulator.title')}</h1>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-lg max-w-prose mx-auto">
                <p className="text-base text-center leading-6 text-blue-600 font-semibold tracking-wide uppercase">{t('simulator.interactive')}</p>
                <h2 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{t('simulator.try')}</h2>
                <p className="mt-4 text-xl text-gray-500 leading-8 text-center">
                  {t('simulator.description')}
                </p>
              </div>
              
              {/* 支票模拟器 - 美国版样式 */}
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-6 shadow-lg">
                  {/* 支票顶部 */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-1/2">
                      <div className="text-lg font-bold text-blue-800">FIRST NATIONAL BANK</div>
                      <div className="text-sm text-gray-600">1234 Main Street</div>
                      <div className="text-sm text-gray-600">Anytown, USA 12345</div>
                    </div>
                    <div className="w-1/3">
                      <div className="text-sm font-medium text-gray-600 mb-1">{t('simulator.date')}</div>
                      <input
                        type="text"
                        placeholder="MM/DD/YYYY"
                        className="w-full border-b-2 border-gray-400 bg-transparent px-2 py-1 focus:outline-none focus:border-blue-500"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {/* 支票收款人行 */}
                  <div className="mb-6">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-600 mr-2">{t('simulator.payTo')}</span>
                      <input
                        type="text"
                        placeholder={t('simulator.payToPlaceholder')}
                        className="flex-grow border-b-2 border-gray-400 bg-transparent px-2 py-1 focus:outline-none focus:border-blue-500"
                        value={payTo}
                        onChange={(e) => setPayTo(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {/* 支票金额 */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-2/3">
                      <input
                        type="text"
                        placeholder={t('simulator.amountWords')}
                        className="w-full border-b-2 border-gray-400 bg-transparent px-2 py-1 focus:outline-none focus:border-blue-500"
                        value={amountWords}
                        onChange={(e) => setAmountWords(e.target.value)}
                      />
                      <span className="text-sm text-gray-600 ml-1">{t('simulator.dollars')}</span>
                    </div>
                    <div className="w-1/4">
                      <div className="border-2 border-gray-400 rounded px-2 py-1 flex items-center">
                        <span className="text-gray-600 mr-1">$</span>
                        <input
                          type="text"
                          placeholder="0.00"
                          className="flex-grow bg-transparent focus:outline-none"
                          value={amountNumber}
                          onChange={handleAmountChange}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* 支票底部信息 */}
                  <div className="flex justify-between items-end">
                    <div className="w-1/2">
                      <div className="text-sm font-medium text-gray-600 mb-1">{t('simulator.memo')}</div>
                      <input
                        type="text"
                        placeholder={t('simulator.memoPlaceholder')}
                        className="w-full border-b-2 border-gray-400 bg-transparent px-2 py-1 focus:outline-none focus:border-blue-500"
                        value={memo}
                        onChange={(e) => setMemo(e.target.value)}
                      />
                    </div>
                    <div className="w-1/3">
                      <div className="text-sm font-medium text-gray-600 mb-1">{t('simulator.signature')}</div>
                      <input
                        type="text"
                        placeholder={t('simulator.signaturePlaceholder')}
                        className="w-full border-b-2 border-gray-400 bg-transparent px-2 py-1 focus:outline-none focus:border-blue-500"
                        value={signature}
                        onChange={(e) => setSignature(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {/* 支票底部路由码、账号和支票号 */}
                  <div className="mt-8 border-t-2 border-gray-300 pt-2">
                    <div className="font-mono text-xs text-gray-500 tracking-widest">
                      ⑆123456789⑆ ⑆987654321⑆ ⑆0123⑆
                    </div>
                  </div>
                </div>
                
                {/* 操作按钮 */}
                <div className="mt-8 flex justify-center space-x-4">
                  <button
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={validateCheck}
                  >
                    {t('simulator.validate')}
                  </button>
                  <button
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    onClick={resetForm}
                  >
                    {t('simulator.reset')}
                  </button>
                </div>
                
                {/* 反馈信息 */}
                {showFeedback && (
                  <div className={`mt-8 p-4 rounded-md ${success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    {success ? (
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800">{t('simulator.success')}</h3>
                          <div className="mt-2 text-sm text-green-700">
                            <p>{t('simulator.congrats')}</p>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>{t('simulator.date_value')} {date}</li>
                              <li>{t('simulator.recipient')} {payTo}</li>
                              <li>{t('simulator.amount')} ${amountNumber} ({amountWords})</li>
                              {memo && <li>{t('simulator.purpose')} {memo}</li>}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">{t('simulator.errors')}</h3>
                          <div className="mt-2 text-sm text-red-700">
                            <p>{t('simulator.fix')}</p>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* 填写提示 - 美国版 */}
              <div className="mt-12 max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('simulator.tips.title')}</h3>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">
                        {language === 'en' 
                          ? "Date: Use current date in MM/DD/YYYY format" 
                          : "日期：使用当前日期，格式为 MM/DD/YYYY"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">
                        {language === 'en' 
                          ? "Pay to: Enter the full name of the recipient or company" 
                          : "收款人：填写完整的收款人姓名或公司名称"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">
                        {language === 'en' 
                          ? "Amount (numbers): Enter the exact amount with dollars and cents" 
                          : "金额（数字）：填写精确金额，包括美元和美分"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">
                        {language === 'en' 
                          ? "Amount (words): Spell out the dollar amount and add cents as a fraction (e.g. 'One hundred twenty-three and 45/100')" 
                          : "金额（大写）：用英文拼写美元金额，并以分数形式添加美分（例如 'One hundred twenty-three and 45/100'）"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">
                        {language === 'en' 
                          ? "Memo: Note the purpose of the check, such as 'Rent', 'Utilities', etc." 
                          : "备注：注明支票用途，如\"房租\"、\"水电费\"等"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">
                        {language === 'en' 
                          ? "Signature: Sign with your signature as registered with your bank" 
                          : "签名：使用您在银行登记的签名"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-between">
              <Link href="/steps" className="text-blue-600 hover:text-blue-800 font-medium">
                {language === 'en' ? 'View Detailed Steps →' : '查看详细步骤 →'}
              </Link>
              <Link href="/errors" className="text-blue-600 hover:text-blue-800 font-medium">
                {language === 'en' ? 'Learn Common Errors →' : '了解常见错误 →'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 