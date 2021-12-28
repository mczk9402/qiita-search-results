import React from 'react';
import { QiitaItem } from 'types/QiitaItem';

interface Props {
  article: QiitaItem;
}

export const ArticleItem: React.VFC<Props> = ({ article }) => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '8px',
        gridTemplateColumns: 'repeat(2, 1fr)',
        borderBottom: '1px solid gray',
        paddingBottom: '16px',
      }}
    >
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        style={{ gridColumn: '1 / -1', textDecoration: 'underline' }}
      >
        {article.title}
      </a>
      <p>LGTM 👍：{article.likes_count}</p>
      <p>ユーザー：{article.user.name}</p>
    </div>
  );
};
