"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Icons } from "@/components/icons" // Icons不再需要eth定义

export default function Header() {
  const [isConnected, setIsConnected] = React.useState(false);
  const [walletAddress, setWalletAddress] = React.useState("");

  const [showErrorDialog, setShowErrorDialog] = React.useState(false);

  const handleConnect = () => {
    if (!isConnected) {
      // 模拟连接钱包
      connectWallet();
    }
    // 如果已连接，点击会触发下拉菜单，不需要额外处理
  };

  const connectWallet = async () => {
    try {
      // 模拟连接过程
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 模拟生成钱包地址
      const mockAddress = "0xD8CE...7F9A";
      setWalletAddress(mockAddress);
      setIsConnected(true);
      // 移除成功弹窗，直接显示钱包地址
    } catch (error) {
      setShowErrorDialog(true);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress("");
  };

  return (
    <>
      <header className="sticky top-0 z-20 flex h-20 items-center justify-between rounded-b-2xl bg-white/60 px-4 text-slate-600 shadow-sm backdrop-blur-lg">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/50 p-2 shadow-md">
            {/* 使用图片替换 Icons.eth 组件 */}
            <img
              src="/generated-eth-logo-v3.png"
              alt="Ethereum Logo"
              className="h-7 w-7 rounded-full object-cover"
              style={{ filter: "saturate(3)" }}
            />
          </div>
          <h1 className="text-xl font-bold">ETH Farming</h1>
        </div>
        {isConnected ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full bg-gradient-to-br from-gradient-start to-gradient-mid text-white shadow-md hover:opacity-80"
              >
                <Wallet className="mr-2 h-4 w-4" />
                {walletAddress}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-32 bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-xl"
            >
              <DropdownMenuItem
                onClick={disconnectWallet}
                className="text-red-600 hover:text-red-700 hover:bg-red-50 cursor-pointer rounded-lg m-1"
              >
                Disconnect
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleConnect}
            className="rounded-full bg-gradient-to-br from-gradient-start to-gradient-mid text-white shadow-md hover:opacity-80"
          >
            <Wallet className="mr-2 h-4 w-4" />
            Connect
          </Button>
        )}
      </header>

      {/* 连接失败对话框 */}
      <AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <AlertDialogContent className="bg-white/95 backdrop-blur-sm relative overflow-hidden border-0 shadow-xl rounded-2xl max-w-md">
          {/* 以太坊关系图装饰 - 右上角 */}
          <div className="absolute -top-12 -right-12 w-48 h-48 opacity-20 z-0 transform rotate-45">
            <img
              src="/images/eth-logo.png"
              alt="ETH Background"
              className="w-full h-full object-contain"
            />
          </div>

          <AlertDialogHeader className="relative z-10 text-center space-y-3 pb-4">
            <AlertDialogTitle className="text-xl font-bold text-slate-600">
              Connection Failed
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600 text-base leading-relaxed">
              Unable to connect to wallet. Please check if your wallet is
              installed and unlocked.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="relative z-10 flex gap-3 pt-4">
            <AlertDialogAction
              onClick={() => setShowErrorDialog(false)}
              className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white border-0 rounded-xl py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
