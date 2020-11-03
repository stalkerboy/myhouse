import React, { FC, useEffect, useState } from "react";

import { IPropsQNAItem, IStateQNAList } from "../types/qnaType";
import QnaCard from "../components/QnaCard";
import AppLayout from "../containers/layout/AppLayout";

import { dummyDataQNA } from "../dummy/dummyqnas";

export const QnaListPageContainer: FC = () => {
  const [iStateQNAList, setIStateQNAList] = useState<IStateQNAList>();

  useEffect(() => {
    setIStateQNAList({ listItem: dummyDataQNA });
  }, []);

  return (
    <AppLayout>
      {iStateQNAList &&
        iStateQNAList.listItem.map((data: IPropsQNAItem) => {
          return <QnaCard key={data.id} QnaItem={data} />;
        })}
    </AppLayout>
  );
};
