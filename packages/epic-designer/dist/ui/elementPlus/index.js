import { pluginManager as n } from "epic-designer";
import { ElFormItem as i, ElTabs as c, ElTabPane as r, ElCollapse as s, ElCollapseItem as d } from "element-plus";
const u = {
  component: async () => (await import("element-plus")).ElInput,
  defaultSchema: {
    label: "输入框",
    type: "input",
    field: "input",
    icon: "epic-icon-write",
    input: !0,
    componentProps: {
      placeholder: "请输入",
      size: "default",
      type: "text"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "最大输入长度",
        type: "number",
        field: "componentProps.maxlength",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "统计字数",
        type: "switch",
        field: "componentProps.showWordLimit"
      },
      {
        label: "默认值",
        type: "input",
        field: "componentProps.defaultValue"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "输入类型",
        type: "select",
        defaultValue: "text",
        componentProps: {
          options: [
            {
              label: "text",
              value: "text"
            },
            {
              label: "number",
              value: "number"
            },
            {
              label: "password",
              value: "password"
            }
          ]
        },
        field: "componentProps.type"
      },
      {
        label: "显示密码",
        type: "switch",
        field: "componentProps.showPassword",
        show: ({ values: e }) => e.componentProps.type === "password"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "input",
        describe: "输入值"
      },
      {
        type: "change",
        describe: "值修改"
      },
      {
        type: "focus",
        describe: "获取焦点"
      },
      {
        type: "blur",
        describe: "失去焦点"
      }
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点"
      },
      {
        type: "blur",
        describe: "使 input 失去焦点"
      },
      {
        type: "clear",
        describe: "清除 input 值"
      },
      {
        type: "select",
        describe: "选中 input 中的文字"
      }
    ]
  }
}, m = {
  component: async () => (await import("element-plus")).ElInputNumber,
  defaultSchema: {
    label: "数字输入框",
    type: "number",
    icon: "epic-icon-number",
    field: "number",
    input: !0,
    componentProps: {
      placeholder: "请输入"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "number",
        field: "componentProps.defaultValue"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ],
          placeholder: "请选择",
          clearable: !0
        },
        field: "componentProps.size"
      },
      {
        label: "最大值",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最小值",
        type: "number",
        field: "componentProps.min",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "步长",
        type: "number",
        field: "componentProps.step",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "控制按钮位置",
        type: "select",
        defaultValue: "",
        componentProps: {
          options: [
            {
              label: "default",
              value: ""
            },
            {
              label: "right",
              value: "right"
            }
          ],
          placeholder: "请选择",
          clearable: !0
        },
        field: "componentProps.controlsPosition"
      },
      {
        label: "精度",
        type: "number",
        field: "componentProps.precision",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "输入控制为步长的倍数",
        type: "switch",
        field: "componentProps.stepStrictly"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  }
}, b = {
  component: () => import("../../form-136c8a8c.js"),
  defaultSchema: {
    label: "表单",
    type: "form",
    icon: "epic-icon-daibanshixiang",
    componentProps: {
      name: "default",
      labelWidth: 100,
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      },
      hideRequiredMark: !1,
      labelPosition: "right",
      size: "default",
      requireAsteriskPosition: "left"
    },
    children: []
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "name",
        type: "input",
        field: "componentProps.name"
      },
      {
        label: "标签长度",
        type: "input",
        field: "componentProps.labelWidth"
      },
      {
        label: "域内标签后缀",
        type: "input",
        field: "componentProps.labelSuffix",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "标签位置",
        type: "select",
        field: "componentProps.labelPosition",
        componentProps: {
          options: [
            {
              label: "left",
              value: "left"
            },
            {
              label: "right",
              value: "right"
            },
            {
              label: "top",
              value: "top"
            }
          ]
        }
      },
      {
        label: "表单尺寸",
        type: "select",
        field: "componentProps.size",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        }
      },
      {
        label: "星号位置",
        type: "select",
        field: "componentProps.requireAsteriskPosition",
        componentProps: {
          options: [
            {
              label: "left",
              value: "left"
            },
            {
              label: "right",
              value: "right"
            }
          ]
        }
      },
      {
        label: "行内展示校验信息",
        type: "switch",
        field: "componentProps.inlineMessage"
      },
      {
        label: "校验反馈图标",
        type: "switch",
        field: "componentProps.statusIcon"
      },
      {
        label: "scrollToError",
        type: "switch",
        field: "componentProps.scrollToError"
      },
      {
        label: "行内模式",
        type: "switch",
        field: "componentProps.inline"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ],
    action: [
      {
        type: "getData",
        describe: "获取表单数据"
      },
      {
        type: "setData",
        describe: "设置表单数据"
      },
      {
        type: "validate",
        describe: "校验表单"
      }
    ]
  }
}, f = {
  component: () => import("../../formItem-04b1c0e5.js"),
  defaultSchema: {
    label: "表单项",
    type: "form-item",
    icon: "epic-icon-qiapian"
  },
  config: {}
}, y = {
  component: () => import("../../button-d27c0658.js"),
  // component: ElButton,
  defaultSchema: {
    label: "按钮",
    type: "button",
    field: "input",
    icon: "epic-icon-button-remove",
    input: !1
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "类型",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          clearable: !0,
          options: [
            {
              label: "primary",
              value: "primary"
            },
            {
              label: "success",
              value: "success"
            },
            {
              label: "info",
              value: "info"
            },
            {
              label: "warning",
              value: "warning"
            },
            {
              label: "danger",
              value: "danger"
            }
          ]
        },
        field: "componentProps.type"
      },
      {
        label: "朴素按钮",
        type: "switch",
        field: "componentProps.plain"
      },
      {
        label: "圆角按钮",
        type: "switch",
        field: "componentProps.round"
      },
      {
        label: "圆形按钮",
        type: "switch",
        field: "componentProps.circle"
      },
      {
        label: "文字按钮",
        type: "switch",
        field: "componentProps.text"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ],
    event: [
      {
        type: "click",
        describe: "点击按钮时"
      },
      {
        type: "dblclick",
        describe: "双击按钮时"
      }
    ]
  }
}, h = {
  component: () => import("../../card-8f18b3a6.js"),
  defaultSchema: {
    label: "卡片布局",
    type: "card",
    icon: "epic-icon-qiapian",
    children: [],
    componentProps: {
      shadow: "hover"
    }
  },
  groupName: "布局",
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label"
      },
      {
        label: "阴影时机",
        type: "select",
        defaultValue: "always",
        componentProps: {
          options: [
            {
              label: "always",
              value: "always"
            },
            {
              label: "hover",
              value: "hover"
            },
            {
              label: "never",
              value: "never"
            }
          ],
          placeholder: "请选择"
        },
        field: "componentProps.shadow"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ]
  }
}, P = {
  component: () => import("../../row-8d9b75ef.js"),
  defaultSchema: {
    label: "栅格布局",
    type: "row",
    icon: "epic-icon-zhage",
    childImmovable: !0,
    children: [
      {
        type: "col",
        children: [],
        componentProps: {
          span: 12
        }
      },
      {
        type: "col",
        children: [],
        componentProps: {
          span: 12
        }
      }
    ]
  },
  groupName: "布局",
  config: {
    attribute: [
      {
        label: "垂直对齐方式",
        type: "select",
        componentProps: {
          style: { width: "100%" },
          options: [
            {
              label: "top",
              value: "top"
            },
            {
              label: "middle",
              value: "middle"
            },
            {
              label: "bottom",
              value: "bottom"
            }
          ],
          placeholder: "请选择"
        },
        field: "componentProps.align"
      },
      {
        label: "水平排列方式",
        type: "select",
        componentProps: {
          style: { width: "100%" },
          options: [
            {
              label: "start",
              value: "start"
            },
            {
              label: "end",
              value: "end"
            },
            {
              label: "center",
              value: "center"
            },
            {
              label: "space-around",
              value: "space-around"
            },
            {
              label: "space-between",
              value: "space-between"
            }
          ],
          placeholder: "请选择"
        },
        field: "componentProps.justify"
      },
      {
        label: "栅格间距",
        type: "number",
        field: "componentProps.gutter",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "列编辑",
        type: "EColEditor",
        field: "children"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ]
  }
}, v = {
  component: () => import("../../col-7f4d45ff.js"),
  defaultSchema: {
    label: "栅格布局-列",
    type: "col",
    icon: "epic-icon-xiala",
    children: [],
    componentProps: {
      span: 6
    }
  },
  config: {
    attribute: [
      {
        label: "占位格数",
        type: "number",
        field: "componentProps.span"
      }
    ]
  }
}, g = {
  component: () => import("../../select-68b9d6c0.js"),
  defaultSchema: {
    label: "选择框",
    type: "select",
    icon: "epic-icon-xiala",
    field: "select",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      placeholder: "请选择",
      size: "default",
      effect: "light",
      placement: "bottom-start"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "select",
        field: "componentProps.defaultValue"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "可多选",
        type: "switch",
        field: "componentProps.multiple",
        onChange: ({ value: e, values: l }) => {
          e ? l.componentProps.defaultValue = [] : l.componentProps.defaultValue = null;
        }
      },
      {
        label: "多选隐藏",
        type: "switch",
        field: "componentProps.collapseTags",
        show: ({ values: e }) => e.componentProps.multiple
      },
      {
        label: "隐藏提示",
        type: "switch",
        field: "componentProps.collapseTagsTooltip",
        show: ({ values: e }) => e.componentProps.multiple && e.componentProps.collapseTags
      },
      {
        label: "保留搜索关键字",
        type: "switch",
        field: "componentProps.reserveKeyword",
        show: ({ values: e }) => e.componentProps.multiple
      },
      {
        label: "标签类型",
        type: "select",
        defaultValue: "info",
        componentProps: {
          options: [
            {
              label: "success",
              value: "success"
            },
            {
              label: "info",
              value: "info"
            },
            {
              label: "warning",
              value: "warning"
            },
            {
              label: "danger",
              value: "danger"
            }
          ]
        },
        show: ({ values: e }) => e.componentProps.multiple,
        field: "componentProps.tagType"
      },
      {
        label: "多选限制",
        type: "number",
        field: "componentProps.multipleLimit",
        show: ({ values: e }) => e.componentProps.multiple
      },
      {
        label: "提示主题",
        type: "select",
        componentProps: {
          options: [
            {
              label: "light",
              value: "light"
            },
            {
              label: "dark",
              value: "dark"
            }
          ]
        },
        field: "componentProps.effect"
      },
      {
        label: "可筛选",
        type: "switch",
        field: "componentProps.filterable"
      },
      {
        label: "允许创建条目",
        type: "switch",
        field: "componentProps.allowCreate"
      },
      {
        label: "下拉框位置",
        type: "select",
        defaultValue: "bottom-start",
        componentProps: {
          options: [
            {
              label: "top",
              value: "top"
            },
            {
              label: "top-start",
              value: "top-start"
            },
            {
              label: "top-end",
              value: "top-end"
            },
            {
              label: "bottom",
              value: "bottom"
            },
            {
              label: "bottom-start",
              value: "bottom-start"
            },
            {
              label: "bottom-end",
              value: "bottom-end"
            },
            {
              label: "left",
              value: "left"
            },
            {
              label: "left-start",
              value: "left-start"
            },
            {
              label: "left-end",
              value: "left-end"
            },
            {
              label: "right",
              value: "right"
            },
            {
              label: "right-start",
              value: "right-start"
            },
            {
              label: "right-end",
              value: "right-end"
            }
          ]
        },
        field: "componentProps.placement"
      },
      {
        label: "下拉框宽度与输入框相同",
        type: "switch",
        field: "componentProps.fitInputWidth"
      },
      {
        label: "无数据时文本",
        type: "input",
        field: "componentProps.noDataText",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        describe: "配置选项"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  }
}, w = {
  component: () => import("../../radio-5fe14d85.js"),
  defaultSchema: {
    label: "单选框",
    type: "radio",
    icon: "epic-icon-danxuan-cuxiantiao",
    field: "radio",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      size: "default"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "默认值",
        type: "radio",
        field: "componentProps.defaultValue"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "按钮模式",
        type: "switch",
        field: "componentProps.radioButton"
      },
      {
        label: "选项文本颜色",
        type: "color-picker",
        layout: "horizontal",
        field: "componentProps.textColor",
        show: ({ values: e }) => e.componentProps.radioButton,
        describe: "按钮模式下生效"
      },
      {
        label: "选项按钮颜色",
        type: "color-picker",
        layout: "horizontal",
        field: "componentProps.fill",
        show: ({ values: e }) => e.componentProps.radioButton,
        describe: "按钮模式下生效"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  }
}, E = {
  component: () => import("../../checkbox-8f64b14a.js"),
  defaultSchema: {
    label: "复选框",
    type: "checkbox",
    icon: "epic-icon-duoxuan1",
    field: "checkbox",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      size: "default"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "默认值",
        type: "checkbox",
        field: "componentProps.defaultValue"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "最大选中数",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "最小选中数",
        type: "number",
        field: "componentProps.min",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "按钮模式",
        type: "switch",
        field: "componentProps.radioButton"
      },
      {
        label: "选项文本颜色",
        type: "color-picker",
        layout: "horizontal",
        field: "componentProps.textColor",
        show: ({ values: e }) => e.componentProps.radioButton,
        describe: "按钮模式下生效"
      },
      {
        label: "选项按钮颜色",
        type: "color-picker",
        layout: "horizontal",
        field: "componentProps.fill",
        show: ({ values: e }) => e.componentProps.radioButton,
        describe: "按钮模式下生效"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        describe: "校验规则需要配合表单使用"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  }
}, x = {
  component: async () => (await import("element-plus")).ElSlider,
  defaultSchema: {
    label: "滑块",
    type: "slider",
    icon: "epic-icon-menu",
    field: "slider",
    input: !0,
    componentProps: {
      placement: "top-start",
      showTooltip: !0
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          placeholder: "请选择",
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "默认值",
        type: "slider",
        field: "componentProps.defaultValue"
      },
      {
        label: "最小值",
        type: "number",
        field: "componentProps.min",
        componentProps: {
          placeholder: "请输入"
        },
        onChange: ({ value: e, values: l, componentAttributes: t }) => {
          const o = t.value.findIndex((a) => a.field === "componentProps.max"), p = t.value[o];
          p.componentProps = {
            min: e
          }, (l.componentProps.max ?? 0) < e && (l.componentProps.max = e);
        }
      },
      {
        label: "最大值",
        type: "number",
        field: "componentProps.max",
        componentProps: {
          placeholder: "请输入"
        },
        onChange: ({ value: e, values: l, componentAttributes: t }) => {
          const o = t.value.findIndex((a) => a.field === "componentProps.min"), p = t.value[o];
          p.componentProps = {
            max: e
          }, (l.componentProps.min ?? 0) > e && (l.componentProps.min = e);
        }
      },
      {
        label: "步长",
        type: "number",
        field: "componentProps.step",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "显示间断点",
        type: "switch",
        field: "componentProps.showStops"
      },
      {
        label: "提示信息",
        type: "switch",
        field: "componentProps.showTooltip"
      },
      {
        label: "开启选择范围",
        type: "switch",
        field: "componentProps.range"
      },
      {
        label: "垂直模式",
        type: "switch",
        field: "componentProps.vertical"
      },
      {
        label: "高度",
        type: "EInputSize",
        field: "componentProps.height",
        show: ({ values: e }) => e.componentProps.vertical
      },
      {
        label: "显示数字框",
        type: "switch",
        field: "componentProps.showInput",
        onChange: ({ value: e, values: l }) => {
          e && (l.componentProps.showInputControls = !0);
        }
      },
      {
        label: "控制按钮",
        type: "switch",
        field: "componentProps.showInputControls",
        show: ({ values: e }) => e.componentProps.showInput
      },
      {
        label: "提示框位置",
        type: "select",
        defaultValue: "bottom-start",
        componentProps: {
          options: [
            {
              label: "top",
              value: "top"
            },
            {
              label: "top-start",
              value: "top-start"
            },
            {
              label: "top-end",
              value: "top-end"
            },
            {
              label: "bottom",
              value: "bottom"
            },
            {
              label: "bottom-start",
              value: "bottom-start"
            },
            {
              label: "bottom-end",
              value: "bottom-end"
            },
            {
              label: "left",
              value: "left"
            },
            {
              label: "left-start",
              value: "left-start"
            },
            {
              label: "left-end",
              value: "left-end"
            },
            {
              label: "right",
              value: "right"
            },
            {
              label: "right-start",
              value: "right-start"
            },
            {
              label: "right-end",
              value: "right-end"
            }
          ]
        },
        field: "componentProps.placement"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "input",
        describe: "拖拽实时触发"
      },
      {
        type: "change",
        describe: "拖拽结束改变值时"
      }
    ]
  }
}, C = {
  component: async () => (await import("element-plus")).ElColorPicker,
  defaultSchema: {
    label: "颜色选择器",
    type: "color-picker",
    icon: "epic-icon-yanse",
    field: "color-picker",
    input: !0,
    componentProps: {
      style: { width: "100%" },
      size: "default",
      colorFormat: "hex"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "color-picker",
        field: "componentProps.defaultValue"
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "透明度选择",
        type: "switch",
        field: "componentProps.showAlpha"
      },
      {
        label: "格式",
        type: "select",
        componentProps: {
          options: [
            {
              label: "hsl",
              value: "hsl"
            },
            {
              label: "hsv",
              value: "hsv"
            },
            {
              label: "hex",
              value: "hex"
            },
            {
              label: "rgb",
              value: "rgb"
            }
          ]
        },
        field: "componentProps.colorFormat"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ],
    action: []
  }
}, k = {
  component: async () => (await import("element-plus")).ElSwitch,
  defaultSchema: {
    label: "开关",
    type: "switch",
    icon: "epic-icon-kaiguan3",
    field: "switch",
    input: !0,
    componentProps: {
      size: "default"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "switch",
        field: "componentProps.defaultValue"
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "宽度",
        type: "number",
        field: "componentProps.width",
        componentProps: {
          min: 50,
          placeholder: "请输入"
        }
      },
      {
        label: "激活时文本",
        type: "input",
        field: "componentProps.activeText",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "未激活时文本",
        type: "input",
        field: "componentProps.inactiveText",
        componentProps: {
          placeholder: "请输入"
        }
      },
      {
        label: "文本点内显示",
        type: "switch",
        field: "componentProps.inlinePrompt"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "状态发生变化时"
      }
    ]
  }
}, V = {
  component: async () => (await import("element-plus")).ElCascader,
  defaultSchema: {
    label: "级联选择器",
    type: "cascader",
    icon: "epic-icon-guanlian",
    field: "cascader",
    input: !0,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1"
        },
        {
          label: "选项2",
          value: "选项2"
        }
      ],
      placeholder: "请选择",
      showAllLevels: !0,
      separator: "/",
      size: "default",
      props: {
        expandTrigger: "click"
      }
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "cascader",
        field: "componentProps.defaultValue"
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder"
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "可多选",
        type: "switch",
        field: "componentProps.props.multiple",
        onChange: ({ value: e, values: l }) => {
          e ? l.componentProps.defaultValue = [] : l.componentProps.defaultValue = null;
        }
      },
      {
        label: "折叠Tag",
        type: "switch",
        field: "componentProps.collapseTags",
        show: ({ values: e }) => e.componentProps.props.multiple
      },
      {
        label: "显示被折叠标签",
        type: "switch",
        field: "componentProps.collapseTagsTooltip",
        show: ({ values: e }) => e.componentProps.props.multiple && e.componentProps.collapseTags
      },
      {
        label: "展示完整路径",
        type: "switch",
        field: "componentProps.showAllLevels"
      },
      {
        label: "次级菜单展开方式",
        type: "select",
        field: "componentProps.props.expandTrigger",
        componentProps: {
          options: [
            {
              label: "click",
              value: "click"
            },
            {
              label: "hover",
              value: "hover"
            }
          ]
        }
      },
      {
        label: "可搜索",
        type: "switch",
        field: "componentProps.filterable"
      },
      {
        label: "分割符",
        type: "input",
        field: "componentProps.separator"
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "选项管理",
        type: "EOptionsEditor",
        layout: "vertical",
        field: "componentProps.options",
        componentProps: {
          tree: !0
        },
        describe: "配置选项"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "选中节点变化时"
      },
      {
        type: "close",
        describe: "面板的关闭事件"
      }
    ],
    action: [
      {
        type: "getCheckedNodes",
        describe: "获取当前选中节点"
      }
    ]
  }
}, z = {
  component: () => import("../../collapse-5dc12a78.js"),
  defaultSchema: {
    label: "折叠面板",
    type: "collapse",
    icon: "epic-icon-xiala",
    children: [
      {
        type: "collapse-item",
        children: [],
        componentProps: {
          span: 12
        },
        id: "g062zikd2jk001"
      },
      {
        type: "collapse-item",
        children: [],
        componentProps: {
          span: 12
        },
        id: "gy5z9jtfb3s001"
      }
    ]
  },
  config: {
    attribute: [
      {
        label: "折叠项管理",
        type: "EColEditor",
        field: "children"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      }
    ]
  }
}, S = {
  component: () => import("../../collapseItem-01150d83.js"),
  defaultSchema: {
    label: "折叠项",
    type: "collapse-item",
    icon: "epic-icon-xiala",
    children: []
  },
  config: {
    attribute: []
  }
}, I = {
  component: async () => (await import("element-plus")).ElDatePicker,
  defaultSchema: {
    label: "日期选择器",
    type: "date",
    icon: "epic-icon-calendar",
    field: "date",
    input: !0,
    componentProps: {
      type: "date",
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD",
      placeholder: "请选择",
      startPlaceholder: "请选择",
      endPlaceholder: "请选择",
      size: "default"
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "默认值",
        type: "date",
        field: "componentProps.defaultValue"
      },
      {
        label: "显示类型",
        type: "select",
        field: "componentProps.type",
        componentProps: {
          options: [
            {
              label: "日期",
              value: "date"
            },
            {
              label: "周",
              value: "week"
            },
            {
              label: "月份",
              value: "month"
            },
            {
              label: "年份",
              value: "year"
            },
            {
              label: "时间",
              value: "datetime"
            },
            {
              label: "时间范围",
              value: "datetimerange"
            },
            {
              label: "日期范围",
              value: "daterange"
            },
            {
              label: "月份范围",
              value: "monthrange"
            },
            {
              label: "多个日期",
              value: "dates"
            }
          ]
        },
        onChange({ values: e }) {
          delete e.componentProps.defaultValue;
        }
      },
      {
        label: "开始占位符",
        type: "input",
        field: "componentProps.startPlaceholder",
        show({ values: e }) {
          return ["datetimerange", "daterange", "monthrange"].includes(
            e.componentProps.type
          );
        }
      },
      {
        label: "结束占位符",
        type: "input",
        field: "componentProps.endPlaceholder",
        show({ values: e }) {
          return ["datetimerange", "daterange", "monthrange"].includes(
            e.componentProps.type
          );
        }
      },
      {
        label: "占位内容",
        type: "input",
        field: "componentProps.placeholder",
        show({ values: e }) {
          return !["datetimerange", "daterange", "monthrange"].includes(
            e.componentProps.type
          );
        }
      },
      {
        label: "尺寸",
        type: "select",
        defaultValue: "default",
        componentProps: {
          options: [
            {
              label: "large",
              value: "large"
            },
            {
              label: "default",
              value: "default"
            },
            {
              label: "small",
              value: "small"
            }
          ]
        },
        field: "componentProps.size"
      },
      {
        label: "可输入",
        type: "switch",
        field: "componentProps.editable"
      },
      {
        label: "显示格式",
        type: "input",
        field: "componentProps.format"
      },
      {
        label: "value格式",
        type: "input",
        field: "componentProps.valueFormat"
      },
      {
        label: "分割符",
        type: "input",
        field: "componentProps.rangeSeparator",
        show({ values: e }) {
          return ["datetimerange", "daterange", "monthrange"].includes(
            e.componentProps.type
          );
        }
      },
      {
        label: "可清空",
        type: "switch",
        field: "componentProps.clearable"
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ],
    event: [
      {
        type: "change",
        describe: "值变化时"
      }
    ]
  }
}, T = {
  component: () => import("../../uploadFile-da7b23c1.js"),
  defaultSchema: {
    label: "上传文件",
    type: "upload-file",
    icon: "epic-icon-upload",
    field: "uploadFile",
    input: !0,
    componentProps: {
      action: "https://epic.kcz66.com/static/upload-img.json",
      name: "file",
      showFileList: !0
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "请求地址",
        type: "input",
        field: "componentProps.action"
      },
      {
        label: "上传文件字段",
        type: "input",
        field: "componentProps.name"
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple"
      },
      {
        label: "展示文件列表",
        type: "switch",
        field: "componentProps.showFileList"
      },
      {
        label: "拖拽上传",
        type: "switch",
        field: "componentProps.drag"
      },
      {
        label: "允许上传最大数量",
        type: "number",
        field: "componentProps.limit",
        componentProps: {
          min: 0,
          placeholder: "请输入"
        }
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ]
  },
  bindModel: "modelValue"
}, N = {
  component: () => import("../../uploadImage-27f64264.js"),
  defaultSchema: {
    label: "上传图片",
    type: "upload-image",
    icon: "epic-icon-image",
    field: "uploadImage",
    input: !0,
    componentProps: {
      action: "https://epic.kcz66.com/static/upload-img.json",
      name: "file",
      showFileList: !0
    }
  },
  groupName: "表单",
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field"
      },
      {
        label: "文字",
        type: "input",
        field: "label"
      },
      {
        label: "请求地址",
        type: "input",
        field: "componentProps.action"
      },
      {
        label: "上传文件字段",
        type: "input",
        field: "componentProps.name"
      },
      {
        label: "多选",
        type: "switch",
        field: "componentProps.multiple"
      },
      {
        label: "展示文件列表",
        type: "switch",
        field: "componentProps.showFileList"
      },
      {
        label: "拖拽上传",
        type: "switch",
        field: "componentProps.drag"
      },
      {
        label: "允许上传最大数量",
        type: "number",
        field: "componentProps.limit",
        componentProps: {
          min: 0,
          placeholder: "请输入"
        }
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled"
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden"
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用"
      }
    ]
  },
  bindModel: "modelValue"
}, R = {
  component: () => import("../../modal-ae330b47.js"),
  defaultSchema: {
    label: "模态框",
    type: "modal",
    icon: "epic-icon-xiala",
    children: []
  },
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "title"
      }
    ]
  }
};
function L(e = n) {
  e.component("FormItem", i), e.component("Tabs", c), e.component("TabPane", r), e.component("Collapse", s), e.component("CollapseItem", d), [
    b,
    f,
    u,
    m,
    w,
    E,
    I,
    g,
    k,
    C,
    V,
    x,
    T,
    N,
    y,
    h,
    P,
    v,
    z,
    S,
    R
  ].forEach((t) => {
    e.registerComponent(t);
  }), e.setInitialized(!0);
}
function Y(e) {
  import("element-plus").then(({ provideGlobalConfig: l }) => {
    l(e);
  });
}
export {
  Y as provideGlobalConfig,
  L as setupElementPlus
};
