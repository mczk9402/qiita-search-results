import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';

interface Props {
  fetchArticles: (
    e: FormEvent<HTMLFormElement>,
    formText: string,
    setFormText: Dispatch<SetStateAction<string>>
  ) => void;
}

export const SearchForm: React.VFC<Props> = ({ fetchArticles }) => {
  const [formText, setFormText] = useState<string>('');
  const buttonColor = formText
    ? {
        backgroundColor: 'blue',
      }
    : {
        backgroundColor: 'gray',
      };

  return (
    <form onSubmit={(e) => fetchArticles(e, formText, setFormText)}>
      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <input
          placeholder="例: React"
          value={formText}
          onChange={(e) => setFormText(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '6px',
            width: '100%',
            border: '1px solid #222',
          }}
        />
        <button
          type="submit"
          disabled={!formText}
          style={{
            whiteSpace: 'nowrap',
            padding: '0 16px',
          }}
        >
          検索
        </button>
      </div>
    </form>
  );
};
