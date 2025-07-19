"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { containerVariants, itemVariants } from "@/components/animations";

const farmingRewards = [
  { date: "2025-07-19 12:00", reward: 0.0152 },
  { date: "2025-07-19 06:00", reward: 0.0149 },
  { date: "2025-07-19 00:00", reward: 0.0155 },
];

const walletInfo = [
  { label: "Total Reward", value: "0.54321 ETH" },
  { label: "Exchangeable", value: "0.51234 ETH" },
  { label: "Account Balance", value: "5,430.00 USDC" },
];

const TitleWithDecorations = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-3">
    {/* Left triangle (points right) */}
    <div className="h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-[#3767d3]" />
    <h2 className="text-center text-xl font-bold text-slate-600">{children}</h2>
    {/* Right triangle (points left) */}
    <div className="h-0 w-0 border-y-[6px] border-r-[10px] border-y-transparent border-r-[#3767d3]" />
  </div>
);

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end">
      <motion.div
        className="space-y-8 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <TitleWithDecorations>My Wallet</TitleWithDecorations>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
                <p className="text-2xl font-bold text-slate-800">0.00</p>
                <div className="flex items-center gap-2">
                  <img
                    src="/images/eth-logo.png"
                    alt="Ethereum Logo"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="font-semibold">ETH</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
                <p className="text-2xl font-bold text-slate-800">0.00</p>
                <div className="flex items-center gap-2">
                  <img
                    src="/images/usdc-logo.png"
                    alt="USDC Logo"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="font-semibold">USDC</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardContent className="space-y-4 p-4">
              {walletInfo.map((info) => {
                const [numberPart, ...unitParts] = info.value.split(" ");
                const unitPart = unitParts.join(" ");

                return (
                  <div key={info.label} className="space-y-2">
                    <Label className="text-muted-foreground">
                      {info.label}
                    </Label>
                    <div className="flex h-10 items-center justify-center rounded-xl border-0 bg-slate-100 p-2">
                      <span className="font-bold text-blue-600">
                        {numberPart}
                      </span>
                      <span className="ml-1 text-slate-800">{unitPart}</span>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-left text-xl font-bold text-slate-600 mb-4">
            Farming Rewards
          </h2>
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardContent>
              {/* 表格标题 */}
              <div className="flex items-center justify-between py-3 border-b border-gray-200 mb-4">
                <div className="text-sm font-medium text-muted-foreground">
                  Date(UTC)
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  ETH Reward
                </div>
              </div>

              <motion.div className="space-y-4" variants={containerVariants}>
                {farmingRewards.map((reward) => (
                  <motion.div
                    key={reward.date}
                    className="flex items-center justify-between pt-4"
                    variants={itemVariants}
                  >
                    <div>
                      <p className="font-medium">
                        {reward.reward.toFixed(4)} ETH
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {reward.date}
                      </p>
                    </div>
                    <div className="text-right font-mono text-sm text-green-600">
                      +${(reward.reward * 3500).toFixed(2)}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
