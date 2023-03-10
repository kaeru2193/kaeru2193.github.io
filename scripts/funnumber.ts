export class FunNumber {
    toOldFunNumber (input: number) {
        const oneNumbers = ["零","一","二","三","四","五","六","七","八","九"]
        const orderNumbers = ["","十","百","千","万"]
        const stringed = String(input)
        let output = ""
        for (let i = 0; i < stringed.length; i++) {
            const order = stringed.length - i - 1
            if (Number(stringed[i]) != 0) {
                if (stringed.length < 5 && stringed.length > 1 && Number(stringed[i]) == 1 && order + 1 == stringed.length) {
                    output += orderNumbers[order]
                } else {
                    output += oneNumbers[Number(stringed[i])] + orderNumbers[order]
                }
            }
        }
        if (input == 0) {
            return "零"
        }
        return output
    }
    toFunNumber(input: number) {
        const Numbers = ["零","一","二","三","四","五","六","七","八","九"]
        const stringed = String(input)
        let output = ""
        for (let i = 0; i < stringed.length; i++) {
            output += Numbers[Number(stringed[i])]
        }
        return output
    }
}