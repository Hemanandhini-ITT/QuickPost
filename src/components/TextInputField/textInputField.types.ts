import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { TextInputProps } from 'react-native';

export interface TextInputFieldProps<T extends FieldValues> extends TextInputProps {
  name: Path<T>;
  label: string;
  control: Control<T>;
  errors: FieldErrors<T>;
  required?: boolean;
}
