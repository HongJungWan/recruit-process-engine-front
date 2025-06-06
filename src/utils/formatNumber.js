/**
 * 숫자를 세 자리마다 콤마(,)를 찍어주는 헬퍼 함수
 * 
 * @param {number|string} value 
 * @returns {string}
 */
export function formatNumber(value) {
  const num = typeof value === 'string' ? parseInt(value, 10) : value
  if (isNaN(num)) return '-'
  return num.toLocaleString('ko-KR')
}
