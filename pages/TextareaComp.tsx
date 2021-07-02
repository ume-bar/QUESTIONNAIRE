import React, { FC } from 'react';

interface Props {
  name: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextareaComp: FC<Props> = props  => {
  const { value, onChange, name } = props;
  return (
    <>
    <textarea name={name} value={value} onChange={e => onChange(e)} />
    </>
  );
};

export default TextareaComp;
