import React, { FC } from 'react';

interface Props {
  name: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextareaComp: FC<Props> = props  => {
  const { value } = props;
  return (
    <>
      <textarea value={value} ></textarea>
    </>
  );
};

export default TextareaComp;
