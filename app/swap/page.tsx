"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Icons } from "@/components/icons" // Icons不再需要eth和usdc定义
import { ArrowDownUp } from "lucide-react"
import { containerVariants, itemVariants } from "@/components/animations"

const swapHistory = [
  { date: "2025-07-19 10:30", from: 0.1, to: 350.52 },
  { date: "2025-07-18 15:45", from: 0.05, to: 174.98 },
  { date: "2025-07-17 20:00", from: 0.2, to: 701.1 },
]

export default function SwapPage() {
  return (
    <motion.div className="space-y-8 p-4" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <Card className="bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Swap</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>From</Label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* 使用图片替换 Icons.eth 组件 */}
                  <img src="/images/eth-logo.png" alt="Ethereum Logo" className="h-5 w-5 rounded-full" />
                </div>
                <Input type="number" placeholder="0" className="pl-10 rounded-xl border-0 bg-slate-100" />
                <Button variant="secondary" className="absolute right-1 top-1/2 -translate-y-1/2 h-7 rounded-lg">
                  ALL
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <Button variant="ghost" size="icon" className="rounded-full bg-slate-100">
                <ArrowDownUp className="h-5 w-5 text-slate-500" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label>To</Label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* 使用图片替换 Icons.usdc 组件 */}
                  <img src="/images/usdc-logo.png" alt="USDC Logo" className="h-5 w-5 rounded-full" />
                </div>
                <Input type="number" placeholder="0" className="pl-10 rounded-xl border-0 bg-slate-100" />
              </div>
            </div>

            <Button className="w-full rounded-full" size="lg">
              Exchange
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Swap History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date (UTC)</TableHead>
                  <TableHead>From ETH</TableHead>
                  <TableHead className="text-right">To USDC</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {swapHistory.map((item) => (
                  <TableRow key={item.date}>
                    <TableCell>{item.date}</TableCell>
                    <TableCell className="font-mono">{item.from.toFixed(4)}</TableCell>
                    <TableCell className="text-right font-mono">{item.to.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
