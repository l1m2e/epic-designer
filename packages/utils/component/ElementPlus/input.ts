
import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: async () => (await import("element-plus")).ElInput,
  defaultSchema: {
    label: "文本框",
    type: "input",
    field: "input",
    icon: "icon-write",
    isInput: true,
    componentProps: {
      defaultValue: '',
      placeholder: '请输入'
    }
  },
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field",
      },
      {
        label: "标题",
        type: "input",
        field: "label",
      },

      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue",
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
      },
      {
        label: "输入类型",
        type: "select",
        defaultValue: "text",
        componentProps: {
          options: [
            {
              label: "text",
              value: "text",
            },
            {
              label: "number",
              value: "number",
            },
            {
              label: "password",
              value: "password",
            },
          ],
        },
        field: "componentProps.type",
      },
      {
        label: '隐藏',
        type: "switch",
        field: "componentProps.hidden",
      },
      {
        label: '可清空',
        type: "switch",
        field: "componentProps.clearable",
      },
    ],
  }
} as ComponentConfigModel;