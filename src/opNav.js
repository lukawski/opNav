class Menu {
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
      let subSection = element.querySelectorAll('section[data-sub-section="true"]')

      if (subSection.length > 0) {
        let subLabel = subSection[0].getAttribute('data-label')
        menuContent += `<li> ${label} <ul> <li> ${subLabel} </li> </ul> </li>`
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
