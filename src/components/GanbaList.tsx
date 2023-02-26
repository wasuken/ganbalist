import { useState } from "react";
import { GanbaListProps, GanbaItem } from '@/const'
import {
  Main,
  InputListArea
} from './CreateGanbaListStyles';

function initList() {
  return [{ name: "" }];
}
export default function CreateGanbaList(props: GanbaListProps) {
  return (
    <div>
      <Main>
        <InputListArea>
          {props.list.map((x, i) => (
            <li key={i}>
              {x.name}
              <input type="checkbox" />
            </li>
          ))}
        </InputListArea>
      </Main>
    </div>
  );
}
