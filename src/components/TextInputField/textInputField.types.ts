import {Control, FieldErrors, FieldValues, Path} from 'react-hook-form';
import {KeyboardTypeOptions, StyleProp, TextStyle} from 'react-native';

export interface TextInputFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  errors: FieldErrors<T>;
  keyboardType?: KeyboardTypeOptions;
  required?: boolean;
  numberOfLines: number;
  maxLength?: number;
  style?: StyleProp<TextStyle>;
}
