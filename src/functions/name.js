let generator = require("project-name-generator")
exports.handler = async (event) => {
    let type = "dashed"
    let words = 2
    let alliterative = true
    let number = false
    try {
        ; ({
            type = type,
            words = words,
            alliterative = alliterative,
            number = number
        } = JSON.parse(event.body))

    } catch (error) {

    }

    console.log(type, words, alliterative, number)

    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
    }

    let name = generator({ words, number, alliterative })[type]

    return {
        headers,
        statusCode: 200,
        body: JSON.stringify({
            name
        })
    }
}