class OPNav {
  constructor (tag, menuId) {
    this._tag = tag
    this._menu = document.getElementById(menuId)
  }

  _findElements () {
    console.log(this._tag)
    let sections = document.querySelectorAll(`${this._tag}[data-section="true"]`)
    if (sections.length < 1) return console.error('Couldn\'t find elements')

    return sections
  }

  _createTemplate () {
    var menuContent = '<ul>'
    var sections = this._findElements()
    for (let element of sections) {
      let label = element.getAttribute('data-label')
      let subSections = element.querySelectorAll('section[data-sub-section="true"]')

      if (subSections.length > 0) {
        menuContent += `<li> ${label} <ul>`
        
        for (let sub of subSections) {
          let subLabel = sub.getAttribute('data-label')
          menuContent += `<li> ${subLabel} </li>`
        }

        menuContent += '</ul> </li>'
      } else {
        menuContent += `<li> ${label} </li>`
      }
    }

    menuContent += '</ul>'
    return menuContent
  }

  _fillElement () {
    this._menu.innerHTML = this._createTemplate()
  }

  init () {
    this._fillElement()
  }
}
