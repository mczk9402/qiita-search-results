import { ArticleItem } from 'components/ArticleItem';
import React from 'react';
import { QiitaItem } from 'types/QiitaItem';

interface Props {
  articles: Array<QiitaItem>;
  searchWord: string;
  errorMessage: string;
  isLoading: boolean;
}

export const ArticleList: React.VFC<Props> = ({
  articles,
  searchWord,
  errorMessage,
  isLoading,
}) => {
  if (isLoading) return <p>ローディング中.............</p>;
  if (errorMessage) return <p>{errorMessage}</p>;
  if (searchWord && articles?.length === 0) {
    return <div>検索結果なし</div>;
  }
  return (
    <div style={{ display: 'grid', gap: '16px' }}>
      <p>検索キーワード: {searchWord}</p>
      <div
        style={{
          display: 'grid',
          gap: '16px',
        }}
      >
        {articles.map((article, index) => (
          <ArticleItem article={article} key={index} />
        ))}
      </div>
    </div>
  );
};
