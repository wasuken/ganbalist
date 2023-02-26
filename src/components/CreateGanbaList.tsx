import { useState } from "react";
import { CreateGanbaListProps, GanbaItem } from '@/const'
import {
  Main,
  AddBtn,
  PostBtn,
  DelBtn,
  InputListArea
} from './CreateGanbaListStyles';

function initList() {
  return [{ name: "" }];
}
export default function CreateGanbaList(props: CreateGanbaListProps) {
  const [list, setList] = useState<GanbaItem[]>(initList());
  function addListItem() {
    setList([...list, ...initList()]);
  }
  function delListItem(i: number) {
    setList([...list.slice(0, i), ...list.slice(i + 1)]);
  }
  function changeListItem(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    const v = e.target.value;
    let nlist = [...list];
    nlist[i].name = v;
    setList([...nlist]);
  }
  return (
    <div>
      <Main>
        <InputListArea>
          {list.map((x, i) => (
            <div key={i}>
              <input
                type="text"
                value={list[i].name}
                onChange={(e) => changeListItem(e, i)}
                placeholder="input ganbari"
              />
              {i + 1 !== list.length && (
                <DelBtn onClick={() => delListItem(i)}>-</DelBtn>
              )}
              {i + 1 === list.length && (
                <AddBtn onClick={addListItem}>+</AddBtn>
              )}
            </div>
          ))}
        </InputListArea>
      </Main>
      <PostBtn onClick={() => props.post(list)}>作成</PostBtn>
    </div>
  );
}
