import React, { FC } from 'react';

interface FormListProps {
  title: string;
  required: boolean;
}

const FormItem: FC<FormListProps> = props => {
  const { title, required } = props;
  return (
    <>
      <p>{ title }</p>
      {
        required && <p>必須</p>
      }
    </>
  );
};

export default FormItem;
