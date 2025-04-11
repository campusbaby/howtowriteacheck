"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // 通用翻译
  'nav.home': {
    en: 'Home',
    zh: '首页'
  },
  'nav.simulator': {
    en: 'Simulator',
    zh: '模拟器'
  },
  'nav.steps': {
    en: 'Steps',
    zh: '步骤'
  },
  'nav.errors': {
    en: 'Errors',
    zh: '常见错误'
  },
  'nav.terms': {
    en: 'Terms',
    zh: '术语'
  },
  // 模拟器页面翻译
  'simulator.title': {
    en: 'Check Writing Simulator',
    zh: '支票填写模拟器'
  },
  'simulator.interactive': {
    en: 'INTERACTIVE PRACTICE',
    zh: '互动练习'
  },
  'simulator.try': {
    en: 'Try Writing a Check',
    zh: '尝试填写支票'
  },
  'simulator.description': {
    en: 'Practice writing checks in our simulator below. Fill in all fields correctly and click "Validate Check" to verify your work.',
    zh: '在下方的模拟器中练习填写支票。正确填写所有字段，然后点击"验证支票"按钮确认您的填写是否正确。'
  },
  'simulator.date': {
    en: 'Date',
    zh: '日期'
  },
  'simulator.payTo': {
    en: 'Pay to the order of:',
    zh: '收款人:'
  },
  'simulator.payToPlaceholder': {
    en: 'Recipient Name',
    zh: '收款人姓名'
  },
  'simulator.amountWords': {
    en: 'Amount in words',
    zh: '金额大写'
  },
  'simulator.dollars': {
    en: 'DOLLARS',
    zh: '美元'
  },
  'simulator.memo': {
    en: 'Memo',
    zh: '备注'
  },
  'simulator.memoPlaceholder': {
    en: 'Purpose (optional)',
    zh: '用途说明（可选）'
  },
  'simulator.signature': {
    en: 'Signature',
    zh: '签名'
  },
  'simulator.signaturePlaceholder': {
    en: 'Your Signature',
    zh: '您的签名'
  },
  'simulator.validate': {
    en: 'Validate Check',
    zh: '验证支票'
  },
  'simulator.reset': {
    en: 'Reset',
    zh: '重置'
  },
  'simulator.success': {
    en: 'Check filled out correctly!',
    zh: '支票填写正确！'
  },
  'simulator.congrats': {
    en: 'Congratulations, you have successfully filled out a valid check.',
    zh: '恭喜，您已成功填写了有效的支票。'
  },
  'simulator.date_value': {
    en: 'Date:',
    zh: '日期:'
  },
  'simulator.recipient': {
    en: 'Recipient:',
    zh: '收款人:'
  },
  'simulator.amount': {
    en: 'Amount:',
    zh: '金额:'
  },
  'simulator.purpose': {
    en: 'Purpose:',
    zh: '用途:'
  },
  'simulator.errors': {
    en: 'Check has errors',
    zh: '支票填写有误'
  },
  'simulator.fix': {
    en: 'Please fix the following errors:',
    zh: '请修正以下错误：'
  },
  'simulator.error.date': {
    en: 'Please enter the date',
    zh: '请填写日期'
  },
  'simulator.error.payTo': {
    en: 'Please enter the recipient name',
    zh: '请填写收款人姓名'
  },
  'simulator.error.amountNumber': {
    en: 'Please enter the amount (in numbers)',
    zh: '请填写金额（数字）'
  },
  'simulator.error.amountWords': {
    en: 'Please enter the amount (in words)',
    zh: '请填写金额（大写）'
  },
  'simulator.error.signature': {
    en: 'Please sign the check',
    zh: '请在支票上签名'
  },
  'simulator.error.date_format': {
    en: 'Date must be in MM/DD/YYYY format',
    zh: '日期必须使用MM/DD/YYYY格式'
  },
  'simulator.error.amount_mismatch': {
    en: 'The numerical amount and written amount must match',
    zh: '数字金额和大写金额必须一致'
  },
  'simulator.tips.title': {
    en: 'Tips for Writing Checks',
    zh: '填写支票的提示'
  },
  // terms 页面翻译
  'terms.title': {
    en: 'Check Terminology',
    zh: '支票术语解释'
  },
  'terms.intro': {
    en: 'Understanding the terminology related to checks is essential for proper check writing and processing.',
    zh: '了解与支票相关的术语对于正确书写和处理支票至关重要。'
  },
  'terms.check': {
    en: 'Check',
    zh: '支票'
  },
  'terms.check.desc': {
    en: 'A written, dated, and signed instrument that contains an unconditional order from the drawer that directs a bank to pay a definite sum of money to a payee.',
    zh: '一种书面的、注明日期并经签名的票据，包含出票人发出的无条件指令，指示银行向收款人支付确定金额的款项。'
  },
  'terms.drawer': {
    en: 'Drawer/Issuer',
    zh: '出票人'
  },
  'terms.drawer.desc': {
    en: 'The person or entity who writes the check and has the bank account from which the money will be drawn.',
    zh: '开具支票并拥有将从中提取资金的银行账户的个人或实体。'
  },
  'terms.payee': {
    en: 'Payee',
    zh: '收款人'
  },
  'terms.payee.desc': {
    en: 'The person or entity to whom the check is made payable.',
    zh: '支票上指定的收款的个人或实体。'
  },
  'terms.amount': {
    en: 'Amount',
    zh: '金额'
  },
  'terms.amount.desc': {
    en: 'The sum of money to be paid, written both in numbers and words on the check.',
    zh: '需支付的款项，在支票上同时以数字和文字形式表示。'
  },
  'terms.date': {
    en: 'Date',
    zh: '日期'
  },
  'terms.date.desc': {
    en: 'The date when the check is written, which may affect when it can be cashed or deposited.',
    zh: '支票开具的日期，可能会影响支票何时可以兑现或存入。'
  },
  'terms.signature': {
    en: 'Signature',
    zh: '签名'
  },
  'terms.signature.desc': {
    en: 'The handwritten name of the drawer, which authorizes the bank to honor the check.',
    zh: '出票人的手写姓名，授权银行承兑支票。'
  },
  'terms.memo': {
    en: 'Memo',
    zh: '备注'
  },
  'terms.memo.desc': {
    en: 'An optional note on the check that indicates the purpose of the payment.',
    zh: '支票上的可选注释，表明付款的目的。'
  },
  'terms.endorsement': {
    en: 'Endorsement',
    zh: '背书'
  },
  'terms.endorsement.desc': {
    en: 'The payee\'s signature on the back of the check, required before the check can be cashed or deposited.',
    zh: '收款人在支票背面的签名，在支票可以兑现或存入之前必须完成。'
  },
  'terms.routing': {
    en: 'Routing Number',
    zh: '银行路由号码'
  },
  'terms.routing.desc': {
    en: 'A nine-digit number that identifies the financial institution where the drawer\'s account is held.',
    zh: '一个九位数的号码，用于识别出票人账户所在的金融机构。'
  },
  'terms.account': {
    en: 'Account Number',
    zh: '账号'
  },
  'terms.account.desc': {
    en: 'The number that identifies the drawer\'s specific account at the financial institution.',
    zh: '在金融机构识别出票人特定账户的号码。'
  },
  'terms.micr': {
    en: 'MICR Line',
    zh: 'MICR行'
  },
  'terms.micr.desc': {
    en: 'The line of numbers and symbols at the bottom of the check, printed in magnetic ink for automated processing.',
    zh: '支票底部的数字和符号行，以磁性墨水印刷以便自动处理。'
  },
  'terms.post': {
    en: 'Post-dated Check',
    zh: '远期支票'
  },
  'terms.post.desc': {
    en: 'A check with a future date, which should not be cashed or deposited until that date.',
    zh: '注明未来日期的支票，在该日期之前不应兑现或存入。'
  },
  'terms.stale': {
    en: 'Stale-dated Check',
    zh: '过期支票'
  },
  'terms.stale.desc': {
    en: 'A check that was written too long ago (typically more than six months) and may not be honored by the bank.',
    zh: '开具时间太久的支票（通常超过六个月），银行可能不会承兑。'
  },
  'terms.void': {
    en: 'Void Check',
    zh: '作废支票'
  },
  'terms.void.desc': {
    en: 'A check that has been marked as invalid and cannot be used for payment.',
    zh: '已标记为无效且不能用于付款的支票。'
  },
  'terms.certified': {
    en: 'Certified Check',
    zh: '保付支票'
  },
  'terms.certified.desc': {
    en: 'A check that has been verified by the bank as having sufficient funds available in the drawer\'s account.',
    zh: '银行已验证出票人账户中有足够资金的支票。'
  },
  'terms.cashiers': {
    en: 'Cashier\'s Check',
    zh: '银行本票'
  },
  'terms.cashiers.desc': {
    en: 'A check guaranteed by a bank, drawn on the bank\'s own funds, and signed by a cashier or teller.',
    zh: '由银行担保、从银行自有资金中提取并由出纳员签名的支票。'
  },
  'terms.personal': {
    en: 'Personal Check',
    zh: '个人支票'
  },
  'terms.personal.desc': {
    en: 'A check drawn against funds deposited in an individual\'s personal bank account.',
    zh: '从个人银行账户存款中提取的支票。'
  },
  'terms.business': {
    en: 'Business Check',
    zh: '商业支票'
  },
  'terms.business.desc': {
    en: 'A check drawn against funds deposited in a business bank account.',
    zh: '从商业银行账户存款中提取的支票。'
  },
  'terms.traveler': {
    en: 'Traveler\'s Check',
    zh: '旅行支票'
  },
  'terms.traveler.desc': {
    en: 'A preprinted, fixed-amount check designed for travelers that require a signature to cash.',
    zh: '为旅行者设计的预印、固定金额的支票，需要签名才能兑现。'
  },
  'terms.money': {
    en: 'Money Order',
    zh: '汇票'
  },
  'terms.money.desc': {
    en: 'A financial instrument issued by a bank or other institution allowing the individual named on it to receive a specified amount of cash.',
    zh: '由银行或其他机构发行的金融工具，允许上面指定的个人收取特定金额的现金。'
  },
  'terms.switch': {
    en: 'Switch to English',
    zh: '切换到中文'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'zh',
  setLanguage: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string, fallback?: string) => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 