// Trading videos (Zerodha Varsity, Pranjal Kamra)
// Checked videos. Topic-level: VIDEOS["section::Topic"]; module-level fallback: MODV["section::Module"].
// en/hi: {t:title, u:url, ch:channel}
const VZ="https://zerodha.com/varsity/chapter/";
const vz=(slug,t)=>({t,u:VZ+slug+"/",ch:"Zerodha Varsity (video + notes)"});
const HI_CH={t:"Varsity Hindi channel – search this topic",u:"https://www.youtube.com/@ZerodhaVarsityHindi",ch:"Zerodha Varsity Hindi (official)",chan:true};
const PK_LIST={t:"Stock Market classes (27 lessons)",u:"https://www.youtube.com/playlist?list=PLFQ0hRWyH11RS4KUPadj6aoC2KtEHVIfN",ch:"Pranjal Kamra"};
const PK_L1={t:"Lesson 1: Stock Market Basics for Beginners",u:"https://www.youtube.com/watch?v=RieqxXMds64",ch:"Pranjal Kamra",len:"16:42"};
const ZV_HI_OPT={t:"Buy Call or Sell Put? Options for Beginners in Hindi",u:"https://www.youtube.com/watch?v=0EutlIjlhCM",ch:"Zerodha Varsity"};
const FA_MOD={t:"Fundamental Analysis video series",u:"https://zerodha.com/varsity/module/fundamental-analysis-2/",ch:"Zerodha Varsity (video + notes)"};


const vh=(id,t,len)=>({t,u:"https://www.youtube.com/watch?v="+id,ch:"Zerodha Varsity Hindi (official)",len});
const H={
 invest:vh("Sfsdf-iKiwQ","Why Should You Invest? (Ep. 1)","11:53"),
 market:vh("SFgQNe7KZIA","Stock Market Explained for Beginners (Ep. 2)","10:36"),
 ipo:vh("5DqfxvTV5jE","IPO Basics Explained (Ep. 3)","7:07"),
 index:vh("poWU06JPmKw","Stock Market Index: Sensex & Nifty (Ep. 4)","9:44"),
 buysell:vh("-KT3sXaMFaU","How to Buy & Sell Stocks (Ep. 5)","17:00"),
 updown:vh("WPKNJQuOlUw","Why Stock Prices Go Up & Down (Ep. 6)","7:59"),
 infl:vh("0uXRcN3dy-c","What is Inflation? (Varsity Junior, very simple)","11:38"),
 comp:vh("R_dfKuoWZao","What is Compounding? (Varsity Junior, very simple)","13:34"),
 taIntro:vh("OMrbenp1N8c","Introduction to Technical Analysis (TA Ep. 1)","6:48"),
 charts:vh("wxksLTaS3YU","How to Read Stock Charts & Candlesticks (TA Ep. 2)","11:12"),
 tf:vh("mGjzu79_5jA","Time Frames Explained (TA Ep. 3)","7:54"),
 single:vh("NK3iIKLJH10","Single Candlestick Patterns (TA Ep. 4)","11:26"),
 multi:vh("1UAc9ay6M9g","Multiple Candlestick Patterns (TA Ep. 5)","9:48"),
 sr:vh("rdNHVVbN-Yk","How to Find Support & Resistance (TA Ep. 6)","7:36"),
 ind:vh("SJQ-lKxUEDI","Learn Technical Indicators (TA Ep. 7)","10:00"),
 ma:vh("NMawjLkuhww","How to Trade with Moving Averages (TA Ep. 8)","4:23"),
 princ:vh("E38v2oONOpg","6 Trading Principles Every Trader Should Know (TA Ep. 9)","13:42"),
 faIntro:vh("OmB-Sr9Y5Zw","What is Fundamental Analysis? (FA Ep. 1)","3:25"),
 annual:vh("zkrTaX8S7js","How to Read an Annual Report (FA Ep. 3)","7:01"),
 pl:vh("Q3vOcFMEpKA","Profit & Loss Statement Explained (FA Ep. 4)","6:52"),
 bs:vh("k_nnV1p6vqg","Balance Sheet Explained (FA Ep. 5)","8:44"),
 cf:vh("jJHOaHJFR34","Cash Flow Statement Explained (FA Ep. 6)","8:06"),
 linked:vh("moLQLaja8E0","How P&L, Balance Sheet & Cash Flow Connect (FA Ep. 7)","3:57"),
 ratios:vh("6kGDgV9gwtI","Financial Ratio Analysis Explained (FA Ep. 8)","14:25"),
 value:vh("BKPFIRqlxWY","How to Value a Company? (FA Ep. 9)","3:23"),
 dupont:vh("WVjOs1YMxGI","What is DuPont Analysis? (ROE explained)","10:30"),
 results:vh("88AFxjkW-6Q","How to Analyse Quarterly Results","15:00"),
 sector:vh("c1Sueznx91w","How to Analyse Companies in a Sector (Part 1)","17:00"),
 rollover:vh("8-NwzXa3FD0","What is Rollover? Rolling over futures","5:20"),
 oi:vh("m1aYZR0v7J8","What is Open Interest? OI vs Volume","6:52"),
 short:vh("sjBW6wYJeZ0","What is Short Selling?","5:59")
};

