import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ExternalLink, Twitter, MessageCircle, Mail, Github } from "lucide-react"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold gradient-text">COSMIZE</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-zinc-300 hover:text-orange-400 transition-colors">About Us</a>
            <a href="#contact" className="text-zinc-300 hover:text-orange-400 transition-colors">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-6">
         <Link href="/">Home</Link>
          <span>&gt;</span>
          <a href="/cryptocurrency" className="hover:text-orange-400">Cryptocurrency</a>
          <span>&gt;</span>
          <span className="text-orange-400">Best Crypto Presales</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Best 12 Crypto Presales to Invest in October 2025 – Top Token Presales Revealed
          </h1>

          <div className="flex items-center space-x-4 text-sm text-zinc-400 mb-8">
            <span>By <span className="text-orange-400">Ethan Blackburn</span></span>
            <span>Last Updated: June 3, 2025</span>
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            Welcome to cosmize.io's meticulously curated guide to the most promising crypto presales on the horizon. If
            you're seeking to discover the next wave of innovative crypto projects before they hit the mainstream, you're in
            the right place. While the presale arena is undeniably high-risk, strategically investing in well-vetted projects can
            unlock significant upside potential. Our goal with this crypto presale list is to equip you with the insights needed
            to navigate this exciting, yet complex, market.
          </p>

          <p className="text-zinc-300 leading-relaxed mb-8">
            This guide is your definitive resource for understanding the best crypto presales to consider investing in for
            October 2025. We've seen projects like <em>Solaxy ($SOLX)</em>, <em>MIND of Pepe ($MIND)</em>, and <em>Best Wallet Token ($BEST)</em> (these are illustrative examples) demonstrate the explosive growth possible when early investors
            identify genuine value. Our analysis dives deep into what makes a presale compelling.
          </p>
        </div>

        {/* Essential Takeaways Section */}
        <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-bold gradient-text mb-6">Crypto Presales: Essential Takeaways for October 2025</h3>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              Crypto presales inherently involve high risk but offer the potential for substantial profits if carefully selected.
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              A presale grants early investors access to a new coin or token, often at a preferential price point before public listing.
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              The core mechanism of a crypto presale involves offering tokens to early backers to fund project development and build an initial community.
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              Key stages in a presale lifecycle include the release of a detailed whitepaper and roadmap, the official presale announcement, structured sale phases, and eventual token distribution.
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              Investing in crypto presales can be a strategic move if you aim to acquire new tokens at an advantageous price, but comprehensive due diligence is non-negotiable.
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              <strong>Pros</strong> of presale investing include the potential for significant gains (10x-1000x), early access to innovation, and becoming part of a nascent community.
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              <strong>Cons</strong> are significant, encompassing risks of fraud (rug pulls), market volatility, liquidity challenges post-launch, and project failure.
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              Choosing the best token presales hinges on a thorough assessment of the project's use case, long-term goals, tokenomics (supply, distribution, utility), team credibility, and community strength.
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              This cosmize.io guide explores the top presale opportunities for 2025, aiming to highlight projects with strong fundamentals that could potentially deliver significant returns. Read on to uncover what could be the next 1,000x crypto presale to enhance your portfolio.
            </li>
          </ul>
        </div>

        {/* Top Presales Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-8">Cosmize.io's Top-Rated Crypto Presale Picks for October 2025</h2>
          <p className="text-zinc-300 mb-8">
            Our analytical team at cosmize.io has rigorously evaluated numerous upcoming token sales. The following projects
            represent our top picks based on their innovative concepts, strong fundamentals, and potential for growth in the current
            market environment. These are presented to aid your research, not as direct investment advice.
          </p>

          {/* Presale Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Solaxy Card */}
            <Card className="crypto-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://imagedelivery.net/H6_s_Eb_ylTWnSEV3HlmYQ/8679cbcf-7057-4e55-974e-be35cbe31900/public"
                      alt="Solaxy Logo"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30"
                    />
                    <div>
                      <CardTitle className="text-xl">1. Solaxy ($SOLX)</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        First-Ever Solana Layer 2 Presale with High Staking APY
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Layer 2</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Solana Ecosystem</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• Pioneering Layer 2 solution for Solana, enhancing scalability.</li>
                  <li>• Attractive dynamic staking rewards (e.g., up to 96% APY).</li>
                  <li>• Multi-chain token ($SOLX) on Solana and Ethereum.</li>
                  <li>• Rapid fundraising (e.g., Over $500k raised in 24 hours).</li>
                </ul>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Launch:</span>
                    <span className="text-white">December 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Current Stage:</span>
                    <span className="text-orange-400">Phase 2 of 4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Buy with:</span>
                    <span className="text-white">+1 more</span>
                  </div>
                </div>
                <Button className="presale-button w-full">
                  ACCESS SOLAXY PRESALE
                </Button>
              </CardContent>
            </Card>

            {/* Snorter Bot Card */}
            <Card className="crypto-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/059/978/819/non_2x/captivating-retro-bitcoin-cryptocurrency-logo-no-background-with-transparent-background-sharp-free-png.png"
                      alt="Snorter Bot Logo"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30 bg-zinc-800 p-1"
                    />
                    <div>
                      <CardTitle className="text-xl">2. Snorter Bot ($SNORT)</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        Telegram-Native Trading Suite for Instant Sniping & Copy Trading
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Trading Bots</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Telegram Utility</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• Full trading stack integrated within Telegram.</li>
                  <li>• Instant sniping capabilities for new token launches.</li>
                  <li>• Advanced copy trading tools and portfolio management.</li>
                  <li>• Low trading fees with built-in honeypot/rugpull detection.</li>
                </ul>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Launch:</span>
                    <span className="text-white">May 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Current Stage:</span>
                    <span className="text-orange-400">Early Bird Round</span>
                  </div>
                </div>
                <Button className="presale-button w-full">
                  ACCESS SNORTER BOT PRESALE
                </Button>
              </CardContent>
            </Card>

            {/* BTC Bull Token Card */}
            <Card className="crypto-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://images.vexels.com/media/users/3/305676/isolated/preview/4373cfa548c1f11bdda1cb39d127cfc3-bitcoin-drawing.png"
                      alt="BTC Bull Logo"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30 bg-zinc-800 p-1"
                    />
                    <div>
                      <CardTitle className="text-xl">3. BTC Bull Token ($BTCBULL)</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        Meme Coin Rewarding Holders with Real BTC & Linked to BTC Milestones
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Meme</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">BTC Rewards</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• Rewards token holders with actual Bitcoin (BTC).</li>
                  <li>• Features BTC-linked token burns to manage supply.</li>
                  <li>• Additional rewards distributed at key BTC price milestones.</li>
                  <li>• Accessible ERC-20 token on Ethereum.</li>
                </ul>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Launch:</span>
                    <span className="text-white">February 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Current Stage:</span>
                    <span className="text-orange-400">Ongoing - Nearing Soft Cap</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Buy with:</span>
                    <span className="text-white">+1 more</span>
                  </div>
                </div>
                <Button className="presale-button w-full">
                  VISIT BTC BULL PRESALE
                </Button>
              </CardContent>
            </Card>

            {/* MIND of Pepe Card */}
            <Card className="crypto-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://insidebitcoins.com/wp-content/uploads/2025/01/MIND_coin.jpg"
                      alt="MIND of Pepe Logo"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30"
                    />
                    <div>
                      <CardTitle className="text-xl">4. MIND of Pepe ($MIND)</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        Advanced, Sovereign AI Agent Coin Offering Exclusive Insights
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">AI Agent</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Meme Utility</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• Advanced AI agent capable of autonomous actions (e.g., Twitter).</li>
                  <li>• Gathers and processes information for trading insights.</li>
                  <li>• $MIND holders gain exclusive access to privileged data.</li>
                  <li>• Unique blend of meme culture with AI functionality.</li>
                </ul>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Launch:</span>
                    <span className="text-white">January 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Current Stage:</span>
                    <span className="text-orange-400">Phase 1 Live</span>
                  </div>
                </div>
                <Button className="presale-button w-full">
                  ACCESS MIND PRESALE
                </Button>
              </CardContent>
            </Card>

            {/* Best Wallet Token Card */}
            <Card className="crypto-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/11450/11450253.png"
                      alt="Best Wallet Logo"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30 bg-zinc-800 p-2"
                    />
                    <div>
                      <CardTitle className="text-xl">5. Best Wallet Token ($BEST)</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        Native Token Maximizing Yield & Offering Exclusive Ecosystem Benefits
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Wallet</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Ecosystem Token</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• Holding $BEST maximizes staking yield on the Best Wallet platform.</li>
                  <li>• Provides early bird access to exciting new presale projects.</li>
                  <li>• Reduces transaction fees within the Best Wallet ecosystem.</li>
                  <li>• Governance rights and community perks for holders.</li>
                </ul>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Launch:</span>
                    <span className="text-white">November 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Current Stage:</span>
                    <span className="text-orange-400">Whitelist Open for Public Round</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Buy with:</span>
                    <span className="text-white">+1 more</span>
                  </div>
                </div>
                <Button className="presale-button w-full">
                  GET $BEST TOKENS
                </Button>
              </CardContent>
            </Card>

            {/* SpacePay Card */}
            <Card className="crypto-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://img.freepik.com/free-vector/futuristic-bitcoin-cryptocurrency-coin-design_1308-179315.jpg?semt=ais_hybrid&w=740"
                      alt="SpacePay Logo"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30"
                    />
                    <div>
                      <CardTitle className="text-xl">6. SpacePay ($SPY)</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        Revolutionary Crypto Payment Software for Traditional Card Machines
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Payment Solution</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">FinTech</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• Seamlessly integrates crypto payments with existing card terminals.</li>
                  <li>• Supports 300+ wallets for daily crypto purchases.</li>
                  <li>• Native $SPY token offers revenue share, airdrops, and voting.</li>
                  <li>• Reportedly backed by prominent financial partners.</li>
                </ul>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Launch:</span>
                    <span className="text-white">Q1 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Current Stage:</span>
                    <span className="text-orange-400">Final Presale Stage</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Buy with:</span>
                    <span className="text-white">+5 more</span>
                  </div>
                </div>
                <Button className="presale-button w-full">
                  INVEST IN SPACEPAY
                </Button>
              </CardContent>
            </Card>

            {/* SUBBD Card */}
            <Card className="crypto-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://imagedelivery.net/H6_s_Eb_ylTWnSEV3HlmYQ/f81d51ab-b8cf-4169-ce28-1ce6d5938700/public"
                      alt="SUBBD Logo"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30"
                    />
                    <div>
                      <CardTitle className="text-xl">7. SUBBD ($SUBBD)</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        AI-Focused Content Creation & Premium Subscription Platform
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">AI Content</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Creator Economy</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• Leverages AI for enhanced content creation tools.</li>
                  <li>• Decentralized platform for premium creator subscriptions.</li>
                  <li>• Staking benefits and rewards for creators & users.</li>
                  <li>• Aims to tap into massive influencer market.</li>
                </ul>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Launch:</span>
                    <span className="text-white">April 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Current Stage:</span>
                    <span className="text-orange-400">Seed Round Concluded, Presale Soon</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Buy with:</span>
                    <span className="text-white">+2 more</span>
                  </div>
                </div>
                <Button className="presale-button w-full">
                  EXPLORE SUBBD PRESALE
                </Button>
              </CardContent>
            </Card>

            {/* Bitcoin Hyper Card */}
            <Card className="crypto-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://insidebitcoins.com/wp-content/uploads/2025/06/gg-34_optimized.jpg"
                      alt="Bitcoin Hyper Logo"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30"
                    />
                    <div>
                      <CardTitle className="text-xl">8. Bitcoin Hyper ($HYPER)</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        New Bitcoin L2 Offering Massive Staking Rewards & SVM Integration
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Bitcoin Layer 2</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Scalability</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• Novel Bitcoin Layer 2 focused on high staking rewards.</li>
                  <li>• Utilizes SVM (Solana Virtual Machine) to enhance Bitcoin's potential.</li>
                  <li>• $HYPER tokens for transactions, staking, and governance.</li>
                  <li>• Aims to revolutionize Bitcoin's speed and utility.</li>
                </ul>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Launch:</span>
                    <span className="text-white">May 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Current Stage:</span>
                    <span className="text-orange-400">Phase 3 Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Buy with:</span>
                    <span className="text-white">+1 more</span>
                  </div>
                </div>
                <Button className="presale-button w-full">
                  GET $HYPER TOKENS TODAY
                </Button>
              </CardContent>
            </Card>

            {/* CogniAI Card */}
            <Card className="crypto-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://s3.amazonaws.com/assets.coingecko.com/app/public/ckeditor_assets/pictures/5796/content_LOGO_PLACEHOLDER_2.png"
                      alt="CogniAI Logo"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30"
                    />
                    <div>
                      <CardTitle className="text-xl">9. CogniAI ($COGNI)</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        Build Your Own AI Agents & Launch Tokens Effortlessly
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">AI Platform</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Tokenization</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• AI Agent Generator for custom automation & interactive tasks.</li>
                  <li>• Integrates NLP and computer vision for advanced AI capabilities.</li>
                  <li>• Offers staking, swap, and fully audited smart contracts.</li>
                  <li>• KYC-verified team and confirmed Tier-1 CEX listing.</li>
                </ul>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Launch:</span>
                    <span className="text-white">Q3 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Current Stage:</span>
                    <span className="text-orange-400">Whitelist Registration Open</span>
                  </div>
                </div>
                <Button className="presale-button w-full">
                  EXPLORE COGNIAI
                </Button>
              </CardContent>
            </Card>

            {/* UnitedNationsOfMemes Card */}
            <Card className="crypto-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://static.news.bitcoin.com/wp-content/uploads/2025/06/unnamed-2-1280x720.png"
                      alt="UNOM Logo"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30"
                    />
                    <div>
                      <CardTitle className="text-xl">10. UnitedNationsOfMemes ($UNOM)</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        AI-Governed Meme State Redefining Crypto Culture & DeFi
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">MemeFi</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">AI Governance</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• First-of-its-kind AI-governed meme ecosystem.</li>
                  <li>• "Trading Parliament" with AI-enhanced leverage & analytics.</li>
                  <li>• Universal Bridge for seamless cross-chain trading (ETH, SOL, etc.).</li>
                  <li>• "Prosperity Program" auto-adjusting staking (up to 85% APY).</li>
                </ul>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Launch:</span>
                    <span className="text-white">Q4 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Current Stage:</span>
                    <span className="text-orange-400">Recently Launched - High Demand</span>
                  </div>
                </div>
                <Button className="presale-button w-full">
                  JOIN UNOM PRESALE NOW
                </Button>
              </CardContent>
            </Card>

            {/* Influencer Pepe Card */}
            <Card className="crypto-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://unchainedcrypto.com/wp-content/uploads/2024/11/DALL%C2%B7E-2024-11-27-15.47.55-A-futuristic-digital-scene-featuring-an-advanced-AI-agent-with-glowing-holographic-features-deploying-memecoins-onto-an-Ethereum-Layer-2-network.-The.webp"
                      alt="Influencer Pepe Logo"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30"
                    />
                    <div>
                      <CardTitle className="text-xl">11. Influencer Pepe ($INPEPE)</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        Meme-Based Web3 Solution for the Influencer Economy
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Influencer Marketing</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Meme Utility</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• Blockchain platform for the $25B+ influencer marketing industry.</li>
                  <li>• $INPEPE token for direct influencer earnings & brand payouts via smart contracts.</li>
                  <li>• High APY staking during presale (e.g., up to 5240% APY).</li>
                  <li>• Significant token allocation for staking rewards & presale.</li>
                </ul>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Launch:</span>
                    <span className="text-white">Q4 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Current Stage:</span>
                    <span className="text-orange-400">Over $129k Raised - Phase 1</span>
                  </div>
                </div>
                <Button className="presale-button w-full">
                  GET $INPEPE TOKENS
                </Button>
              </CardContent>
            </Card>

            {/* ZenithChain Card */}
            <Card className="crypto-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://www.cryptoninjas.net/wp-content/uploads/ai-agent-cookie-surges-30-mind-of-pepe-presale-ending-soon-digital-asset-to-keep-an-eye-on-before-june.jpg"
                      alt="ZenithChain Logo"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30"
                    />
                    <div>
                      <CardTitle className="text-xl">12. ZenithChain ($ZNTH)</CardTitle>
                      <CardDescription className="text-orange-400 font-medium">
                        Next-Generation L1 Blockchain Focused on Interoperability & DePIN
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Layer 1</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">Interoperability</Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">DePIN</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-300 mb-6">
                  <li>• New Layer 1 designed for seamless cross-chain communication.</li>
                  <li>• Optimized for Decentralized Physical Infrastructure Networks (DePIN).</li>
                  <li>• High transaction speeds with low finality times.</li>
                  <li>• Eco-friendly consensus mechanism.</li>
                </ul>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Est. Launch:</span>
                    <span className="text-white">Q1 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Current Stage:</span>
                    <span className="text-orange-400">Private Sale Concluded, Public Whitelist Open</span>
                  </div>
                </div>
                <Button className="presale-button w-full">
                  LEARN ABOUT ZENITHCHAIN
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-zinc-800 pt-12">
          <h2 className="text-3xl font-bold gradient-text mb-8">About Cosmize</h2>
          <div className="bg-zinc-900/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Your Trusted Source for Cryptocurrency Presale Intelligence</h3>
            <p className="text-zinc-300 mb-6">
              At Cosmize, we specialize in uncovering and analyzing the most promising cryptocurrency presales and token
              launches before they hit the mainstream market. Our mission is to provide crypto investors with comprehensive, data-driven insights that help them identify high-potential opportunities in the rapidly evolving digital asset landscape.
            </p>

            <h4 className="text-lg font-semibold text-orange-400 mb-4">What We Do</h4>
            <ul className="space-y-2 text-zinc-300 mb-6">
              <li>• <strong>Presale Analysis:</strong> In-depth reviews of upcoming token sales and ICOs</li>
              <li>• <strong>Project Evaluation:</strong> Technical assessments of blockchain innovations and use cases</li>
              <li>• <strong>Market Intelligence:</strong> Tracking trends in DeFi, AI tokens, meme coins, and Layer 2 solutions</li>
              <li>• <strong>Risk Assessment:</strong> Identifying potential red flags and evaluating tokenomics</li>
            </ul>

            <h4 className="text-lg font-semibold text-orange-400 mb-4">Our Approach</h4>
            <p className="text-zinc-300 mb-4">
              Our team combines technical expertise with market analysis to deliver actionable intelligence. We don't just report on
              projects—we dive deep into whitepapers, tokenomics, team backgrounds, and market positioning to give you the
              complete picture.
            </p>

            <p className="text-sm text-zinc-400 italic">
              Disclaimer: All content is for informational purposes only. Cryptocurrency investments carry significant risk, and past performance
              does not guarantee future results. Always conduct your own research and consider your risk tolerance before investing.
            </p>

            <p className="text-orange-400 italic mt-4">
              Stay ahead of the curve with Cosmize's presale intelligence.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold gradient-text">COSMIZE</span>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Your trusted source for cryptocurrency presale intelligence and market insights.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com" className="text-zinc-400 hover:text-orange-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://telegram.org" className="text-zinc-400 hover:text-orange-400 transition-colors">
                  <MessageCircle size={20} />
                </a>
                <a href="https://github.com" className="text-zinc-400 hover:text-orange-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="mailto:contact@cosmize.io" className="text-zinc-400 hover:text-orange-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <h4 className="text-white font-semibold mb-4">Get Crypto Presale Updates</h4>
              <p className="text-zinc-400 text-sm mb-4">
                Subscribe to receive the latest presale opportunities and market insights directly to your inbox.
              </p>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-orange-500"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-orange-500"
                  />
                </div>
                <Textarea
                  placeholder="Message (optional)"
                  rows={3}
                  className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-orange-500"
                />
                <Button className="presale-button">
                  Subscribe to Updates
                </Button>
              </form>
            </div>
          </div>

          <Separator className="my-8 bg-zinc-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm">
              © 2025 Cosmize. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-zinc-500 hover:text-orange-400 transition-colors text-xs">Privacy Policy</a>
              <a href="/terms" className="text-zinc-500 hover:text-orange-400 transition-colors text-xs">Terms</a>
              <a href="/disclaimer" className="text-zinc-500 hover:text-orange-400 transition-colors text-xs">Disclaimer</a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-zinc-500 text-xs">
              Cryptocurrency investments are high-risk. Always do your own research.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
