"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StyledAlertDialog } from "@/components/ui/styled-alert-dialog";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
// import { Icons } from "@/components/icons" // Icons不再需要usdc定义
import { containerVariants, itemVariants } from "@/components/animations";
import RelationChart from "@/components/relation-chart";

const withdrawalHistory = [
  {
    date: "2025-07-18",
    usdc: 1000,
    status: "Completed",
    remark: "Bank Transfer",
  },
  { date: "2025-07-15", usdc: 500, status: "Completed", remark: "PayPal" },
  {
    date: "2025-07-12",
    usdc: 2500,
    status: "Pending",
    remark: "Wire Transfer",
  },
  {
    date: "2025-07-10",
    usdc: 750,
    status: "Completed",
    remark: "Crypto Wallet",
  },
  {
    date: "2025-07-08",
    usdc: 1200,
    status: "Failed",
    remark: "Invalid Account",
  },
  {
    date: "2025-07-05",
    usdc: 300,
    status: "Completed",
    remark: "Bank Transfer",
  },
];

export default function WithdrawPage() {
  const [withdrawAmount, setWithdrawAmount] = React.useState("");
  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = React.useState(false);
  const [showErrorDialog, setShowErrorDialog] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleWithdraw = () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      setErrorMessage("Please enter a valid withdrawal amount");
      setShowErrorDialog(true);
      return;
    }
    if (parseFloat(withdrawAmount) > 5430) {
      setErrorMessage("Withdrawal amount cannot exceed available balance");
      setShowErrorDialog(true);
      return;
    }
    setShowConfirmDialog(true);
  };

  const confirmWithdraw = async () => {
    setShowConfirmDialog(false);
    // 模拟提现处理
    setTimeout(() => {
      setShowSuccessDialog(true);
      setWithdrawAmount("");
    }, 1000);
  };

  return (
    <>
      {/* 保持渐变背景 - 延伸到屏幕一半 */}
      <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end z-[1]" />

      <motion.div
        className="space-y-8 p-4 relative z-[2]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-white/60 backdrop-blur-sm relative overflow-hidden">
            {/* 以太坊关系图装饰 - 右上角 */}
            <div className="absolute -top-12 -right-12 w-48 h-48 opacity-40 z-0 transform rotate-45">
              <RelationChart className="w-full h-full" />
            </div>

            <CardHeader className="relative z-10">
              <CardTitle className="text-slate-600">Withdraw</CardTitle>
              <CardDescription>Withdraw your USDC balance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Available Amount
                </p>
                <p className="text-2xl font-bold text-slate-600">
                  5,430.00 USDC
                </p>
              </div>
              <div className="space-y-2">
                <Label>Amount</Label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                    <img
                      src="/images/usdc-logo.png"
                      alt="USDC Logo"
                      className="h-5 w-5 rounded-full"
                    />
                  </div>
                  <Input
                    type="number"
                    placeholder="0"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="pl-10 pr-10 rounded-xl border-0 bg-white/90 backdrop-blur-sm shadow-sm focus:shadow-md transition-all duration-200 text-slate-600 text-center"
                  />
                </div>
              </div>
              <Button
                onClick={handleWithdraw}
                className="w-full rounded-xl bg-gradient-to-br from-gradient-start to-gradient-mid hover:opacity-80 shadow-lg hover:shadow-xl transition-all duration-200 border-0"
                size="lg"
              >
                Withdraw
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-bold text-blue-600 text-center">
                Withdrawal History
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs font-medium px-2 py-2 whitespace-nowrap text-slate-600">
                      Date (UTC)
                    </TableHead>
                    <TableHead className="text-xs font-medium px-2 py-2 text-center whitespace-nowrap text-slate-600">
                      USDC
                    </TableHead>
                    <TableHead className="text-xs font-medium px-2 py-2 text-center whitespace-nowrap text-slate-600">
                      Status
                    </TableHead>
                    <TableHead className="text-xs font-medium px-2 py-2 text-center whitespace-nowrap text-slate-600">
                      Remark
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {withdrawalHistory.map((item, index) => (
                    <TableRow key={index} className="border-b border-gray-100">
                      <TableCell className="text-xs px-2 py-2 font-medium whitespace-nowrap text-slate-600">
                        {item.date}
                      </TableCell>
                      <TableCell className="text-xs px-2 py-2 text-center font-mono whitespace-nowrap text-slate-600">
                        {item.usdc.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-xs px-2 py-2 text-center whitespace-nowrap">
                        <Badge
                          variant="secondary"
                          className={`text-xs px-2 py-1 whitespace-nowrap ${
                            item.status === "Completed"
                              ? "bg-green-50 text-green-600 border-green-200"
                              : item.status === "Pending"
                              ? "bg-yellow-50 text-yellow-600 border-yellow-200"
                              : "bg-blue-50 text-blue-600 border-blue-200"
                          }`}
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs px-2 py-2 text-center text-muted-foreground whitespace-nowrap">
                        {item.remark}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* 提现确认对话框 */}
      <StyledAlertDialog
        open={showConfirmDialog}
        onOpenChange={setShowConfirmDialog}
        title="Confirm Withdrawal"
        description={`Are you sure you want to withdraw ${withdrawAmount} USDC? This action cannot be undone.`}
        type="confirm"
        confirmText="Confirm Withdrawal"
        cancelText="Cancel"
        onConfirm={confirmWithdraw}
      />

      {/* 提现成功对话框 */}
      <StyledAlertDialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
        title="Withdrawal Successful!"
        description="Your withdrawal request has been submitted. Funds will arrive within 1-3 business days."
        type="success"
      />

      {/* 错误提示对话框 */}
      <StyledAlertDialog
        open={showErrorDialog}
        onOpenChange={setShowErrorDialog}
        title="Notice"
        description={errorMessage}
        type="error"
      />
    </>
  );
}
