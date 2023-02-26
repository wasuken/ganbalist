import CreateGanbaList from "@/components/CreateGanbaList"
import GanbaList from "@/components/GanbaList"
import { GanbaItem } from '@/const'

export default function Home() {
  const list: GanbaItem[] = [{name: 'hoge'}]
  async function postList(items: GanbaItem[]){
    const res: Response = await fetch(`/api/list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items),
    });
    return res.ok
  }
  return (
    <>
      <CreateGanbaList post={postList} />
      <div>
        <h3>頑張リスト</h3>
        <GanbaList list={list} />
      </div>
    </>
  )
}
