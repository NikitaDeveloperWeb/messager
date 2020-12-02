import React from 'react';

interface FieldProps {
  type: string;
  placeholder: string;
  form?: string;
  className?: string;
}

function Field({ type, placeholder, form, className }: FieldProps) {
  return <input type={type} placeholder={placeholder} form={form} className={className} />;
}

export default Field;
