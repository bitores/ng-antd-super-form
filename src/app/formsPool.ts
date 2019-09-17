import { Validators, ValidatorFn } from '@angular/forms';
import { FieldConfig } from 'projects/super-form/src/lib/interface';

export const formsPool: { [formType: string]: FieldConfig[] } = {
  data: [
    {
      type: 'input',
      // nzType: 'hidden',
      label: '喜欢的食物',
      // noColon: true,
      key: 'foodName',
      placeholder: '汉堡',
      disabled: false,
      validations: [Validators.required],
      errorTip: '请输入你喜欢的食物',
      // extra: 'xxxx',
      // explain: '---',
      hasFeedback: true,
      // maxlength: 10,
      // visible: false, Validators.minLength(4)
      initialValue: 'sdfsdffsd',
      // size: 'small',
      // rows: 4,
      // autosize: {
      //   minRows: 8,
      //   maxRows: 10,
      // }
    },
    // {
    //   type: 'br',
    //   key: 'xx',
    // },
    {
      type: 'number',
      label: '年龄',
      key: 'age',
      placeholder: '',
      disabled: false,
      validations: [Validators.required, Validators.minLength(4)],
      errorTip: '请输入年龄',
      // visible: false
      // initialValue: 10.00,
      step: 2,
      precision: 2,
      // formatter: (v) => {
      //   return `${v} %`
      // },
      min: 1,
      max: 20
    },
    {
      label: '时间',
      key: 'ff',
      type: 'divider',
      text: 'xxx',
      // nzType: 'horizontal',
      // orientation: "left"
    },
    // {
    //   label: '',
    //   key: '-',
    //   type: 'text',
    //   explain: 'xxxx',
    //   formLayout: {
    //     wrapperCol: {
    //       span: 14,
    //       offset: 6
    //     }
    //   },
    // },
    {
      validations: [Validators.required],
      label: 'rating',
      type: 'rating',
      key: 'rating',
      // initialValue: 3,
      errorTip: '请选择',
    },
    {
      validations: [Validators.required
        ,
      (control) => {
        if (control.value) {
          if (control.value.length < 1) {
            // return {
            //   required: false
            // }

            return {
              result: {
                info: '请继续上传'
              }
            }
          }
        }
        return null;
      }
      ],
      errorTip: '请上传',
      label: '图片上传',
      key: 'img',
      type: 'upload',
      // nzType: 'drag',
      multiple: true,
      icon: 'plus',
      theme: 'theme2',
      uploadTitle: '图片上传',
      subTitle: '可拖拽上传,支持.....image/png, image/jpeg, image/gif',
      accept: 'file',
      action: "https://jsonplaceholder.typicode.com/posts/",
      listType: 'picture-card',
      // showButton: true,
      // disabled: true,
      maxCount: 3,
      explain: '至少上传1张, 最多上传3张图片',
      initialValue: [
        {
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ],
      filter: [
        {
          name: 'type',
          fn: (fileList) => {
            const filterFiles = fileList.filter(w => ~['image/png'].indexOf(w.type));
            if (filterFiles.length !== fileList.length) {
              console.error(`包含文件格式不正确，只支持 png 格式`);
              return filterFiles;
            }
            return fileList;
          }
        },
        // {
        //   name: 'async',
        //   fn: (fileList) => {
        //     console.log(fileList)

        //     // return new Observable((observer: Observer<UploadFile[]>) => {
        //     //   // doing
        //     //   observer.next(fileList);
        //     //   observer.complete();
        //     // });
        //   }
        // }
      ],
    },
    {
      validations: [Validators.required],
      label: '时间',
      key: 'time',
      type: 'rangepicker',
      showTime: true,
      format: 'yyyy-MM',//-dd HH:mm:ss
      errorTip: '请选择',
      onChange: (date) => {
        console.log('=', date)
      },
    },
    {
      type: 'slider',
      label: 'slider',
      key: 'slider',
      // range: true,
      // step: 10,
      // onModelChange(v) {
      //   console.log(v)
      // },
      // onAfterChange: (v) => {
      //   console.log(v)
      // }
      // min: 1,
      // max: 20,
      // step: 0.01,
      // formatter(v) {
      //   return `${v}%`
      // }
      initialValue: 37,
      marks: {
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
          style: {
            color: '#f50'
          },
          label: '<strong>100°C</strong>'
        }
      }
    },
    {
      label: 'Rate',
      type: 'rate',
      key: 'rate',
      allowHalf: true,
      initialValue: 2.5,
      character: '好'
    },
    {
      type: 'select',
      label: '喜欢的食物种类',
      key: 'foodType',
      // initialValue: '2',
      // disabled: true,
      // mode: 'tags',
      // maxTagCount: 2,
      // showSearch: true,
      // dropdownRender: true,
      errorTip: '请选择',
      onClick() {
        console.log('==')
      },
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
      placeholder: '请选择',
      validations: [Validators.required]
    },
    {
      label: '性别',
      type: 'radio',
      key: 'sex',
      validations: [Validators.required],
      errorTip: '请选择',
      // initialValue: 1,
      disabled: false,
      options: [
        {
          label: '男',
          value: 1,
        }, {
          label: '女',
          value: 2,
        }
      ],
      onChange: (v) => {
        console.log('你选择了', v)
      }
    },
    {
      label: '喜好',
      type: 'checkbox',
      key: 'fav',
      validations: [
        Validators.required,
        (control) => {
          if (control.value) {
            let ret = control.value;//.filter(item => item.checked)
            if (ret.length < 1) {
              return {
                valid: false
              }
            }
          }
          return null;
        }
      ],
      errorTip: 'xxx',
      // initialValue: [1],
      explain: '至少选择一个选择',
      disabled: false,
      initialValue: [1, 3],
      options: [
        {
          label: '男',
          value: 1,
          // checked: true
        }, {
          label: '女',
          value: 2,
        }, {
          label: '未知',
          value: 3,
        }
      ]
    },
    {
      label: '是否',
      type: 'switch',
      key: 'isT',
      validations: [Validators.required],
      errorTip: '请选择',
      checkedChildren: '开',
      unCheckedChildren: '关',
      // initialValue: false,
      onChange(v) {
        console.log(v)
      }
    },
    {
      type: 'buttongroup',
      key: 'group',
      extra: 'xxxx',
      formLayout: {
        wrapperCol: {
          span: 14,
          offset: 6
        }
      },
      children: [
        {
          label: 'Go back',
          type: 'button',
          key: '1',
          nzType: 'primary',
          icon: 'left',
          onClick() {
            console.log('...1')
          }
        },
        {
          label: 'Go forward',
          type: 'button',
          key: '2',
          nzType: 'primary',
          rightIcon: 'right',
          onClick() {
            console.log('...2')
          }
        },
      ]
    },
    {
      label: '搜索',
      key: 'submit',
      type: 'button',
      disabled: false,
      nzType: 'primary',
      formLayout: {
        wrapperCol: {
          span: 14,
          offset: 6
        }
      },
      icon: 'cloud',
      bindSearch: true,
      onClick: (e, form) => {
        console.log(e, form)

      }
    },
    {
      formLayout: {
        wrapperCol: {
          span: 14,
          offset: 6
        }
      },
      label: '重置',
      key: '',
      type: 'button',
      onClick: (e, form) => {
        console.log(form, form.reset)
        form.reset()
      }
    }
  ]
};