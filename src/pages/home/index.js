import React, { memo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { info, saveToLocalStorage } from './service';

const Home = memo(() => {
  const { isLoading, error, data } = useQuery(['info', { name: 'tannerlinsley/react-query' }], info, {
    refetchOnWindowFocus: 'always', // 当前页面处于激活状态下重新请求
    enabled: true, // 这里可以增加一个依赖，当依赖为真才请求
  });
  const queryClient = useQueryClient();

  const mutaion = useMutation(saveToLocalStorage, {
    onSuccess() {
      // 保存到本地成功，重新加载
      queryClient.invalidateQueries('info');
    },
  })

  if (isLoading) return (<div>loading</div>);
  if (error) return (<div>error {error.message}</div>);

  const onReloadClick = () => {
    mutaion.mutate({
      key: 'react-query',
      data: {
        subscribers_count: data.subscribers_count,
        stargazers_count: data.stargazers_count,
        forks_count: data.forks_count,
      }
    });
  };

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div onClick={onReloadClick}>重新加载</div>
    </div>
  );
})

export default Home;
