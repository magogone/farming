"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Users, Network, Gem, FileText } from "lucide-react";
// import { Icons } from "@/components/icons" // Icons不再需要eth定义
import { StyledIcon } from "@/components/styled-icon";
import { containerVariants, itemVariants } from "@/components/animations";
import RelationChart from "@/components/relation-chart";

const latestYields = [
  { address: "0xfA...A294", reward: 0.00125 },
  { address: "0xdA...cB8d", reward: 0.01074 },
  { address: "0xb2...981A", reward: 0.00061 },
];

const partners = [
  { name: "CoinMarketCap", logo: "/coinmarketcap-interface.png" },
  { name: "CoinGecko", logo: "/coingecko-interface.png" },
  { name: "Huobi", logo: "/abstract-geometric-logo.png" },
  { name: "Crypto.com", logo: "/crypto-com-logo.png" },
  { name: "TronPad", logo: "/tronpad.png" },
];

const stats = [
  { icon: Network, value: "195", label: "Nodes", variant: "blue" },
  { icon: Users, value: "65,179", label: "Participants", variant: "green" },
  { icon: Gem, value: "119.52 M", label: "USDC Verified", variant: "teal" },
  // 替换 Icons.eth 为图片路径
  {
    imageSrc: "/images/eth-logo.png",
    value: "22.81 M",
    label: "ETH Reward",
    variant: "blue",
  },
];

export default function FarmPage() {
  return (
    <motion.div
      className="space-y-8 p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mt-24 relative">
        {/* 关系图组件层 */}
        <div className="absolute inset-0 z-[2] flex items-center justify-center">
          <RelationChart className="opacity-40" />
        </div>

        {/* 内容层 */}
        <div className="relative z-10">
          <Card className="bg-white/30 text-center backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">
                Liquidity Farming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Farm daily interest on USDC by providing liquidity for ETH
                farming pools.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="relative z-[15]">
        <motion.div
          className="grid grid-cols-2 gap-4 ml-6 pt-8"
          variants={containerVariants}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants}>
              <div className="flex items-center p-3 gap-2">
                {stat.imageSrc ? (
                  <StyledIcon>
                    <img
                      src={stat.imageSrc || "/placeholder.svg"}
                      alt={stat.label}
                      className="h-5 w-5 rounded-full"
                    />
                  </StyledIcon>
                ) : stat.icon ? (
                  <StyledIcon>
                    <stat.icon className="h-5 w-5" />
                  </StyledIcon>
                ) : null}
                <div className="flex flex-col">
                  <p className="text-base font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Latest Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div className="space-y-4" variants={containerVariants}>
              {latestYields.map((yieldData) => (
                <motion.div
                  key={yieldData.address}
                  className="flex items-center justify-between"
                  variants={itemVariants}
                >
                  <p className="font-mono text-sm text-muted-foreground">
                    {yieldData.address}
                  </p>
                  <p className="font-mono text-sm font-semibold">
                    {yieldData.reward.toFixed(5)} ETH
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button
          variant="outline"
          className="w-full justify-between rounded-2xl bg-gradient-to-br from-gradient-start/70 to-gradient-mid/70 p-4 h-auto border-0 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white">
              <FileText className="h-5 w-5" />
            </div>
            <span className="font-semibold text-white">Whitepaper</span>
          </div>
          <ArrowRight className="h-5 w-5 text-white/80" />
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center gap-3">
          {/* Left triangle (points right) */}
          <div className="h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-[#3767d3]" />
          <h2 className="px-2 text-lg font-bold text-center text-[#3767d3]">
            Partners
          </h2>
          {/* Right triangle (points left) */}
          <div className="h-0 w-0 border-y-[6px] border-r-[10px] border-y-transparent border-r-[#3767d3]" />
        </div>
        <div className="mt-2 overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -720], // 移动距离: (w-32=128px + gap=16px) * 5个partners = 720px
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            style={{ width: "fit-content" }}
          >
            {/* 显示所有partners两次以创建无缝循环 */}
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex h-14 w-32 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-lg shadow-slate-200/60"
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
              >
                <span className="text-xs font-medium text-slate-600 text-center truncate px-1">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="px-2 text-lg font-bold text-slate-600">FAQ</h2>
        <Card className="mt-2">
          <CardContent className="p-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-4 justify-between text-left">
                  What is the return of investment (ROI)?
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <div className="space-y-2 text-sm">
                    <p>
                      After successfully joining, the system will start to
                      calculate the amount of USDC you hold through the smart
                      contract. The reward will be distributed every 6 hours.
                    </p>
                    <p className="font-semibold">
                      The expected daily production income:
                    </p>
                    <div className="space-y-1 text-xs">
                      <div>1. 100 - 4,999 USDC: 1.3% - 1.6%</div>
                      <div>2. 5,000 - 19,999 USDC: 1.6% - 1.9%</div>
                      <div>3. 20,000 - 49,999 USDC: 1.9% - 2.2%</div>
                      <div>4. 50,000 - 99,999 USDC: 2.2% - 2.5%</div>
                      <div>5. 100,000 - 199,999 USDC: 2.5% - 2.8%</div>
                      <div>6. 200,000 - 499,999 USDC: 2.8% - 3.1%</div>
                      <div>7. 500,000 - 999,999 USDC: 3.1% - 3.5%</div>
                      <div>8. 1,000,000 - 1,999,999 USDC: 3.5% - 3.8%</div>
                      <div>9. 2,000,000+ USDC: 4.1%</div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-4 justify-between text-left">
                  How to earn reward?
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  The cryptocurrency mined every day generates ETH revenue and
                  gives us a certain percentage of revenue in accordance with
                  contract standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-0">
                <AccordionTrigger className="px-4 justify-between text-left">
                  Is there a reward for inviting friends?
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  Yes, you can invite your friends to join the mining pool
                  through your referral link. You will get a 30% ETH reward
                  everytime your friends receive their reward.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
