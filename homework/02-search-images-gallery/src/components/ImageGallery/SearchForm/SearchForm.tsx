import React, { useRef } from 'react';

interface SearchFormProps {
  showImages(title: string): void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ showImages }) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      showImages(ref.current!.value);
      ref.current!.value = '';
    }
  };

  return (
    <div className='input-field mt5 row '>
      <input
        className='col s12 m12 '
        ref={ref}
        type='text'
        id='title'
        placeholder='what are you looking for?'
        onKeyPress={keyPressHandler}
      />
      <label htmlFor='title' className='active center-align'>
        write something
      </label>
    </div>
  );
};
