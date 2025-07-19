"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { MessageSquare, Send, ImageIcon } from "lucide-react";
import { StyledIcon } from "@/components/styled-icon";
import React from "react";

export function ChatSheet() {
  const [message, setMessage] = React.useState("");
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 这里可以处理文件上传逻辑
      console.log("Selected file:", file);
    }
  };

  const handleSend = () => {
    if (message.trim()) {
      // 这里可以处理发送消息逻辑
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-24 right-4 z-30 h-14 w-14 rounded-full shadow-lg bg-gradient-to-br from-gradient-start/70 to-gradient-mid/70 border-0"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full max-w-md flex-col">
        <SheetHeader>
          <SheetTitle>Customer Service Chat</SheetTitle>
          <SheetDescription>
            Have a question? Ask our support team.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 py-4">
          {/* Chat history would go here */}
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Chat history is empty
          </div>
        </div>
        <SheetFooter>
          <div className="flex w-full items-center space-x-3">
            {/* 图片上传按钮 */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleImageUpload}
              className="shrink-0 rounded-full"
            >
              <StyledIcon className="h-10 w-10">
                <ImageIcon className="h-5 w-5" />
              </StyledIcon>
            </Button>

            {/* 隐藏的文件输入 */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            {/* 文本输入框 */}
            <Input
              type="text"
              placeholder="Please enter..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />

            {/* 发送按钮 - 使用与首页卡片相同的样式 */}
            <Button
              onClick={handleSend}
              variant="ghost"
              size="icon"
              className="shrink-0 rounded-full"
            >
              <StyledIcon className="h-10 w-10">
                <Send className="h-4 w-4" />
              </StyledIcon>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
