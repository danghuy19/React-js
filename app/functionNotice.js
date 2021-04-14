s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

generateID = () => {
    return this.s4() + this.s4() + ' - ' + this.s4() + ' - ' + this.s4() + ' - ' + this.s4() + this.s4() + this.s4()
}

findIndex = (tasks,id) => {
    var result = -1
    if (tasks.length > 0) {
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index
            }
        })
    }
    return result
}

tasks = tasks.filter((task) => {
    return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
})

tasks.sort((a, b) => {
    if (a.name && b.name) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return sort.order
        } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -sort.order
        } else {
            return 0
        }
    }
})