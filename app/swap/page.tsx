"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StyledAlertDialog } from "@/components/ui/styled-alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { Icons } from "@/components/icons" // Icons不再需要eth和usdc定义
import { ArrowDownUp, RefreshCw } from "lucide-react";
import { containerVariants, itemVariants } from "@/components/animations";

const swapHistory = [
  { date: "2025-07-19 10:30", from: 0.1, to: 350.52 },
  { date: "2025-07-18 15:45", from: 0.05, to: 174.98 },
  { date: "2025-07-17 20:00", from: 0.2, to: 701.1 },
];

export default function SwapPage() {
  const [fromValue, setFromValue] = React.useState("");
  const [toValue, setToValue] = React.useState("");
  const [isSwapping, setIsSwapping] = React.useState(false);
  const [fromCurrency, setFromCurrency] = React.useState("ETH");
  const [toCurrency, setToCurrency] = React.useState("USDC");
  const [showSuccessDialog, setShowSuccessDialog] = React.useState(false);
  const [exchangeResult, setExchangeResult] = React.useState("");
  const [showErrorDialog, setShowErrorDialog] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  // 计算兑换金额
  const calculateExchange = (
    amount: string,
    from: string,
    to: string
  ): string => {
    if (!amount || parseFloat(amount) <= 0) return "";

    if (from === "ETH" && to === "USDC") {
      return (parseFloat(amount) * 1850).toFixed(2);
    } else if (from === "USDC" && to === "ETH") {
      return (parseFloat(amount) / 1850).toFixed(6);
    } else {
      return amount; // 同币种情况
    }
  };

  // 当From金额或币种变化时，自动计算To金额
  React.useEffect(() => {
    if (fromValue && parseFloat(fromValue) > 0) {
      const calculatedAmount = calculateExchange(
        fromValue,
        fromCurrency,
        toCurrency
      );
      setToValue(calculatedAmount);
    } else {
      setToValue("");
    }
  }, [fromValue, fromCurrency, toCurrency]);

  // 切换币种
  const handleCurrencySwap = () => {
    const tempFromValue = fromValue;
    const tempToValue = toValue;
    const tempFromCurrency = fromCurrency;
    const tempToCurrency = toCurrency;

    setFromValue(tempToValue);
    setToValue(tempFromValue);
    setFromCurrency(tempToCurrency);
    setToCurrency(tempFromCurrency);
  };

  // 执行兑换
  const handleExchange = async () => {
    if (!fromValue || parseFloat(fromValue) <= 0) {
      setErrorMessage("请输入有效的兑换金额");
      setShowErrorDialog(true);
      return;
    }

    setIsSwapping(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // 计算兑换结果
      let result;
      if (fromCurrency === "ETH" && toCurrency === "USDC") {
        result = (parseFloat(fromValue) * 1850).toFixed(2);
      } else if (fromCurrency === "USDC" && toCurrency === "ETH") {
        result = (parseFloat(fromValue) / 1850).toFixed(6);
      } else {
        result = fromValue; // 同币种情况
      }

      setToValue(result);
      setExchangeResult(
        `${fromValue} ${fromCurrency} 兑换为 ${result} ${toCurrency}`
      );
      setShowSuccessDialog(true);
    } catch (error) {
      setErrorMessage("兑换失败，请重试");
      setShowErrorDialog(true);
    } finally {
      setIsSwapping(false);
    }
  };

  return (
    <>
      {/* 覆盖背景渐变为白色 */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-white z-[1]" />

      {/* 以太坊图标 - 右上角 */}
      <div className="absolute top-4 right-4 w-16 h-16 z-[3] opacity-50">
        <img
          src="/generated-eth-logo-v3.png"
          alt="Ethereum decoration"
          className="w-full h-full object-contain drop-shadow-sm"
        />
      </div>

      <motion.div
        className="space-y-8 p-4 relative z-[2]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Swap</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label className="text-white text-sm">From</Label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                    <img
                      src={
                        fromCurrency === "ETH"
                          ? "/images/eth-logo.png"
                          : "/images/usdc-logo.png"
                      }
                      alt={`${fromCurrency} Logo`}
                      className="h-5 w-5 rounded-full"
                    />
                  </div>
                  <Input
                    type="number"
                    placeholder="0"
                    value={fromValue}
                    onChange={(e) => setFromValue(e.target.value)}
                    className="pl-10 pr-16 rounded-xl border-0 bg-white/90 text-slate-600 h-12 text-center"
                  />
                  <Button
                    variant="ghost"
                    onClick={() => {
                      let maxAmount;
                      if (fromCurrency === "ETH") {
                        maxAmount = "1.5"; // 假设最大ETH余额为1.5
                      } else {
                        maxAmount = "2775.00"; // 假设最大USDC余额为2775
                      }
                      setFromValue(maxAmount);
                      // 自动计算并设置兑换后的金额
                      const calculatedAmount = calculateExchange(
                        maxAmount,
                        fromCurrency,
                        toCurrency
                      );
                      setToValue(calculatedAmount);
                    }}
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 px-2 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-mid text-white hover:opacity-80 text-xs"
                  >
                    ALL
                  </Button>
                </div>
              </div>

              <div className="flex justify-center items-center relative z-10">
                <div className="rounded-full bg-gradient-to-br from-gradient-start to-gradient-mid shadow-lg p-2">
                  <RefreshCw className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="space-y-1" style={{ marginTop: "-16px" }}>
                <Label className="text-white text-sm">To</Label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                    <img
                      src={
                        toCurrency === "ETH"
                          ? "/images/eth-logo.png"
                          : "/images/usdc-logo.png"
                      }
                      alt={`${toCurrency} Logo`}
                      className="h-5 w-5 rounded-full"
                    />
                  </div>
                  <Input
                    type="number"
                    placeholder="0"
                    value={toValue}
                    onChange={(e) => setToValue(e.target.value)}
                    className="pl-10 pr-16 rounded-xl border-0 bg-white/90 text-slate-600 h-12 text-center"
                    readOnly
                  />
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <Button
                  onClick={handleExchange}
                  disabled={isSwapping}
                  className="px-12 py-3 rounded-full bg-gradient-to-br from-gradient-start to-gradient-mid hover:opacity-80 hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                  size="lg"
                >
                  {isSwapping ? "Swapping..." : "Exchange"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold text-blue-600 text-center">
                Swap History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs font-medium px-2 py-2 whitespace-nowrap">
                      Date (UTC)
                    </TableHead>
                    <TableHead className="text-xs font-medium px-2 py-2 whitespace-nowrap">
                      From ETH
                    </TableHead>
                    <TableHead className="text-right text-xs font-medium px-2 py-2 whitespace-nowrap">
                      To USDC
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {swapHistory.map((item) => (
                    <TableRow key={item.date}>
                      <TableCell className="text-xs px-2 py-2 whitespace-nowrap">
                        {item.date}
                      </TableCell>
                      <TableCell className="text-xs px-2 py-2 font-mono whitespace-nowrap">
                        {item.from.toFixed(4)}
                      </TableCell>
                      <TableCell className="text-right text-xs px-2 py-2 font-mono whitespace-nowrap">
                        {item.to.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* 兑换成功对话框 */}
      <StyledAlertDialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
        title="兑换成功！"
        description={exchangeResult}
        type="success"
      />

      {/* 错误提示对话框 */}
      <StyledAlertDialog
        open={showErrorDialog}
        onOpenChange={setShowErrorDialog}
        title="提示"
        description={errorMessage}
        type="error"
      />
    </>
  );
}
