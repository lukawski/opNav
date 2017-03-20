class OPNav {
  constructor (tag, menuId) {
    this._tag = tag
    this._menu = document.getElementById(menuId)
  }

  _findElements () {
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

      let elId = this._attachId(element)

      if (subSections.length > 0) {
        menuContent += `<li><a href="#${elId}"> ${label} </a><ul>`

        for (let sub of subSections) {
          let subLabel = sub.getAttribute('data-label')

          let subId = this._attachId(sub)
          menuContent += `<li><a href="#${subId}"> ${subLabel} </a></li>`
        }

        menuContent += '</ul></li>'
      } else {
        menuContent += `<li><a href="#${elId}"> ${label} <a/></li>`
      }
    }

    menuContent += '</ul>'
    return menuContent
  }

  _attachId (element) {
    var r = Math.floor(Math.random() * 1000)
    var id = `op-nav-${r}`
    element.setAttribute('id', id)

    return id
  }

  _fillElement () {
    this._menu.innerHTML = this._createTemplate()
  }

  init () {
    this._fillElement()
  }
}
