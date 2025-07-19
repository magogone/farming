"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
// import { Icons } from "@/components/icons" // Icons不再需要usdc定义
import { containerVariants, itemVariants } from "@/components/animations"

const withdrawalHistory = [
  { date: "2025-07-18", usdc: 1000, status: "Completed", remark: "OK" },
  { date: "2025-07-15", usdc: 500, status: "Completed", remark: "OK" },
  { date: "2025-07-12", usdc: 2500, status: "Pending", remark: "Processing" },
]

export default function WithdrawPage() {
  return (
    <motion.div className="space-y-8 p-4" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <Card className="bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Withdraw</CardTitle>
            <CardDescription>Withdraw your USDC balance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Available Amount</p>
              <p className="text-2xl font-bold">5,430.00 USDC</p>
            </div>
            <div className="space-y-2">
              <Label>Amount</Label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* 使用图片替换 Icons.usdc 组件 */}
                  <img src="/images/usdc-logo.png" alt="USDC Logo" className="h-5 w-5 rounded-full" />
                </div>
                <Input type="number" placeholder="0" className="pl-10 rounded-xl border-0 bg-slate-100" />
              </div>
            </div>
            <Button className="w-full rounded-full" size="lg">
              Withdraw
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Withdrawal History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>USDC</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {withdrawalHistory.map((item) => (
                  <TableRow key={item.date}>
                    <TableCell>{item.date}</TableCell>
                    <TableCell className="font-mono">{item.usdc.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.status === "Completed"
                            ? "default"
                            : item.status === "Pending"
                              ? "secondary"
                              : "destructive"
                        }
                        className="bg-green-100 text-green-800"
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
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
