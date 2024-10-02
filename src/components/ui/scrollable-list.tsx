import { ScrollArea } from "@/components/ui/scroll-area"

const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)

export function ScrollableList() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      {items.map((item) => (
        <div key={item} className="text-sm">
          {item}
        </div>
      ))}
    </ScrollArea>
  )
}