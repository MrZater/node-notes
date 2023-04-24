const validate = require('validate.js')
const moment = require('moment')
validate.extend(validate.validators.datetime, {
    /**
     * 该函数会自动用于日期格式转换
     * 他会在验证时自动触发，他需要将任何格式转换成时间戳返回
     * 如果无法转换，则返回NaN
     * @param {*} value 需要转换的值
     * @param {*} options 针对某个属性的验证配置
     */
    parse(value, options) {
        let format = ['YYYY-MM-DD HH:mm:ss', 'YYYY-M-D H:m:s', 'x']
        if (options.dateOnly) {
            format = ['YYYY-MM-DD', 'YYYY-M-D', 'x']
        }
        return +moment.utc(value, format, true)
    },
    /**
     * 显示错误信息时，使用的显示字符串
     * @param {*} value 需要转换的值
     * @param {*} options 针对某个属性的验证配置
     */
    format(value, options) {
        let format = 'YYYY-MM-DD HH:mm:ss'
        if (options.dateOnly) {
            let format = 'YYYY-MM-DD'
        }
        return moment.utc(value).format()
    }
})