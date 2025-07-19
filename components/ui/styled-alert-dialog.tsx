"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface StyledAlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  type?: "success" | "error" | "confirm";
}

export function StyledAlertDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmText = "确定",
  cancelText = "取消",
  onConfirm,
  onCancel,
  type = "success",
}: StyledAlertDialogProps) {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      onOpenChange(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onOpenChange(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="!bg-white/95 !border-0 !rounded-2xl !shadow-2xl relative overflow-hidden">
        {/* 以太坊图案装饰 - 右上角 */}
        <div className="absolute -top-6 -right-6 w-24 h-24 opacity-15 z-0 transform rotate-12">
          <img
            src="/generated-eth-logo-v3.png"
            alt="ETH Background"
            className="w-full h-full object-contain"
            style={{ filter: "saturate(1.5) brightness(1.2)" }}
          />
        </div>

        <AlertDialogHeader className="relative z-10 text-center space-y-3 pb-4">
          <AlertDialogTitle className="text-xl font-bold text-slate-800">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-slate-600 text-base leading-relaxed">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="relative z-10 flex gap-3 pt-4 flex-col sm:flex-row">
          {type === "confirm" && (
            <AlertDialogCancel
              onClick={handleCancel}
              className="flex-1 rounded-xl border-0 bg-gray-100 hover:bg-gray-200 text-slate-700 py-3 px-4 font-medium shadow-sm hover:shadow-md transition-all duration-200"
            >
              {cancelText}
            </AlertDialogCancel>
          )}
          <AlertDialogAction
            onClick={handleConfirm}
            className={`${
              type === "confirm" ? "flex-1" : "w-full"
            } rounded-xl border-0 py-3 px-4 font-medium shadow-lg hover:shadow-xl transition-all duration-200 ${
              type === "success"
                ? "bg-gradient-to-r from-gradient-start to-gradient-mid hover:opacity-80"
                : type === "error"
                ? "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
                : "bg-gradient-to-r from-gradient-start to-gradient-mid hover:opacity-80"
            } text-white`}
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
