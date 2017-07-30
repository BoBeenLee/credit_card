
export default function(value, previousValue) {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 4) {
      return `${onlyNums}-`;
    }
    if (onlyNums.length === 8) {
      return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}-`;
    }
    if (onlyNums.length === 12) {
      return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4, 8)}-${onlyNums.slice(
          8)}-`;
    }
  }
  if (onlyNums.length <= 4) {
    return onlyNums;
  }
  if (onlyNums.length <= 8) {
    return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}`;
  }
  if (onlyNums.length <= 12) {
    return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4, 8)}-${onlyNums.slice(
        8)}`;
  }
  return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4, 8)}-${onlyNums.slice(8, 12)}-${onlyNums.slice(12, 16)}`;
}