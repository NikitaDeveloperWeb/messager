import React from 'react';

interface ButtonProps {
  value: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  form?: string;
  className?: string;
}
enum Action {
  GET_USER,
  POST_USER,
  POST_MESSAGE_TO_USER,
  GET_MESSAGE_FROM_USER,
  SET_DARK_THEME,
  SET_LIGTH_THEME,
  AUTH_USER_ACCOUNT,
  REGISTER_USER_ACCOUNT,
  GALEREA_OF_USER,
  LOADING_PHOTOS_USERS_TO_MESSAGE,
  BLACK_LIST_USERS,
  ADD_USER_TO_BLACK_LIST,
  DELETE_USER_FROM_BLACK_LIST,
}
console.log(Action);

function Button({ value, type, form, className }: ButtonProps) {
  return (
    <button type={type} form={form} className={className}>
      {value}
    </button>
  );
}

export default Button;