const MODV={
 "trading::Money basics":{en:vz("why-should-you-invest","Why should you invest?"),hi:H.invest},
 "trading::Stock market basics":{en:vz("who-are-the-different-actors-in-market","Market intermediaries"),hi:H.market},
 "trading::Orders and costs":{en:vz("understanding-the-various-order-types","Order types"),hi:H.buysell},
 "trading::Chart basics":{en:vz("types-of-charts","Chart types"),hi:H.charts},
 "trading::Candlestick patterns":{en:vz("understanding-candlestick-patterns","Understanding candlestick patterns"),hi:H.single},
 "trading::Trend and levels":{en:vz("support-and-resistance","Support and resistance"),hi:H.sr},
 "trading::Indicators":{en:vz("technical-indicators","Technical indicators"),hi:H.ind},
 "trading::Financial statements":{en:FA_MOD,hi:H.linked},
 "trading::Ratios and value":{en:FA_MOD,hi:H.ratios},
 "trading::Economy and news":{en:FA_MOD,hi:H.sector},
 "trading::Futures":{en:vz("introducing-the-futures-contract","Introducing the futures contract"),hi:HI_CH},
 "trading::Options basics":{en:vz("introduction-to-options","Introduction to options"),hi:ZV_HI_OPT},
 "trading::Greeks and volatility":{en:vz("the-option-greeks-delta","The option Greeks – Delta"),hi:HI_CH},
 "trading::Option strategies":{en:vz("bull-call-spread-2","Bull call spread"),hi:HI_CH},
 "trading::Risk management":{en:vz("your-trading-checklist","Your trading checklist")},
 "trading::Psychology and journal":{hi:H.princ}
};

