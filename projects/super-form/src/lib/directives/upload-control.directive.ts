import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Directive({
  selector: '[uploadControl]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadValueAccessor),
      multi: true
    }
  ]
})
export class UploadValueAccessor implements ControlValueAccessor {
  value: any;
  onChangeListener; // 改变值回调
  onTouchedListener; // 交互回调

  // constructor(...props) {
  //   console.log('==', props)
  // }

  writeValue(obj: any): void {
    console.log(obj)
    this.value = obj;// form中给你设置了obj值，根据obj，去更新组件/UI
    // this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
  }
  registerOnChange(fn: any): void {
    this.onChangeListener = fn;// 保存这个函数
  }
  registerOnTouched(fn: any): void {
    this.onTouchedListener = fn;// 保存这个函数
  }
  setDisabledState?(isDisabled: boolean): void {
    // this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  onChange(payload) {
    console.log('@@', payload)
    this.value = payload;
    this.onChangeListener(payload); // 告诉form，你的表单值改变成了payload
    this.onTouchedListener(); // 告诉form，你的表单有交互发生
  }
}
