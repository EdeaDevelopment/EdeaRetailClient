/* eslint-disable no-unused-vars */
/* eslint-disable indent */
// Ready translated locale messages
const messages = {
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  },
  en: {
    message: {
      hello: 'hello componen454ft124',
      subTotal: 'SubTotal',
      currency: 'USD',
      coupons: 'coupons',
      loading: 'loading...',
      implementpoint: 'Implement Points',
      continuetopay: 'Checkout',
      removeitemquestion: 'האם אתה בטוח שאתה רוצה להסיר את הפריט',
      reciptemail: 'Email for recipt',
      payingiftcard: 'Pay with Gift Card',
      payincreditcard: 'Pay with Credit Card',
      cardnumber: 'Card number',
      serialnumber: 'Serial number',
      cancel: 'Cancel',
      approvepayment: 'Approve Payment',
      selectBranch: 'Select Branch'
    }
  },
  he: {
    message: {
      hello: 'שלום',
      subTotal: 'סכום ביניים',
      currencySymbol: 'ש"ח',
      coupons: 'קופונים',
      implementpoint: 'מימוש נקודות',
      continuetopay: 'המשך לתשלום',
      removeitemquestion: 'האם אתה בטוח שאתה רוצה להסיר את הפריט',
      loading: '...טוען',
      reciptemail: 'אי מייל לשליחת קבלה',
      payingiftcard: 'תשלום בכרטיס מתנה',
      payincreditcard: 'תשלום בכרטיס אשראי',
      cardnumber: 'מספר כרטיס',
      serialnumber: 'מספר סידורי',
      cancel: 'ביטול',
      approvepayment: 'אישור תשלום',
      selectBranch: 'בחר סניף'
    }
  }
}

const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency',
      currency: 'ILS',
      currencyDisplay: 'symbol'
    }
  },
  'he': {
    currency: {
      style: 'currency',
      currency: 'ILS',
      currencyDisplay: 'symbol'
    }
  },
  'ja-JP': {
    currency: {
      style: 'currency',
      currency: 'JPY',
      currencyDisplay: 'symbol'
    }
  }
}

module.exports = {
  messages,
  numberFormats
}
