/**
 * Timestamp (ms 또는 초 단위) 를 "YYYY. MM. DD" 형식 문자열로 변환
 * 
 * @param {number|string|Date} timestamp - 밀리초(ms) 또는 초(sec) 형태의 타임스탬프, 혹은 Date 객체
 * @returns {string} "YYYY. MM. DD" 포맷 (예: "2025. 06. 07")
 */
export function formatTimestampToDate(timestamp) {
  let date;

  // 만약 이미 Date 객체라면 그대로 사용
  if (timestamp instanceof Date) {
    date = timestamp;
  } else {
    // 문자열이나 숫자일 때 숫자로 변환
    const t = typeof timestamp === "string" ? Number(timestamp) : timestamp;

    // 흔히 밀리초 단위인지, 초 단위인지 확인
    // 10자리(초 단위)라면 * 1000 해 주기 (예: 1670000000 등)
    if (!isNaN(t) && String(t).length === 10) {
      date = new Date(t * 1000);
    } else {
      date = new Date(t);
    }
  }

  if (isNaN(date.getTime())) {
    return ""; // 유효하지 않은 날짜인 경우 빈 문자열 반환
  }

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return `${yyyy}. ${mm}. ${dd}`;
}

/**
 * JS Date 객체를 "YYYY. MM. DD" 형식 문자열로 변환
 * 
 * @param {Date} dateObj - Date 인스턴스
 * @returns {string} "YYYY. MM. DD" 포맷 (예: "2025. 06. 07")
 */
export function formatDateToString(dateObj) {
  if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) {
    return "";
  }

  const yyyy = dateObj.getFullYear();
  const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
  const dd = String(dateObj.getDate()).padStart(2, "0");

  return `${yyyy}. ${mm}. ${dd}`;
}

/**
 * 숫자 또는 숫자 문자열에 천 단위 콤마(,) 추가
 * 
 * @param {number|string} value - 예: 1234567 또는 "1234567"
 * @returns {string} "1,234,567" 형태로 반환. 유효하지 않은 값이면 원본을 문자열로 반환
 */
export function numberWithCommas(value) {
  if (value == null) return "";
  const num = typeof value === "number" ? value : Number(value.toString().replace(/,/g, ""));
  if (isNaN(num)) {
    return String(value);
  }
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * 숫자 또는 숫자 문자열에서 콤마(,)를 제거한 뒤, 숫자 타입으로 반환
 * 
 * @param {string|number} value - "1,234" 등이 들어올 수 있음
 * @returns {number|null} 콤마 제거 후 숫자. 변환 불가 시 null 반환
 */
export function removeCommas(value) {
  if (value == null) return null;
  const str = String(value).replace(/,/g, "");
  const num = Number(str);
  return isNaN(num) ? null : num;
}

/**
 * 필수 입력(Required) 여부 검사
 * 
 * @param {string|any[]} value - 문자열 또는 배열 등
 * @returns {boolean} 값이 비어 있지 않으면 true, 비어 있거나 빈 배열 등일 경우 false
 */
export function validateRequired(value) {
  if (value == null) return false;
  if (typeof value === "string") {
    return value.trim() !== "";
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  return true;
}

/**
 * 이메일 형식 검사
 * 
 * @param {string} email
 * @returns {boolean} 유효한 이메일이면 true, 아니면 false
 */
export function validateEmail(email) {
  if (typeof email !== "string") return false;
  const response =
    /^[0-9A-Za-z]([_\-\.]?[0-9A-Za-z])*@[0-9A-Za-z]([_\-\.]?[0-9A-Za-z])*\.[A-Za-z]{2,}$/;
  return response.test(email.trim());
}

/**
 * 최소/최대 길이 검사 (문자열)
 * 
 * @param {string} str
 * @param {number} minLength - 최소 길이 (포함)
 * @param {number} maxLength - 최대 길이 (포함, 생략 시 무시)
 * @returns {{ valid: boolean, message: string|null }}
 */
export function validateLength(str, minLength, maxLength = Infinity) {
  const value = typeof str === "string" ? str.trim() : "";
  if (value.length < minLength) {
    return {
      valid: false,
      message: `최소 ${minLength}자 이상 입력해야 합니다.`,
    };
  }
  if (value.length > maxLength) {
    return {
      valid: false,
      message: `최대 ${maxLength}자 이하로 입력해야 합니다.`,
    };
  }
  return { valid: true, message: null };
}

/**
 * 숫자만 입력 여부 검사
 * 
 * @param {string|number} value
 * @returns {boolean} 숫자 형식(정수 혹은 실수)이면 true, 아니면 false
 */
export function validateNumber(value) {
  if (value == null) {
    return false;
  }
  const str = String(value).replace(/,/g, "");
  return !isNaN(str) && str.trim() !== "";
}

/**
 * 최소/최대 숫자 범위 검사 (Number)
 * 
 * @param {number|string} value - 숫자 또는 숫자 문자열
 * @param {number} min - 최소값 (포함)
 * @param {number} max - 최대값 (포함)
 * @returns {{ valid: boolean, message: string|null }}
 */
export function validateNumberRange(value, min, max) {
  const num = typeof value === "number" ? value : Number(String(value).replace(/,/g, ""));
  if (isNaN(num)) {
    return { valid: false, message: "유효한 숫자를 입력해주세요." };
  }
  if (num < min) {
    return { valid: false, message: `${min} 이상이어야 합니다.` };
  }
  if (num > max) {
    return { valid: false, message: `${max} 이하이어야 합니다.` };
  }
  return { valid: true, message: null };
}

/**
 * 유효성 검사 규칙을 한 번에 처리해 주는 범용 함수
 * (예: 빈 값 검사, 이메일 검사, 길이 검사, 숫자 범위 검사 등)
 * 
 * @param {Object} formData - 검증할 필드들이 있는 객체 ({ fieldName: value, ... })
 * @param {Object} rules - 규칙 객체 ({ fieldName: [ { fn: 함수, args: [인자들], message: "오류 시 메시지" }, ... ] })
 * @returns {{ isValid: boolean, errors: Object }} 
 */
 function validateFormFields(formData, rules) {
  const errors = {};
  let isValid = true;

  for (const field in rules) {
    const fieldRules = rules[field];
    const value = formData[field];

    for (const ruleObj of fieldRules) {
      const { fn, args, message } = ruleObj;
      const result =
        typeof fn === "function"
          ? fn(value, ...(Array.isArray(args) ? args : []))
          : { valid: true };

      // fn이 boolean을 반환하는 경우
      if (typeof result === "boolean") {
        if (!result) {
          errors[field] = message || "유효성 검증에 실패했습니다.";
          isValid = false;
          break;
        } else {
          errors[field] = null;
        }
      }
      // fn이 { valid, message } 형태로 반환하는 경우
      else if (typeof result === "object" && result !== null) {
        if (result.valid === false) {
          errors[field] = result.message || message || "유효성 검증에 실패했습니다.";
          isValid = false;
          break;
        } else {
          errors[field] = null;
        }
      }
      // 그 외 -> 기본 통과 처리
      else {
        errors[field] = null;
      }
    }
  }

  return { isValid, errors };
}
