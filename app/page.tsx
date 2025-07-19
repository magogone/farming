"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Users, Network, Gem, FileText } from "lucide-react"
// import { Icons } from "@/components/icons" // Icons不再需要eth定义
import { StyledIcon } from "@/components/styled-icon"
import { containerVariants, itemVariants } from "@/components/animations"

const latestYields = [
  { address: "0xfA...A294", reward: 0.00125 },
  { address: "0xdA...cB8d", reward: 0.01074 },
  { address: "0xb2...981A", reward: 0.00061 },
]

const partners = [
  { name: "CoinMarketCap", logo: "/coinmarketcap-interface.png" },
  { name: "CoinGecko", logo: "/coingecko-interface.png" },
  { name: "Huobi", logo: "/abstract-geometric-logo.png" },
  { name: "Crypto.com", logo: "/crypto-com-logo.png" },
  { name: "TronPad", logo: "/tronpad.png" },
]

const stats = [
  { icon: Network, value: "195", label: "Nodes", variant: "blue" },
  { icon: Users, value: "65,179", label: "Participants", variant: "green" },
  { icon: Gem, value: "119.52 M", label: "USDC Verified", variant: "teal" },
  // 替换 Icons.eth 为图片路径
  { imageSrc: "/images/eth-logo.png", value: "22.81 M", label: "ETH Reward", variant: "blue" },
]

export default function FarmPage() {
  return (
    <motion.div className="space-y-8 p-4" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants} className="mt-24">
        <Card className="bg-white/60 text-center backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-700">Liquidity Farming</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-500">Farm daily interest on USDC by providing liquidity for ETH farming pools.</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="px-2 text-lg font-bold text-center text-slate-700">Liquidity Farming</h2>
        <motion.div className="mt-2 grid grid-cols-2 gap-4" variants={containerVariants}>
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card>
                <CardContent className="flex flex-col items-center p-4 text-center">
                  {stat.imageSrc ? (
                    <StyledIcon>
                      <img
                        src={stat.imageSrc || "/placeholder.svg"}
                        alt={stat.label}
                        className="h-6 w-6 rounded-full"
                      />
                    </StyledIcon>
                  ) : (
                    <StyledIcon>
                      <stat.icon className="h-6 w-6" />
                    </StyledIcon>
                  )}
                  <p className="mt-2 text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
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
                  <p className="font-mono text-sm text-muted-foreground">{yieldData.address}</p>
                  <p className="font-mono text-sm font-semibold">{yieldData.reward.toFixed(5)} ETH</p>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button variant="outline" className="w-full justify-between rounded-2xl bg-white p-4 h-auto">
          <div className="flex items-center gap-3">
            <StyledIcon>
              <FileText className="h-5 w-5" />
            </StyledIcon>
            <span className="font-semibold">Whitepaper</span>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground" />
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="px-2 text-lg font-bold text-center text-[#3767d3]">Partners</h2>
        <div className="mt-2 flex flex-col items-center gap-4">
          <motion.div className="grid grid-cols-3 gap-4 w-full" variants={containerVariants}>
            {partners.slice(0, 3).map((partner) => (
              <motion.div
                key={partner.name}
                className="flex h-20 items-center justify-center rounded-2xl bg-white p-2 shadow-lg shadow-slate-200/60"
                variants={itemVariants}
              >
                {/* Image removed, box remains */}
              </motion.div>
            ))}
          </motion.div>
          {partners.length > 3 && (
            <motion.div className="flex justify-center w-full" variants={containerVariants}>
              <div className="flex gap-4 w-2/3 justify-center">
                {partners.slice(3).map((partner) => (
                  <motion.div
                    key={partner.name}
                    className="flex h-20 w-1/2 items-center justify-center rounded-2xl bg-white p-2 shadow-lg shadow-slate-200/60"
                    variants={itemVariants}
                  >
                    {/* Image removed, box remains */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="px-2 text-lg font-bold text-slate-700">FAQ</h2>
        <Card className="mt-2">
          <CardContent className="p-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-4">What is the return of investment (ROI)?</AccordionTrigger>
                <AccordionContent className="px-4">
                  The expected daily production income is based on tiers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-4">How to earn reward?</AccordionTrigger>
                <AccordionContent className="px-4">
                  The cryptocurrency mined every day generates ETH revenue.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-0">
                <AccordionTrigger className="px-4">Is there a reward for inviting friends?</AccordionTrigger>
                <AccordionContent className="px-4">
                  Yes, you will get a 10% ETH reward every time your friends get their reward.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
