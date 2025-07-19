"use client"

import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy } from "lucide-react"
import { containerVariants, itemVariants } from "@/components/animations"

const referralRewards = [
  { date: "2025-07-19 11:00", reward: 0.0025 },
  { date: "2025-07-18 14:20", reward: 0.0018 },
  { date: "2025-07-17 09:05", reward: 0.0031 },
]

export default function ReferralPage() {
  const referralLink = "https://dtxz.xyz?code=00031&referral=0xD8CE..."

  return (
    <motion.div className="space-y-8 p-4" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <Card className="bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Referral</CardTitle>
            <CardDescription>
              Share your referral link with your friends and earn extra reward for each reward they receive.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label>Your Invitation Link</Label>
            <div className="flex items-center gap-2">
              <Input readOnly value={referralLink} className="font-mono rounded-xl border-0 bg-slate-100" />
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Referral Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date (UTC)</TableHead>
                  <TableHead className="text-right">ETH Reward</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referralRewards.map((reward) => (
                  <TableRow key={reward.date}>
                    <TableCell>{reward.date}</TableCell>
                    <TableCell className="text-right font-mono">{reward.reward.toFixed(4)}</TableCell>
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
