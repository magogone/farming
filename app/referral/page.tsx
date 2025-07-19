"use client";

import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Copy, Check } from "lucide-react";
import { containerVariants, itemVariants } from "@/components/animations";
import React from "react";
import { StyledAlertDialog } from "@/components/ui/styled-alert-dialog";

const referralRewards = [
  { date: "2025-07-19 11:00", reward: 0.0025 },
  { date: "2025-07-18 14:20", reward: 0.0018 },
  { date: "2025-07-17 09:05", reward: 0.0031 },
];

export default function ReferralPage() {
  const referralLink = "https://dtxz.xyz?code=00031&referral=0xD8CE...";
  const [showCopySuccess, setShowCopySuccess] = React.useState(false);
  const [showErrorDialog, setShowErrorDialog] = React.useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 1500);
    } catch (err) {
      setShowErrorDialog(true);
    }
  };

  return (
    <>
      {/* 覆盖背景渐变 */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-slate-50 z-[1]" />
      <motion.div
        className="space-y-8 p-4 relative z-[2]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Referral</CardTitle>
              <CardDescription className="text-white/90">
                Share your referral link with your friends and earn extra reward
                for each reward they receive.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Label className="text-white">Your Invitation Link</Label>
              <div className="flex items-center gap-2">
                <Input
                  readOnly
                  value={referralLink}
                  className="font-mono rounded-xl border-0 bg-white text-slate-600"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopyLink}
                  className="rounded-full bg-gradient-to-br from-gradient-start to-gradient-mid hover:opacity-80 transition-all duration-200"
                >
                  {showCopySuccess ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : (
                    <Copy className="h-4 w-4 text-white" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold text-blue-600 text-center">
                Referral Rewards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs font-medium px-2 py-2 whitespace-nowrap">
                      Date (UTC)
                    </TableHead>
                    <TableHead className="text-right text-xs font-medium px-2 py-2 whitespace-nowrap">
                      ETH Reward
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {referralRewards.map((reward) => (
                    <TableRow key={reward.date}>
                      <TableCell className="text-xs px-2 py-2 whitespace-nowrap">
                        {reward.date}
                      </TableCell>
                      <TableCell className="text-right text-xs px-2 py-2 font-mono whitespace-nowrap">
                        {reward.reward.toFixed(4)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* 错误提示对话框 */}
      <StyledAlertDialog
        open={showErrorDialog}
        onOpenChange={setShowErrorDialog}
        title="Notice"
        description="Copy failed, please copy the link manually"
        type="error"
      />
    </>
  );
}