const VIDEOS={
 "trading::Results season":{hi:H.results},
 "trading::Intrinsic value basics":{hi:H.value},
 "trading::Margins and growth":{hi:H.ratios},
 "trading::Debt to equity":{hi:H.ratios},
 "trading::P/B, ROE, ROCE":{hi:H.dupont},
 "trading::EPS and P/E":{hi:H.ratios},
 "trading::Annual report":{hi:H.annual},
 "trading::Cash flow statement":{hi:H.cf},
 "trading::Balance sheet":{hi:H.bs},
 "trading::Profit and loss statement":{hi:H.pl},
 "trading::Compounding":{hi:H.comp},
 "trading::Inflation":{hi:H.infl},
 "trading::Why invest":{hi:H.invest},
 "trading::What a share is":{en:vz("why-do-stock-prices-fluctuate","Why do stock prices fluctuate?"),hi:PK_L1},
 "trading::IPO":{en:vz("why-and-how-do-companies-list-and-what-is-an-ipo","All about the IPO"),hi:H.ipo},
 "trading::NSE and BSE":{en:vz("who-are-the-different-actors-in-market","Market intermediaries")},
 "trading::SEBI":{en:vz("who-are-the-different-actors-in-market","Market intermediaries")},
 "trading::Indices: Nifty and Sensex":{en:vz("what-is-a-stock-market-index","Stock market index"),hi:H.index},
 "trading::Brokers, demat and trading account":{en:vz("who-are-the-different-actors-in-market","Market intermediaries"),hi:H.buysell},
 "trading::Market timings and holidays":{en:vz("how-does-a-trading-platform-work","How does a trading platform work?")},
 "trading::Market, limit and stop-loss orders":{en:vz("understanding-the-various-order-types","Order types"),hi:H.buysell},
 "trading::T+1 settlement":{en:vz("clearing-and-settlement-process-2","Clearing and settlement")},
 "trading::Line, bar and candlestick charts":{en:vz("types-of-charts","Chart types"),hi:H.charts},
 "trading::OHLC":{en:vz("types-of-charts","Chart types"),hi:H.charts},
 "trading::Timeframes":{en:vz("timeframes","Timeframes"),hi:H.tf},
 "trading::Marubozu, doji, spinning top":{en:vz("single-candlestick-patterns","Single candlestick patterns"),hi:H.single},
 "trading::Hammer and shooting star":{en:vz("single-candlestick-patterns","Single candlestick patterns"),hi:H.single},
 "trading::Engulfing patterns":{en:vz("multiple-candlestick-patterns","Multiple candlestick patterns"),hi:H.multi},
 "trading::Morning star and evening star":{en:vz("multiple-candlestick-patterns","Multiple candlestick patterns"),hi:H.multi},
 "trading::Why patterns fail":{en:vz("setting-realistic-expectations","Setting expectations"),hi:H.princ},
 "trading::Trend":{en:vz("key-assumption-of-technical-analysis","Key assumption of technical analysis"),hi:H.taIntro},
 "trading::Support and resistance":{en:vz("support-and-resistance","Support and resistance"),hi:H.sr},
 "trading::Breakouts and fake breakouts":{en:vz("support-and-resistance","Support and resistance"),hi:H.sr},
 "trading::Moving averages":{en:vz("moving-averages-2","Moving averages"),hi:H.ma},
 "trading::RSI":{en:vz("technical-indicators","Technical indicators"),hi:H.ind},
 "trading::MACD":{en:vz("technical-indicators","Technical indicators"),hi:H.ind},
 "trading::Bollinger Bands":{en:vz("technical-indicators","Technical indicators"),hi:H.ind},
 "trading::What a futures contract is":{en:vz("introducing-the-futures-contract","Introducing the futures contract")},
 "trading::Lot size and margin":{en:vz("margins","Margins")},
 "trading::Mark-to-market":{en:vz("settlement","Settlement")},
 "trading::Expiry and rollover":{en:vz("settlement","Settlement"),hi:H.rollover},
 "trading::Hedging":{en:vz("shorting-futures","Shorting futures"),hi:H.short},
 "trading::Call and put":{en:vz("introduction-to-options","Introduction to options"),hi:ZV_HI_OPT},
 "trading::Strike price and premium":{en:vz("option-jargons","Option jargons")},
 "trading::ITM, ATM, OTM":{en:vz("moneyness-of-option","Moneyness of an option")},
 "trading::Intrinsic and time value":{en:vz("moneyness-of-option","Moneyness of an option")},
 "trading::Buyer vs seller payoff":{en:vz("summarizing-call-put-options-2","Summarizing call and put options"),hi:ZV_HI_OPT},
 "trading::Delta":{en:vz("the-option-greeks-delta","The option Greeks – Delta")},
 "trading::Theta":{en:vz("theta-2","Theta")},
 "trading::Vega and implied volatility":{en:vz("vega-2","Vega")},
 "trading::Gamma":{en:vz("gamma","Gamma")},
 "trading::Open interest and PCR":{en:vz("open-interest-2","Open interest"),hi:H.oi},
 "trading::Bull and bear spreads":{en:vz("bull-call-spread-2","Bull call spread")},
 "trading::Straddle and strangle":{en:vz("the-straddle","The straddle")},
 "trading::Why most option buyers lose":{en:vz("theta-2","Theta (time decay)")}
};
