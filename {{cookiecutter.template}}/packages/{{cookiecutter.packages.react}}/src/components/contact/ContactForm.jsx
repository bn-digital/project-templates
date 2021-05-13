"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactForm = void 0;
var antd_1 = require("antd");
var graphql_1 = require("../../graphql");
var formProps = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
var validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
    },
};
var ContactForm = function () {
    var createContactFormRequest = graphql_1.useCreateContactFormRequestMutation()[0];
    var messageKey = 'request';
    var onFinish = function (data) {
        antd_1.message
            .loading({
            content: 'Send your request ...',
            key: messageKey,
        }, 0)
            .then(function () {
            return createContactFormRequest({ variables: { input: { data: data } } })
                .then(function (result) {
                return (result === null || result === void 0 ? void 0 : result.data) &&
                    antd_1.message.success({
                        content: "Thanks for your interest, " + result.data.createContactFormRequest.contactFormRequest.firstName + "! Your message received, " + result.data.createContactFormRequest.contactFormRequest.email,
                        key: messageKey,
                    }, 2000);
            })
                .catch(function (reason) {
                return antd_1.message.error({
                    content: "Error sending your request: " + reason,
                    key: messageKey,
                }, 2000);
            })
                .finally(function () { return antd_1.message.destroy(messageKey); });
        });
    };
    return (<antd_1.Form {...formProps} name='nest-messages' onFinish={onFinish} validateMessages={validateMessages}>
      <antd_1.Form.Item name={'firstName'} label='First Name'>
        <antd_1.Input />
      </antd_1.Form.Item>
      <antd_1.Form.Item name={'lastName'} label='Last Name'>
        <antd_1.Input />
      </antd_1.Form.Item>
      <antd_1.Form.Item name={'email'} label='Email' rules={[{ required: true, type: 'email' }]}>
        <antd_1.Input />
      </antd_1.Form.Item>
      <antd_1.Form.Item wrapperCol={__assign(__assign({}, formProps.wrapperCol), { offset: 8 })}>
        <antd_1.Button type='primary' htmlType='submit'>
          Submit
        </antd_1.Button>
      </antd_1.Form.Item>
    </antd_1.Form>);
};
exports.ContactForm = ContactForm;
