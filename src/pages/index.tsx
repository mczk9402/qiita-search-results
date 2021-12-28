import { ArticleList } from 'components/ArticleList';
import { SearchForm } from 'components/SearchForm';
import { useListQiitaArticles } from 'hooks/useListQiitaArticles';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const { articles, searchWord, errorMessage, isLoading, fetchArticles } = useListQiitaArticles();

  return (
    <main>
      <Head>
        <title>【React / TypeScript】axios と QiitaAPI を使ったサンプルアプリ</title>
        <meta
          name="description"
          content="【React / TypeScript】axios と QiitaAPI を使ったサンプルアプリ"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <label
        style={{
          display: 'block',
          color: 'gray',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        Qiita 記事 検索キーワードを入力
      </label>
      <SearchForm fetchArticles={fetchArticles} />
      <ArticleList
        articles={articles}
        searchWord={searchWord}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </main>
  );
};

export default Home;
