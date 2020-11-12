// import axios from "axios";

import { sleep } from "../lib/sleep";
import { dummyDataPhoto } from "../dummy/dummyPhoto";
import { IPropsPhotoItem } from "../types/PhotoType"

export async function getPhotoList(count: number) {

  await sleep(2000);

  const photoList: IPropsPhotoItem[] = dummyDataPhoto;
  return photoList;
}