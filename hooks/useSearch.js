import { useQuery } from 'react-query';

const useSearch = (entity, queryFunction) => {
  const [input, setInput] = useState('');
  const [dataListDefault, setDataListDefault] = useState();
  const [dataList, setDataList] = useState();
  const { isLoading, isError, data, error } = useQuery(
    `${entity}`,
    queryFunction
  );

  setDataList(data);
  setDataListDefault(data);

  const updateInput = input => {
    const filtered = dataListDefault.filter(data => {
      return data.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setUserList(filtered);
  };

  return { isLoading, isError, error, dataList, input, updateInput, entity };
};

export default useSearch;
