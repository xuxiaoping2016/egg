(function ($) {
    jQuery.validate.addMethod("isStoreRule", function (value, element) {
        return this.optional(element) || /^(\-1)$|^[0-9]\d*$/.test(value);
    }, "请输入-1,0,正整数");
    jQuery.validate.addMethod("isStartDayCount", function (value, element) {
        return this.optional(element) || (/^[0-9]\d*$/.test(value) && value <= 500);
    }, "请输入0 - 500的整数");
    jQuery.validate.addMethod("isExpDayCount", function (value, element) {
        return this.optional(element) || (/^[1-9]\d*$/.test(value) && value <= 1500);
    }, "请输入1 - 1500的整数");
    jQuery.validate.addMethod("isServiceCount", function (value, element) {
        return this.optional(element) || (/^[0-9]\d*$/.test(value) && value <= 1000 && value >= 2);
    }, "请输入2 - 1000的整数");
    jQuery.validate.addMethod("isPositiveInteger", function (value, element) {
        var test = /^[1-9]\d*$/;
        return this.optional(element) || test.test(value);
    }, "请输入正整数");
    jQuery.validate.addMethod("isMoneyFloatHighRule", function (value, element) {
        var test = /^[0-9]+(\.\d{2})?$/;
        return this.optional(element) || test.test(value) && value != 0
    }, "最多输入2位小数");
    jQuery.validate.addMethod("verifyMealsFee", function (value, element) {
        return this.optional(element) || /^[0-9]{1,2}(\.[0-9]{1,2})?$/.test(value);
    }, "请输入 0 至 99.99 之间的数值");
    jQuery.validate.addMethod("isPositive", function (value, element) {
        return this.optional(element) || value > -1;
    }, "请输入正数");
    jQuery.validate.addMethod("isMoney", function (value, element) {
        var reg = new RegExp("^(([0-9]\\d*)(\\.\\d{1,2})?)$|(0\\.0?([1-9]\\d?))$ ");
        return this.optional(element) || reg.test(value);
    }, "最多输入2位小数");
    jQuery.validate.addMethod("isMoneyFloat", function (value, element) {
        var reg = new RegExp("^(([0-9]\\d*)(\\.\\d{1,1})?)$|(0\\.0?([1-9]\\d?))$ ");
        return this.optional(element) || reg.test(value);
    }, "最多输入1位小数");
    jQuery.validate.addMethod("isMoneyLength", function (value, element, param) {
        var length = param - 1;
        var reg = new RegExp("^(([0-9]\\d{0," + length + "})(\\.\\d{1,2})?)$|(0\\.0?([1-9]\\d?))$ ");
        return this.optional(element) || reg.test(value);
    }, "请输入 0 至 999999.99 之间的数值");
    jQuery.validate.addMethod("isMoneyAndNegativeOne", function (value, element) {
        var reg = new RegExp("^(([0-9]\\d*)(\\.\\d{1,2})?)$|(0\\.0?([1-9]\\d?))$ ");
        return this.optional(element) || reg.test(value) || value == -1;
    }, "最多输入2位小数");
    jQuery.validate.addMethod("restrictCharLength", function (value, element, param) {
        return !(value.replace(/[^\x00-\xff]/g, "aa").length > param[0])
    }, $.validate.format("不可超过{0}个字符({1}个汉字)"));
    jQuery.validate.addMethod("isNewPhone", function (value, element, param) {
        var length = value.length;
        var newPhone = /^\d[0-9-]{0,19}$/;
        return this.optional(element) || newPhone.test(value);
    }, $.validate.format("请输入正确的电话号码"));
    jQuery.validate.addMethod("isPhone", function (value, element, param) {
        var length = value.length;
        var phone = /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[1-9]\d{9})$)|(^400[016-9][0-9]{6}$)/;
        return this.optional(element) || phone.test(value);
    }, $.validate.format("请输入正确的电话号码"));
    jQuery.validate.addMethod("isMobile", function (value, element) {
        var length = value.length;
        var mobile = /^(1\d{10})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    }, "请正确填写您的手机号码");
    jQuery.validate.addMethod("isPsd", function (value, element) {
        var length = value.length;
        // var mobile = /^.{6,16}$/;
        // var mobile = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        var mobile = /^(?=.*[0-9].*)(?=.*[a-zA-Z].*)(?=.*[a-z].*).{8,16}$/;
        var reg = /^[^\s]+$/;
        return this.optional(element) || (mobile.test(value) && reg.test(value));
    }, "8-16位，必须包含数字和字母");
    jQuery.validate.addMethod("biggerOrEqual", function (value, element, param) {
        var downValue = jQuery('#' + param).val();
        return parseInt(value) >= parseInt(downValue) || value == -1;
    }, $.validate.format("输入大于前者数值"));
    jQuery.validate.addMethod("isMoneyOrMax", function (value, element) {
        var test = /^(\-1)$|^[0-9]+(\.\d{1,2})?$/;
        return this.optional(element) || test.test(value) && value != 0
    }, "请输入-1或者最多输入2位小数");
    jQuery.validate.addMethod("biggerThan", function (value, element, param) {
        var downValue = jQuery('#' + param).val();
        if (downValue == '--') {
            downValue = 0;
        }
        return parseFloat(value) > parseFloat(downValue);
    }, $.validate.format("输入大于前者数值"));
    jQuery.validate.addMethod("isLimitInteger", function (value, element) {
        var test = /^[0-9]{0,2}$/;
        return this.optional(element) || test.test(value) && value != 0
    }, "请输入0至99的整数");
    jQuery.validate.addMethod("negativeOneAndPositive", function (value, element) {
        return this.optional(element) || value > 0 || value == -1;
    }, "请输入-1或正数");
    jQuery.validate.addMethod("negativeOneAndPositiveInteger", function (value, element) {
        return this.optional(element) || /^(\-1)$|^[1-9]\d*$/.test(value);
    }, "请输入-1或正整数");
    jQuery.validate.addMethod("positiveTo100", function (value, element) {
        var test = /^(?:\d?\d|100)$/;
        return this.optional(element) || test.test(value) && value > 0;
    }, "请输入1-100正整数");
    jQuery.validate.addMethod("positiveTo99", function (value, element) {
        var test = /^(?:\d?\d|99)$/;

        return this.optional(element) || test.test(value) && value > 0;
    }, "请输入1-99正整数");
    jQuery.validate.addMethod("NumberLessThan", function (value, element, param) {
        var downValue = jQuery('#' + $(element).attr('data-rule-numberlessthan')).val();
        return parseFloat(value) < parseFloat(downValue);
    }, $.validate.format("输入小于前者数值"));
    // jQuery.validate.addMethod("NumberMoreThan", function (value, element, param) {
    //     var downValue = jQuery('#' + param).val();
    //     return parseFloat(value) >= parseFloat(downValue);
    // }, $.validate.format("输入大于或等于前者的数值"));
    jQuery.validate.addMethod("NumberMoreThan", function (value, element, param) {
        if (value == -1) return true;
        //该校验只用于消费有礼
        if (jQuery('input:radio[name="dayLimitCount"]:checked').val() == -1) return true;
        var downValue = jQuery('#' + param).val();
        var reg = /(^[1-9](\d{1,10})?(\.\d{1,2})?$)|(^\d\.\d{1,2}?$)/;
        return this.optional(element) || reg.test(value) && parseFloat(value) >= parseFloat(downValue);
        // return parseFloat(value) >= parseFloat(downValue);
        // return this.optional(element) || test.test(value) && value != 0 && parseFloat(value) >= parseFloat(downValue)
    }, $.validate.format("输入大于或等于前者的数值"));
    jQuery.validate.addMethod("lessThan50", function (value, element) {
        return this.optional(element) || (/^[0-9]\d*$/.test(value) && value <= 50);
    }, "最大不可超过50");
    jQuery.validate.addMethod("zeroToFiveHundred", function (value, element) {
        var test = /^([1-4][0-9]{2}|500|[1-9]?[0-9])$/;
        return this.optional(element) || test.test(value) && value > -1;
    }, "请输入0-500正整数");
    jQuery.validate.addMethod("oneToFiveHundred", function (value, element) {
        var test = /^([1-4][0-9]{2}|500|[1-9]?[0-9])$/;
        return this.optional(element) || test.test(value) && value > 0;
    }, "请输入1-500正整数");
    jQuery.validate.addMethod("oneToOneThousand", function (value, element) {
        var test = /^([1-9]\d{0,2}|1000)$/
        return this.optional(element) || test.test(value) && value > 0;
    }, "请输入1-1000正整数");
    jQuery.validate.addMethod("lessThanEightDigits", function (value, element) {
        var test = /^[1-9]\d*$/;

        return this.optional(element) || test.test(value) && value < 100000000;
    }, "最多8位数的正整数");
    jQuery.validate.addMethod("zeroToNineWithOneDecimal", function (value, element) {
        var reg = new RegExp("^(([1-9])(\\.\\d{1})?)$");
        return this.optional(element) || reg.test(value);
    }, "请填写1-9.9之间的数字");
    jQuery.validate.addMethod("lessThan", function (value, element, param) {
        var prevValue = jQuery(param[0]).val();
        return parseFloat(value) <= parseFloat(prevValue);
    }, $.validate.format("{1}"));
    jQuery.validate.addMethod("lessThan100000", function (value, element) {
        return this.optional(element) || (value > 0.00) && (value < 100000);
    }, "请填写0.01~99999.99的数字");
    jQuery.validate.addMethod("letterChinese", function (value, element) {
        return this.optional(element) || /^[\u0391-\uFFE5\w.,()'\"\s]+$/.test(value);
    }, "只允许包含中文、英文、数字和标点符号");
    jQuery.validate.addMethod("lessAndThan240", function (value, element) {
        var test = /^[1-9]\d*$/;
        return this.optional(element) || test.test(value) && value <= 240;
    }, "请输入小于等于240正整数");
    jQuery.validate.addMethod("lessThan100000000", function (value, element) {
        return this.optional(element) || value < 100000000;
    }, "请输入小于100000000的数值");
    //金额 小数点点最多支持5位，小数点前最多只能输入一个0
    jQuery.validate.addMethod("isMoneyFive", function (value, element) {
        var reg = /(^[1-9](\d{1,4})?(\.\d{1,2})?$)|(^(0){1}$)|(^\d\.\d{1,2}?$)/;
        return this.optional(element) || reg.test(value);
    }, "请输入0或正数(支持两位小数)");
    //金额 小数点点最多支持5位，小数点前最多只能输入一个0
    jQuery.validate.addMethod("isMoneyFive1", function (value, element) {
        var reg = /(^[1-9](\d{1,10})?(\.\d{1,2})?$)|(^\d\.\d{1,2}?$)/;
        return this.optional(element) || reg.test(value);
    }, "请输入正数(支持两位小数)");
    jQuery.validate.addMethod("isMoneyFive2", function (value, element) {
        if (value == -1) return true;
        var reg = /(^[1-9](\d{1,10})?(\.\d{1,2})?$)|(^\d\.\d{1,2}?$)/;
        return this.optional(element) || reg.test(value);
    }, "请输入正数(支持两位小数)");
    //0.1-9.9
    jQuery.validate.addMethod("zeroPointOneToNineWithOneDecimal", function (value, element) {
        var reg = /^(?=0\.[1-9]|[1-9]\.\d).{3}$|^([1-9])$/;
        return this.optional(element) || reg.test(value);
    }, "请填写0.1-9.9之间的数字");
    //金额 小数点点最多支持5位，小数点前最多只能输入一个0 支持-1
    jQuery.validate.addMethod("isMoneyFiveNegative1", function (value, element) {
        var reg = /(-1)|(^[1-9](\d{1,4})?(\.\d{1,2})?$)|(^(0){1}$)|(^\d\.\d{1,2}?$)/;
        return this.optional(element) || reg.test(value);
    }, "请输入正数或-1");

    //输入大于前者，除去-1
    jQuery.validate.addMethod("biggerThanExcept", function (value, element, param) {
        if (value == '-1') { value = 99999.99 };
        var downValue = jQuery('#' + $(element).attr('data-rule-biggerThanExcept')).val();
        return parseFloat(value) > parseFloat(downValue);
    }, $.validate.format("输入大于前者数值"));
    //小于某值
    jQuery.validate.addMethod("thanNum", function (value, element, val) {
        return this.optional(element) || value <= val[1] && value >= val[0];
    }, $.validate.format("请输入{0}至{1}之间的数值"));
    //小于某Dom的值
    jQuery.validate.addMethod("baseLessThan", function (value, element, param) {
        var baseValue = jQuery(param).attr("value") ? jQuery(param).val() : jQuery(param).text();
        return parseFloat(value) <= parseFloat(baseValue);
    }, $.validate.format("不能大于{1}"));

    //内容不重复
    jQuery.validate.addMethod("differentValidate", function (value, element, param) {
        var flag = true;
        param.forEach(function (item, index) {
            if (value.replace(/(^\s*)|(\s*$)/g, "") == item.displayName && item.crtIndex != index) flag = false;
        });
        return flag;
    }, $.validate.format("内容不能重复"));
    jQuery.validate.addMethod("lessThanLimits", function (value, element, param) {
        if (value != '' && value != null && value != undefined && param != '') {
            return parseFloat(value) <= Number(param);
        } else {
            return true
        }
    }, $.validate.format("不得大于限领数"));
    jQuery.validate.addMethod("lessThanStock", function (value, element, param) {
        if (value != '' && value != null && value != undefined && param != '') {
            return parseFloat(value) <= Number(param);
        } else {
            return true
        }
    }, $.validate.format("库存不足"));
    jQuery.validate.addMethod("lessThanValue", function (value, element, param) {
        var arr = param.split(',');
        var prevValue = parseFloat(arr[0]);
        var secondValue = parseFloat(arr[1]);
        return (parseFloat(value) <= prevValue) && (parseFloat(value) <= secondValue);
    }, $.validate.format("数量应不大于库存或限领"));
    // 原username的验证无法满足
    jQuery.validate.addMethod("wmusername", function (value, element) {
        // return true;
        return this.optional(element) || value.length
        // /^[\u0391-\uFFE5\w.,()'\"\s+\<]+$/.test(value);
    }, "");
    jQuery.validate.addMethod("isSkuLength", function (value, element, param) {//-1,正整数，小于6位
        var length = param[0] - 1;
        var reg = new RegExp("^(\\-1)$|^0$|^[1-9]\\d{0," + length + "}$");
        return this.optional(element) || reg.test(value);
    }, $.validate.format("-1、0或小于{0}位的正整数"));
    jQuery.validate.addMethod("isMoneyOne", function (value, element) {
        var reg = /(^[1-9](\d{1,4})?(\.\d{1})?$)|(^(0){1}$)|(^\d\.\d{1}?$)/;
        return this.optional(element) || reg.test(value);
    }, "");
    jQuery.validate.addMethod("lessThanThousand", function (value, element) {
        var reg = /^[1-9]{1}(\d{0,2})(\.\d{1})?$/
        return this.optional(element) || value <= 1000 || reg.test(value);
    }, "最大支持金额1000");
    jQuery.validate.addMethod("isNumberPositive", function (value, element) { // 输入金额为正数，不做提示
        return this.optional(element) || value > -1;
    }, "");

    jQuery.validate.addMethod("notEqualValidate", function (value, element, param) {
        var downValue = jQuery(param).val();
        if (!downValue) {
            downValue = 0;
        }
        return parseFloat(value) != parseFloat(downValue);
    }, $.validate.format("不可输入重复的金额"));

    // notEqualValidate2  门店储值专用
    jQuery.validate.addMethod("notEqualValidate2", function (value, element, param) {
        var eles = jQuery(param).not(element);
        for(var i = 0; i < eles.length; i++){
            if(value == $(eles[i]).val()){
                return false;
            }
        }
        return true;
    }, $.validate.format("不可输入重复的金额"));
    //和max 校验相同，只是未能解决max校验提示文案太长导致门店储值卡档位布局错位的问题
    jQuery.validate.addMethod("maximum", function (value, element, param) {
        return value < param;
    }, $.validate.format("不大于{0}"));
    jQuery.validate.addMethod("isPackServiceCount", function (value, element) {
        return this.optional(element) || (/^[0-9]\d*$/.test(value) && value <= 1000 && value >= 1);
    }, "请输入1 - 1000的整数");
    jQuery.validate.addMethod("minAndMaxRestrictChar", function (value, element, param) {
        if (!!value && (value.replace(/[^\x00-\xff]/g, "aa").length > param[1] || value.replace(/[^\x00-\xff]/g, "aa").length < param[0])) {
            return false;
        } else {
            return true;
        }
    }, $.validate.format("不可少于{0}个字符({2}个汉字)并且不可大于{1}个字符({3}个汉字)"));
    jQuery.validate.addMethod("isExpPeopleCount", function (value, element) {
        return this.optional(element) || (/^[1-9]\d*$/.test(value) && value <= 9999);
    }, "请输入1 - 9999的整数");
    jQuery.validate.addMethod("isPositive2", function (value, element) {
        return this.optional(element) || value > 0;
    }, "请输入正数");
    //实物商品
    jQuery.validate.addMethod("lenUserTakeLimitEntity", function (value, element, param) {
        var baseValue = jQuery(param).attr("ng-value") ? jQuery(param).attr("ng-value") : jQuery(param).text();
        if (!baseValue) return true;
        jQuery.validate.messages.lenUserTakeLimitEntity = '不得大于' + baseValue + '，' + baseValue + '为当前库存';
        return parseFloat(value) <= parseFloat(baseValue);
    });
    jQuery.validate.addMethod("userTakeLimitEntity", function (value, element, param) {
        var baseValue = jQuery(param).attr("ng-value") ? jQuery(param).attr("ng-value") : jQuery(param).text();
        if (!baseValue) return true;
        jQuery.validate.messages.userTakeLimitEntity = '不得大于' + baseValue + '，' + baseValue + '为当前库存';
        return parseFloat(value) <= parseFloat(baseValue);
    });
    //券
    jQuery.validate.addMethod("lenUserTakeLimitCoupon", function (value, element, param) {
        var baseValue = jQuery(param).attr("ng-value") ? jQuery(param).attr("ng-value") : jQuery(param).text();
        if (!baseValue) return true;
        if (!value) return true;
        jQuery.validate.messages.lenUserTakeLimitCoupon = '不得大于' + baseValue + '，' + baseValue + '为当前卡券的每人限领数';
        return parseFloat(value) <= parseFloat(baseValue);
    });
    jQuery.validate.addMethod("userTakeLimitCoupon", function (value, element, param) {
        var baseValue = jQuery(param).attr("ng-value") ? jQuery(param).attr("ng-value") : jQuery(param).text();
        if (!baseValue) return true;
        jQuery.validate.messages.userTakeLimitCoupon = '不得大于' + baseValue + '，' + baseValue + '为当前卡券的每人限领数';
        return parseFloat(value) <= parseFloat(baseValue);
    });
    jQuery.validate.addMethod("NumberMoreThanCoupon", function (value, element, param) {
        var downValue = jQuery('#' + param).val();
        if (!downValue) return true
        var reg = /(^[1-9](\d{1,10})?(\.\d{1,2})?$)|(^\d\.\d{1,2}?$)/;
        return this.optional(element) || reg.test(value) && parseFloat(value) >= parseFloat(downValue);
    }, $.validate.format("不得小于每人每天限兑数量"));
    jQuery.validate.addMethod("NumberLessThanCoupon", function (value, element, param) {
        var downValue = jQuery('#' + param).val();
        if (!downValue) return true
        var reg = /(^[1-9](\d{1,10})?(\.\d{1,2})?$)|(^\d\.\d{1,2}?$)/;
        return this.optional(element) || reg.test(value) && parseFloat(value) <= parseFloat(downValue);
    }, $.validate.format("不得大于每人最多限兑数量"));
    jQuery.validate.addMethod("lessThanNumber", function (value, element, val) {
        return this.optional(element) || value <= val[0];
    }, $.validate.format("最大不可超过{0}"));
    jQuery.validate.addMethod("biggerOrEqualThan", function (value, element, param) {
        var downValue = jQuery('#' + param).val();
        return value >= downValue||value==-1;
    }, $.validate.format("输入大于或等于前者数值"));
    jQuery.validate.addMethod("isExpPeopleCount", function (value, element) {
        return this.optional(element) || (/^[1-9]\d*$/.test(value) && value <= 9999);
    }, "请输入1 - 9999的整数");
    jQuery.validate.addMethod("isPositive2", function (value, element) {
        return this.optional(element) || value > 0;
    }, "请输入正数");
    jQuery.validate.addMethod("lessThanNumber", function (value, element, val) {
        return this.optional(element) || value <= val[0];
    }, $.validate.format("最大不可超过{0}"));
    //第三方商品编码
    jQuery.validate.addMethod("isThirdCodePsd", function (value, element) {
        var reg = /^[0-9A-Za-z]+$/;
        return this.optional(element) || reg.test(value);
    }, '只能输入数字或英文字母');
    jQuery.validate.addMethod("isThirdCodeLength", function (value, element, val) {
        return this.optional(element) || value.length <= val[1];
    }, $.validate.format("最多{1}位数字或英文字母"));
    // 两数之间
    jQuery.validate.addMethod("betweenValue", function (value, element, param) {
        return (parseFloat(value) >= parseFloat(param[0])) && (parseFloat(value) <= parseFloat(param[1]));
    }, $.validate.format("请输入{0}-{1}之间的数"));

    // 输入数值范围
    jQuery.validate.addMethod("inputRange", function (value, element, param) {
        return this.optional(element) || value >= param[0] && value <= param[1];
    }, $.validate.format("输入范围为{0}~{1}"));

    // 输入0或正整数
    jQuery.validate.addMethod("positiveIntegerZero", function (value, element) {
        return this.optional(element) || value == 0 || /^[1-9]\d*$/.test(value);
    }, "只允许输入0或正整数");

    // 两整数之间
    jQuery.validate.addMethod("betweenIntegerValue", function (value, element, param) {
        return /^(0|[1-9]\d*)$/.test(value) && (parseInt(value) >= parseInt(param[0])) && (parseInt(value) <= parseInt(param[1]));
    }, $.validate.format("请输入{0}-{1}之间的整数"));

    // 两位正小数（0.01~）
    jQuery.validate.addMethod("isPositiveDecimal", function (value, element, param) {
        var reg = /(^[1-9]+(\d*)?(\.\d{1,2})?$)|(^0\.[1-9]{1}(\d{1})?$)|(^0\.0[1-9]{1}$)/;
        return this.optional(element) || reg.test(value);
    }, "请输入正数(支持两位小数)");

    //售价不大于原价
    jQuery.validate.addMethod("domLessThan", function (value, element, param) {
        return this.optional(element) || (parseFloat(value) * 100 - parseFloat($(param).val()) * 100) / 100 <= 0;
    }, $.validate.format("售价不大于原价"));

    //原价不小于售价
    jQuery.validate.addMethod("domMoreThan", function (value, element, param) {
        return this.optional(element) || (parseFloat(value) * 100 - parseFloat($(param).val()) * 100) / 100 >= 0;
    }, $.validate.format("原价不小于售价"));

    jQuery.validate.addMethod("lessThanNumberPositive", function (value, element, val) {
        return this.optional(element) || (/^[0-9]\d*$/.test(value) && value <= val[0])
    }, $.validate.format("最大不可超过{0}的整数"));

    jQuery.validate.addMethod("isMoneyLengthPositive", function (value, element, param) {
        var length = 5;
        var reg = new RegExp("^(([0-9]\\d{0," + length + "})(\\.\\d{1,2})?)$|(0\\.0?([1-9]\\d?))$ ");
        return this.optional(element) || reg.test(value) && value > 0;
    }, "请输入 0.01 至 999999.99 之间的数值");

    jQuery.validate.addMethod("betweenMoney", function (value, element, param) {
        var reg = /(^[1-9](\d*)?(\.\d{1,2})?$)|(^(0){1}$)|(^\d\.\d{1,2}?$)/;
        return this.optional(element) || (reg.test(value) && (value >= param[0] && value <= param[1]));
    }, "请输入{0}-{1}之间的数字(支持两位小数)");

    //小于后者
    jQuery.validate.addMethod("domLessThan1", function (value, element, param) {
        return this.optional(element) || ((parseFloat(value) * 100 - parseFloat($(param).val()) * 100) / 100 < 0) || $(param).val()=="无限";
    }, $.validate.format("请输入小于后者的数值"));

    //大于前者
    jQuery.validate.addMethod("domMoreThan1", function (value, element, param) {
        return this.optional(element) || (parseFloat(value) * 100 - parseFloat($(param).val()) * 100) / 100 > 0;
    }, $.validate.format("请输入大于前者的数值"));

    jQuery.validate.addMethod("limitLettersNumbers", function(value, element, val) {
        return this.optional(element) || /^[A-Za-z0-9]+$/.test(value) && value.length <= val;
    }, "最多20位数字或英文字母");
    jQuery.validate.addMethod("isMoneyLengthPositive0", function (value, element, param) {
        var reg = /(^[1-9](\d*)?(\.\d{1,2})?$)|(^(0){1}$)|(^\d\.\d{1,2}?$)/;
        return this.optional(element) || (reg.test(value) && (value >= param[0] && value <= param[1]));
    }, "请输入{0}-{1}之间的数字(支持两位小数)");

    jQuery.validate.addMethod("limitLettersNumbers", function(value, element, val) {
        return this.optional(element) || /^[A-Za-z0-9]+$/.test(value) && value.length <= val;
    }, "最多20位数字或英文字母");
})(jQuery);
