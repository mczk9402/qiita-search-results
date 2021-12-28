import { apiClient } from 'lib/apiClient';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { QiitaItem, QiitaItemResponse } from 'types/QiitaItem';

export const useListQiitaArticles = () => {
  const [articles, setArticles] = useState<Array<QiitaItem>>([]);
  const [searchWord, setSearchWord] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchArticles = async (
    e: FormEvent<HTMLFormElement>,
    formText: string,
    setFormText: Dispatch<SetStateAction<string>>
  ) => {
    e.preventDefault(); // イベントをキャンセル
    setIsLoading(true); // ローディングの開始
    setErrorMessage(''); // エラーメッセージの初期化

    await apiClient
      .get<Array<QiitaItemResponse>>('/items', {
        params: {
          query: formText, // フォーム入力を検索ワードとして設定
          per_page: 25, // 25件の記事を取得するように設定
        },
      })
      .then((response) => {
        setArticles(
          response.data.map<QiitaItem>((item) => ({
            id: item.id,
            title: item.title,
            likes_count: item.likes_count,
            user: item.user,
            url: item.url,
          }))
        );

        // 検索キーワードをレスポンスから取得してセット
        setSearchWord(response.config.params.query);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });

    setIsLoading(false); //ローディング終了
    setFormText(''); // フォーム入力クリア
  };

  return {
    articles,
    searchWord,
    errorMessage,
    isLoading,
    fetchArticles,
  };
};
