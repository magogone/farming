import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { MessageSquare, Send } from "lucide-react"

export function ChatSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-24 right-4 z-10 h-14 w-14 rounded-full shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full max-w-md flex-col">
        <SheetHeader>
          <SheetTitle>Customer Service Chat</SheetTitle>
          <SheetDescription>Have a question? Ask our support team.</SheetDescription>
        </SheetHeader>
        <div className="flex-1 py-4">
          {/* Chat history would go here */}
          <div className="flex h-full items-center justify-center text-muted-foreground">Chat history is empty</div>
        </div>
        <SheetFooter>
          <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="Please enter..." />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
