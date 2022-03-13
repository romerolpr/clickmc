import element from '/src/_assets/css/modules/interactive.module.css';

const removeByClassName = (className, regexp) => {
    const elements = document.querySelectorAll(className)
    for ( let item of elements ) {
        item.className = item.className.replaceAll(new RegExp(regexp, 'gm'), '')
    }
}

const selectThisOption = (e, selected) => {

    if (selected != undefined) {
        return element.selected
    }

    removeByClassName(element.selected)

    if (e.target.className.indexOf(element.selected) !== -1) {
        return e.target.className.replaceAll(new RegExp(element.selected, 'gm'), '')
    }

    return `${e.target.className} ${element.selected}`
}

export { 
    selectThisOption, 
    removeByClassName 
}