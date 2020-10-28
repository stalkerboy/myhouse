// import React, { FC, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import QnaCard from '../components/QnaCard';
// import { RootState } from '../redux';
// import { getQnaListAsync } from '../redux/qna';

// interface QnaCardListProps {
//     type?: string;
// }

// const QnaCardList: FC<QnaCardListProps> = ({type}) => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(getQnaListAsync.request(0));
//     }, []);
//     const { data } = useSelector((state: RootState) => state.qna.qnaList);
//     return (
//         <div>
//             {/* {data.map((data:any) => {
//                 return (
//                     <QnaCard
//                         key={data.id}
//                         QnaItem ={data}
//                     />
//                 )
//             })} */}
//         </div>
//     )
// };

// export default QnaCardList;