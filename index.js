function commonsubstrings(s1, s2) {
    //s1 is the longer one
    var tmp
    if (s1.length < s2.length) {
        tmp = s1
        s1 = s2
        s2 = tmp
    }

    var substrings = []
    var currentSubstring = ''
    for (var y = 0; y < s1.length + s2.length - 1; y++) {
        for (var i = 0; i < s1.length; i++) {
            var l1 = s1[i]
            var l2 = s2[s1.length * -1 + 1 + i + y]

            if (l1 && l1 == l2) {
                currentSubstring += l1
            } else if (currentSubstring.trim() || i == s1.length - 1) {
                if (currentSubstring.trim().length > 1) {
                    substrings.push(currentSubstring.trim())
                }
                currentSubstring = ''
            }
        }
    }

    return substrings
        .sort((a, b) => b.length - a.length)
        .filter((substring) => {
            return substrings.filter((innerSubstring) => {
                return substring !== innerSubstring && innerSubstring.indexOf(substring) > -1
            }).length == 0
        })
}

module.exports = commonsubstrings
