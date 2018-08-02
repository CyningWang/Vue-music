export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

// 获取vue标签的自定义属性，形如：[:data-key=val]
export function elData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return parseFloat(el.setAttribute(name, val))
  } else {
    return parseFloat(~~el.getAttribute(name))
  }
}