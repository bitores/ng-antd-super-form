import { Validators } from '@angular/forms';
import { FieldConfig } from 'projects/super-form/src/lib/interface';

export const formsPool: { [formType: string]: FieldConfig[] } = {
  data: [
    {
      type: 'input',
      label: '喜欢的食物',
      key: 'foodName',
      placeholder: '汉堡',
      disabled: false,
      validations: [Validators.required, Validators.minLength(4)],
      errorTip: '请输入你喜欢的食物',
      hasFeedback: true,
      // visible: false
    },
    {
      type: 'select',
      label: '喜欢的食物种类',
      key: 'foodType',
      options: [
        {
          label: '西式快餐',
          value: '0'
        },
        {
          label: '川菜',
          value: '1'
        },
        {
          label: '粤菜',
          value: '2'
        },
        {
          label: '烧烤麻辣烫',
          value: '3'
        },
      ],
      disabled: false,
      placeholder: '请选择',
      validations: [Validators.required]
    },
    {
      label: '提交',
      key: 'submit',
      type: 'button',
      disabled: false,
      buttonType: 'primary',
      formLayout: {
        wrapperCol: {
          span: 14,
          offset: 6
        }
      },
      icon: 'plus'
      // block: true,
      // size: 'small',
      // shape: 'circle'
    }
  ]
};