const lib = {
  arrayRemove (arr, value) {
    return arr.filter((ele) => {
      return (ele !== value)
    })
  },
  findKey (obj, value, compare = (a, b) => a === b) {
    return Object.keys(obj).find(k => compare(obj[k], value))
  }
}

export default lib
