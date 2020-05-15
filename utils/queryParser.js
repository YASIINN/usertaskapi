const {Op} = require("sequelize");
let QueryParser={
    parseQuery(parser) {
       let parsedQuery = {}
        parser.forEach((item) => {
            if (item.Operation == "EQ") {
               parsedQuery[item.PropertyName] = {
                    [Op.eq]: item.PropertyValue
                }
            } else if (item.Operation == "CT") {
                parsedQuery[item.PropertyName] = {
                    [Op.like]: '%' + item.PropertyValue + '%'
                }
            } else if (item.Operation == "GT") {
               parsedQuery[item.PropertyName] = {
                    [Op.gt]: item.PropertyValue
                }
            }else if(item.Operation=="IN"){
                parsedQuery[item.PropertyName] = {
                    [Op.in]: [item.PropertyValue]
                }
            }
        })
        console.log("bak",parsedQuery)
        return parsedQuery
    }
}


module.exports = QueryParser
