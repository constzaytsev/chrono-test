import * as chrono from 'chrono-node';

const test = (text, locale = 'en') => {
  return chrono[locale].parse(text, new Date(), { forwardDate: true })
}

export {
  test
}