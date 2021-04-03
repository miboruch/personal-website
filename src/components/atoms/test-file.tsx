import React from 'react';

interface Props {
  test?: string;
}

const TestFile: React.FC<Props> = () => {
  return (
    <div>
      <p>hello friend</p>
    </div>
  );
};

export default TestFile;
