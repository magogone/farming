import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
// import { Icons } from "@/components/icons" // Icons不再需要eth定义

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between rounded-b-2xl bg-white/60 px-4 text-slate-800 shadow-sm backdrop-blur-lg">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-white/50 p-2 shadow-md">
          {/* 使用图片替换 Icons.eth 组件 */}
          <img src="/images/eth-logo.png" alt="Ethereum Logo" className="h-7 w-7 rounded-full" />
        </div>
        <h1 className="text-xl font-bold">ETH Farming</h1>
      </div>
      <Button
        variant="secondary"
        size="sm"
        className="rounded-full bg-white/50 text-slate-800 shadow-md hover:bg-white/70"
      >
        <Wallet className="mr-2 h-4 w-4" />
        Connect
      </Button>
    </header>
  )
}
