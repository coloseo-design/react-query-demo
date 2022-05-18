/**
 * 携带参数
 * @param {*} param0
 * @returns
 */
export const info = ({ queryKey }) => {
  const [_key, payload] = queryKey;
  return fetch(`https://api.github.com/repos/${payload.name}`).then(r => r.json());
};


export const saveToLocalStorage = (data) => {
  localStorage.setItem(data.key, JSON.stringify(data.data));
}
