module.exports = {
    "NO_LOGIN": 0, // 未登录
    "LOAD_PERMISSION_ERROR": 1, // 获取用户权限失败
    "AUTH_FAIL": 2, // 认证失败
    "SUCCESS": -1, // 成功
    "RUNTIME_ERROR": -2, // 程序运行时异常
    "PARAMS_ERROR": -3, // 参数
    "USB_KEY_INVALID": -4, // Ukey失效
    "UPLOAD_TYPE_ERROR": -5, // 上传文件类型错误
    "UPLOAD_SIZE_ERROR": -6, // 上传文件大小错误
    "NO_DATA": -7, // 无数据
    "PARAMS_EMPTY": -8, // 参数为空
    "PARAMS_NOT_EMAIL": -9, // 参数为空
    "PARAMS_NOT_PHONE": -10, // 参数不是手机号
    "PARAMS_NOT_NUMBER": -11, // 参数必须为数字
    "PARAMS_NOT_LENGTH": -12, // 参数太长
    "PARAMS_NOT_LENRANGE": -13, // 参数长度不合法
    "PARAMS_NOT_JSON": -14, // 参数必须为Json格式
    "PHONE_EXISTS": -15, // 手机已存在
    "PHONE_CODE_WAIT": -16, // 手机验证码间隔太短 等待
    "USB_KEY_NOT_EXISTS": -17, // UKEY不存在
    "AUTH_INVALID": -18, // 验证失效
    "TIMEOUT": -19, // 超时
    "SMS_SEND_DAY_LIMIT": -20, // 发送短信限制
    "SMS_SEND_ERROR": -21, // 短信平台发送失败
    "NO_PERMISSION": 99 // 没有权限
};