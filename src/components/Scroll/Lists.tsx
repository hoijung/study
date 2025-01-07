// import useIntersect from "utils/UseIntersect";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import axios from "axios";

type RootState = {
  apiData: any;
  pageReducer: any;
};

const serverIp = process.env.REACT_APP_Server_IP;

// 데이터 조회 함수
const fetchData = async () => {
  try {
    const response = await axios.get(serverIp+'/products'); // 실제 API URL로 변경
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const Lists = () => {
  const dispatch = useDispatch();

  const { apiData, isLoaded, pageCount } = useSelector((state: RootState) => ({
    apiData: state.apiData.data,
    isLoaded: state.apiData.isLoaded,
    pageCount: state.pageReducer.pageCount,
  }));

  const page = useRef(pageCount);

  useEffect(() => {
    fetchData();
    // dispatch(fetchData());
    // dispatch(getPageData(page.current));
  }, []);

  // const [_, setRef] = useIntersect(async (entry: any, observer: any) => {
  //   observer.unobserve(entry.target);
  //   // await dispatch(getPageData(page.current++));
  //   // await dispatch(getDataFromApi(page.current, true));
  //   observer.observe(entry.target);
  // }, {});

  return (
    <></>
    // <Wrap>
    //   <Nav>
    // 	...
    //   </Nav>
    //   <ul>
    //     {apiData.map((item, idx) => {
    //       ...
    //     })}
    //   </ul>
    //   {isLoaded && <p ref={setRef}>Loading...</p>}
    // </Wrap>
  );
};

export default Lists;