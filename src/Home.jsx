import { useState } from 'react'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(1)
  const [cartTotal, setCartTotal] = useState(180)
  const [packQuantity, setPackQuantity] = useState(1)
  const [activeNav, setActiveNav] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState(20)

  const addItem = (price = 95) => {
    setCartCount((count) => count + 1)
    setCartTotal((total) => total + price)
  }

  const updatePackQuantity = (delta) => {
    setPackQuantity((quantity) => Math.max(1, quantity + delta))
    setCartCount((count) => Math.max(0, count + delta))
    setCartTotal((total) => Math.max(0, total + delta * 180))
  }

  const selectMenuItem = (destination) => {
    setActiveNav(destination)
    setMenuOpen(false)
    if (destination === 'ledger') document.getElementById('ledger')?.scrollIntoView({ behavior: 'smooth' })
    if (destination === 'cart') document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div data-layer="Eggscellent Eggs · Mobile" data-node-id="5-2345" className="EggscellentEggsMobile w-[390px] bg-[#faf9f5] inline-flex flex-col justify-start items-start">
  <div data-layer="Sticky header" data-node-id="5-2346" className="StickyHeader self-stretch px-4 pt-4 pb-3 bg-white shadow-[0px_4px_16px_0px_rgba(10,54,34,0.05)] flex flex-col justify-start items-start gap-3 overflow-hidden">
    <div data-layer="Brand and cart" data-node-id="5-2347" className="BrandAndCart self-stretch inline-flex justify-between items-center overflow-visible">
      <div data-layer="Brand" data-node-id="5-2348" className="Brand flex justify-start items-center gap-[9px] overflow-hidden">
        <div data-layer="Egg mark" data-node-id="5-2349" className="EggMark w-[30px] h-[34px] bg-[#f4b41a] rounded-2xl flex justify-center items-center overflow-hidden">
          <div data-layer="Yolk" data-node-id="5-2350" className="Yolk w-[13px] h-[13px] bg-[#0a3622] rounded-full" />
        </div>
        <div data-layer="Wordmark" data-node-id="5-2351" className="Wordmark inline-flex flex-col justify-start items-start gap-px overflow-hidden">
          <div data-layer="Brand name" data-node-id="5-2352" className="BrandName justify-start text-[#0a3622] text-base font-extrabold font-['Plus_Jakarta_Sans']">Eggscellent Eggs</div>
          <div data-layer="Brand signature" data-node-id="5-2353" className="BrandSignature justify-start text-[#6e786f] text-[8px] font-bold font-['Inter']">BY SAHASRA GROUP</div>
        </div>
      </div>
      <div className="HeaderActions">
        <div data-layer="Cart · One item" data-node-id="5-2354" className="CartOneItem h-9 px-2.5 bg-[#0a3622] rounded-2xl flex justify-start items-center overflow-hidden">
          <div data-layer="Cart total" data-node-id="5-2355" className="CartTotal justify-start text-white text-[11px] font-bold font-['Inter']">🛒 {cartCount} ITEM | ₹{cartTotal}</div>
        </div>
        <button type="button" className={`MenuToggle${menuOpen ? ' is-open' : ''}`} aria-label={menuOpen ? 'Close account, ledger and cart menu' : 'Open account, ledger and cart menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span />
          <span />
          <span />
        </button>
        {menuOpen && (
          <div className="QuickMenu" role="menu" aria-label="Account, ledger and cart">
            <button type="button" className={`QuickMenuItem${activeNav === 'profile' ? ' is-active' : ''}`} role="menuitem" aria-label="Account" title="Account" onClick={() => selectMenuItem('profile')}>
              <img src="/assets/5-2666.svg" alt="" />
            </button>
            <button type="button" className={`QuickMenuItem${activeNav === 'ledger' ? ' is-active' : ''}`} role="menuitem" aria-label="Ledger" title="Ledger" onClick={() => selectMenuItem('ledger')}>
              <img src="/assets/5-2660.svg" alt="" />
            </button>
            <button type="button" className={`QuickMenuItem${activeNav === 'cart' ? ' is-active' : ''}`} role="menuitem" aria-label="Cart" title="Cart" onClick={() => selectMenuItem('cart')}>
              <img src="/assets/5-2663.svg" alt="" />
              <span className="QuickMenuCount">{cartCount}</span>
            </button>
          </div>
        )}
      </div>
    </div>
    <div data-layer="Delivery location" data-node-id="5-2356" className="DeliveryLocation self-stretch inline-flex justify-between items-center overflow-hidden">
      <div data-layer="Delivery address" data-node-id="5-2357" className="DeliveryAddress px-3 py-2.5 bg-[#eef3e9] rounded-2xl flex justify-start items-start overflow-hidden">
        <div data-layer="Location" data-node-id="5-2358" className="Location justify-start text-[#0a3622] text-[13px] font-bold font-['Inter']">📍 Jubilee Hills ▾</div>
      </div>
      <div data-layer="Delivery timing" data-node-id="5-2359" className="DeliveryTiming justify-start text-[#6e786f] text-[11px] font-normal font-['Inter']">Tomorrow, 6 AM</div>
    </div>
    <label data-layer="Search" data-node-id="5-2360" className="Search self-stretch h-[46px] px-3.5 bg-[#faf9f5] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#dee3d9] inline-flex justify-start items-center gap-2.5 overflow-hidden">
      <span data-layer="search" data-node-id="5-2635" className="Search w-[18px] h-[18px] relative overflow-hidden">
        <img data-layer="Vector" data-node-id="5-2636" className="Vector w-[13.50px] h-[13.50px] left-[2.25px] top-[2.25px] absolute" src="/assets/5-2636.svg" alt="" />
      </span>
      <input className="SearchInput" data-node-id="5-2362" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search for fresh Natukodi eggs" aria-label="Search for fresh Natukodi eggs" />
    </label>
  </div>
  <div data-layer="Farm fresh hero" data-node-id="5-2363" className="FarmFreshHero self-stretch px-4 pt-7 pb-6 flex flex-col justify-start items-start gap-6 overflow-hidden">
    <div data-layer="Hero copy" data-node-id="5-2364" className="HeroCopy self-stretch flex flex-col justify-start items-start gap-3.5 overflow-hidden">
      <div data-layer="Producer" data-node-id="5-2365" className="Producer inline-flex justify-start items-center gap-2 overflow-hidden">
        <div data-layer="Accent" data-node-id="5-2366" className="Accent w-[22px] h-[3px] bg-[#f4b41a]" />
        <div data-layer="Subtitle" data-node-id="5-2367" className="Subtitle justify-start text-[#0a3622] text-xs font-bold font-['Inter']">Sahasra Group</div>
      </div>
      <div data-layer="Headline" data-node-id="5-2368" className="Headline self-stretch justify-start text-[#0a3622] text-[34px] font-extrabold font-['Plus_Jakarta_Sans']">100% Chemical-Free Natukodi Eggs, Delivered Fresh</div>
      <div data-layer="Supporting copy" data-node-id="5-2369" className="SupportingCopy self-stretch justify-start text-[#6e786f] text-[13px] font-normal font-['Inter']">Good mornings start with better eggs. Naturally raised, carefully packed, straight to your doorstep.</div>
      <div data-layer="Order actions" data-node-id="5-2370" className="OrderActions self-stretch inline-flex justify-start items-start gap-2.5 overflow-hidden">
        <a href="https://wa.me/919000000000" target="_blank" rel="noreferrer" data-layer="Action" data-node-id="5-2371" className="Action h-11 px-3.5 bg-[#25d366] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#25d366] flex justify-center items-center gap-2 overflow-hidden">
          <div data-layer="message-circle" data-node-id="5-2638" className="MessageCircle w-[18px] h-[18px] relative overflow-hidden">
            <img data-layer="Vector" data-node-id="5-2639" className="Vector w-[15px] h-[15px] left-[1.50px] top-[1.50px] absolute" src="/assets/5-2639.svg" />
          </div>
          <div data-layer="Label" data-node-id="5-2373" className="Label justify-start text-[#0a3622] text-[13px] font-bold font-['Inter']">Order via WhatsApp</div>
        </a>
        <button type="button" onClick={() => document.getElementById('ledger')?.scrollIntoView({ behavior: 'smooth' })} data-layer="Action" data-node-id="5-2374" className="Action h-11 px-3.5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#dee3d9] flex justify-center items-center gap-2 overflow-hidden">
          <div data-layer="Label" data-node-id="5-2375" className="Label justify-start text-[#0a3622] text-[13px] font-bold font-['Inter']">View Plans</div>
        </button>
      </div>
    </div>
    <div data-layer="Fresh from the farm" data-node-id="5-2376" className="FreshFromTheFarm self-stretch h-[260px] relative bg-[#eef3e9] rounded-2xl flex flex-col justify-start items-start overflow-hidden">
      <img data-layer="Branded twelve egg carton" data-node-id="5-2377" className="BrandedTwelveEggCarton self-stretch flex-1" src="/assets/5-2377.webp" />
      <div data-layer="Delivery promise" data-node-id="5-2378" className="DeliveryPromise px-3 py-[9px] left-[12px] top-[12px] absolute bg-[#f4b41a] rounded-2xl inline-flex justify-start items-start overflow-hidden">
        <div data-layer="Delivery timing" data-node-id="5-2379" className="DeliveryTiming justify-start text-[#0a3622] text-[11px] font-extrabold font-['Inter']">⚡ Delivery Tomorrow 6 AM</div>
      </div>
      <div data-layer="Farm seal" data-node-id="5-2380" className="FarmSeal px-3 py-2 left-[195px] top-[216px] absolute bg-[#0a3622] rounded-2xl inline-flex justify-start items-start overflow-hidden">
        <div data-layer="Farm origin" data-node-id="5-2381" className="FarmOrigin justify-start text-white text-[10px] font-bold font-['Inter']">NATUKODI · FARM FRESH</div>
      </div>
    </div>
  </div>
  <div data-layer="Our promise" data-node-id="5-2382" className="OurPromise self-stretch px-4 py-[18px] bg-[#eef3e9] inline-flex justify-start items-start gap-2.5 overflow-hidden">
    <div data-layer="Trust claim" data-node-id="5-2383" className="TrustClaim flex-1 border-[#dee3d9] flex justify-center items-center overflow-hidden">
      <div data-layer="Promise" data-node-id="5-2384" className="Promise justify-start text-[#0a3622] text-[10px] font-semibold font-['Inter']">🌿 Organic Feed</div>
    </div>
    <div data-layer="Trust claim" data-node-id="5-2385" className="TrustClaim flex-1 border-l border-[#dee3d9] flex justify-center items-center overflow-hidden">
      <div data-layer="Promise" data-node-id="5-2386" className="Promise justify-start text-[#0a3622] text-[10px] font-semibold font-['Inter']">💉 Zero Antibiotics</div>
    </div>
    <div data-layer="Trust claim" data-node-id="5-2387" className="TrustClaim flex-1 border-l border-[#dee3d9] flex justify-center items-center overflow-hidden">
      <div data-layer="Promise" data-node-id="5-2388" className="Promise justify-start text-[#0a3622] text-[10px] font-semibold font-['Inter']">📦 Safe Cartons</div>
    </div>
  </div>
  <div id="shop" data-layer="Shop fresh eggs" data-node-id="5-2389" className="ShopFreshEggs self-stretch px-4 py-7 flex flex-col justify-start items-start gap-5 overflow-hidden">
    <div data-layer="Shop heading" data-node-id="5-2390" className="ShopHeading self-stretch inline-flex justify-between items-end overflow-hidden">
      <div data-layer="Section title" data-node-id="5-2391" className="SectionTitle flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
        <div data-layer="Heading" data-node-id="5-2392" className="Heading self-stretch justify-start text-[#0a3622] text-[25px] font-extrabold font-['Plus_Jakarta_Sans']">Pick your pack</div>
        <div data-layer="Supporting copy" data-node-id="5-2393" className="SupportingCopy self-stretch justify-start text-[#6e786f] text-xs font-normal font-['Inter']">Same farm-fresh goodness. Your perfect size.</div>
      </div>
    </div>
    <div data-layer="Egg packs" data-node-id="5-2394" className="EggPacks self-stretch flex flex-col justify-start items-start gap-3 overflow-hidden">
      <div data-layer="Product card" data-node-id="5-2395" className="ProductCard self-stretch p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#dee3d9] inline-flex justify-start items-center gap-3 overflow-hidden">
        <div data-layer="Pack photograph" data-node-id="5-2396" className="PackPhotograph w-[110px] h-[136px] bg-[#faf9f5] rounded-2xl inline-flex flex-col justify-start items-start overflow-hidden">
          <img data-layer="Natukodi egg pack" data-node-id="5-2397" className="NatukodiEggPack self-stretch flex-1" src="/assets/5-2397.webp" />
        </div>
        <div data-layer="Pack details" data-node-id="5-2398" className="PackDetails flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div data-layer="Product title" data-node-id="5-2399" className="ProductTitle self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
            <div data-layer="Product name" data-node-id="5-2400" className="ProductName self-stretch justify-start text-[#0a3622] text-[15px] font-extrabold font-['Plus_Jakarta_Sans']">Natukodi Eggs · 6-Pack</div>
            <div data-layer="Pack description" data-node-id="5-2401" className="PackDescription self-stretch justify-start text-[#6e786f] text-[10px] font-normal font-['Inter']">6 eggs · ₹15.83 / egg</div>
          </div>
          <div data-layer="Price and quantity" data-node-id="5-2402" className="PriceAndQuantity self-stretch inline-flex justify-between items-center overflow-hidden">
            <div data-layer="Price" data-node-id="5-2403" className="Price inline-flex flex-col justify-start items-start gap-[3px] overflow-hidden">
              <div data-layer="Selling price" data-node-id="5-2404" className="SellingPrice justify-start text-[#0a3622] text-[23px] font-extrabold font-['Plus_Jakarta_Sans']">₹95</div>
            </div>
            <div role="button" tabIndex="0" aria-label="Add 6-pack to cart" onClick={() => addItem(95)} data-layer="Add to cart" data-node-id="5-2405" className="AddToCart w-[94px] h-[38px] px-[13px] bg-[#eef3e9] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#0a3622] flex justify-between items-center overflow-hidden">
              <div data-layer="Add" data-node-id="5-2406" className="Add justify-start text-[#0a3622] text-[13px] font-extrabold font-['Inter']">ADD +</div>
            </div>
          </div>
          <div data-layer="Subscription link" data-node-id="5-2407" className="SubscriptionLink justify-start text-[#0a3622] text-[11px] font-semibold font-['Inter']">📅 Subscribe & Save</div>
        </div>
      </div>
      <div data-layer="Product card" data-node-id="5-2408" className="ProductCard self-stretch p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#0a3622] inline-flex justify-start items-center gap-3 overflow-hidden">
        <div data-layer="Pack photograph" data-node-id="5-2409" className="PackPhotograph w-[110px] h-[136px] bg-[#faf9f5] rounded-2xl inline-flex flex-col justify-start items-start overflow-hidden">
          <img data-layer="Natukodi egg pack" data-node-id="5-2410" className="NatukodiEggPack self-stretch flex-1" src="/assets/5-2410.webp" />
        </div>
        <div data-layer="Pack details" data-node-id="5-2411" className="PackDetails flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div data-layer="Product title" data-node-id="5-2412" className="ProductTitle self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
            <div data-layer="Offer badge" data-node-id="5-2413" className="OfferBadge px-2 py-1 bg-[#f4b41a] rounded-2xl inline-flex justify-start items-start overflow-hidden">
              <div data-layer="Badge label" data-node-id="5-2414" className="BadgeLabel justify-start text-[#0a3622] text-[8px] font-extrabold font-['Inter']">MOST POPULAR</div>
            </div>
            <div data-layer="Product name" data-node-id="5-2415" className="ProductName self-stretch justify-start text-[#0a3622] text-[15px] font-extrabold font-['Plus_Jakarta_Sans']">Natukodi Eggs · 12-Pack</div>
            <div data-layer="Pack description" data-node-id="5-2416" className="PackDescription self-stretch justify-start text-[#6e786f] text-[10px] font-normal font-['Inter']">12 eggs · ₹15 / egg</div>
          </div>
          <div data-layer="Price and quantity" data-node-id="5-2417" className="PriceAndQuantity self-stretch inline-flex justify-between items-center overflow-hidden">
            <div data-layer="Price" data-node-id="5-2418" className="Price inline-flex flex-col justify-start items-start gap-[3px] overflow-hidden">
              <div data-layer="Selling price" data-node-id="5-2419" className="SellingPrice justify-start text-[#0a3622] text-[23px] font-extrabold font-['Plus_Jakarta_Sans']">₹180</div>
            </div>
            <div data-layer="Quantity stepper · One pack" data-node-id="5-2420" className="QuantityStepperOnePack w-[94px] h-[38px] px-[13px] bg-[#0a3622] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#0a3622] flex justify-between items-center overflow-hidden">
              <div role="button" tabIndex="0" aria-label="Decrease 12-pack quantity" onClick={() => updatePackQuantity(-1)} data-layer="Decrease" data-node-id="5-2421" className="Decrease justify-start text-white text-lg font-normal font-['Inter']">−</div>
              <div data-layer="Quantity" data-node-id="5-2422" className="Quantity justify-start text-white text-sm font-bold font-['Inter']">{packQuantity}</div>
              <div role="button" tabIndex="0" aria-label="Increase 12-pack quantity" onClick={() => updatePackQuantity(1)} data-layer="Increase" data-node-id="5-2423" className="Increase justify-start text-white text-lg font-normal font-['Inter']">+</div>
            </div>
          </div>
          <div data-layer="Subscription link" data-node-id="5-2424" className="SubscriptionLink justify-start text-[#0a3622] text-[11px] font-semibold font-['Inter']">📅 Subscribe & Save</div>
        </div>
      </div>
      <div data-layer="Product card" data-node-id="5-2425" className="ProductCard self-stretch p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#dee3d9] inline-flex justify-start items-center gap-3 overflow-hidden">
        <div data-layer="Pack photograph" data-node-id="5-2426" className="PackPhotograph w-[110px] h-[136px] bg-[#faf9f5] rounded-2xl inline-flex flex-col justify-start items-start overflow-hidden">
          <img data-layer="Natukodi egg pack" data-node-id="5-2427" className="NatukodiEggPack self-stretch flex-1" src="/assets/5-2427.webp" />
        </div>
        <div data-layer="Pack details" data-node-id="5-2428" className="PackDetails flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div data-layer="Product title" data-node-id="5-2429" className="ProductTitle self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
            <div data-layer="Offer badge" data-node-id="5-2430" className="OfferBadge px-2 py-1 bg-[#0a3622] rounded-2xl inline-flex justify-start items-start overflow-hidden">
              <div data-layer="Badge label" data-node-id="5-2431" className="BadgeLabel justify-start text-white text-[8px] font-extrabold font-['Inter']">BEST VALUE</div>
            </div>
            <div data-layer="Product name" data-node-id="5-2432" className="ProductName self-stretch justify-start text-[#0a3622] text-[15px] font-extrabold font-['Plus_Jakarta_Sans']">Natukodi Eggs · 30-Pack</div>
            <div data-layer="Pack description" data-node-id="5-2433" className="PackDescription self-stretch justify-start text-[#6e786f] text-[10px] font-normal font-['Inter']">30 eggs · ₹14 / egg</div>
          </div>
          <div data-layer="Price and quantity" data-node-id="5-2434" className="PriceAndQuantity self-stretch inline-flex justify-between items-center overflow-hidden">
            <div data-layer="Price" data-node-id="5-2435" className="Price inline-flex flex-col justify-start items-start gap-[3px] overflow-hidden">
              <div data-layer="Selling price" data-node-id="5-2436" className="SellingPrice justify-start text-[#0a3622] text-[23px] font-extrabold font-['Plus_Jakarta_Sans']">₹420</div>
            </div>
            <div role="button" tabIndex="0" aria-label="Add 30-pack to cart" onClick={() => addItem(420)} data-layer="Add to cart" data-node-id="5-2437" className="AddToCart w-[94px] h-[38px] px-[13px] bg-[#eef3e9] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#0a3622] flex justify-between items-center overflow-hidden">
              <div data-layer="Add" data-node-id="5-2438" className="Add justify-start text-[#0a3622] text-[13px] font-extrabold font-['Inter']">ADD +</div>
            </div>
          </div>
          <div data-layer="Subscription link" data-node-id="5-2439" className="SubscriptionLink justify-start text-[#0a3622] text-[11px] font-semibold font-['Inter']">📅 Subscribe & Save</div>
        </div>
      </div>
    </div>
  </div>
  <div id="ledger" data-layer="Delivery ledger" data-node-id="5-2440" className="DeliveryLedger self-stretch px-4 pt-7 pb-8 bg-[#eef3e9] flex flex-col justify-start items-start gap-5 overflow-hidden">
    <div data-layer="Ledger introduction" data-node-id="5-2441" className="LedgerIntroduction self-stretch flex flex-col justify-start items-start gap-3 overflow-hidden">
      <div data-layer="Eyebrow" data-node-id="5-2442" className="Eyebrow justify-start text-[#0a3622] text-[10px] font-extrabold font-['Inter']">FRESHNESS, ON YOUR SCHEDULE</div>
      <div data-layer="Heading" data-node-id="5-2443" className="Heading self-stretch justify-start text-[#0a3622] text-[26px] font-extrabold font-['Plus_Jakarta_Sans']">Your eggs. Your days.</div>
      <div data-layer="Description" data-node-id="5-2444" className="Description self-stretch justify-start text-[#6e786f] text-xs font-normal font-['Inter']">A little planning. A lot of good mornings. Schedule deliveries or skip a day in your ledger.</div>
    </div>
    <div data-layer="Monthly delivery calendar" data-node-id="5-2445" className="MonthlyDeliveryCalendar self-stretch p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#dee3d9] flex flex-col justify-start items-start gap-4 overflow-hidden">
      <div data-layer="Month navigation" data-node-id="5-2446" className="MonthNavigation self-stretch inline-flex justify-between items-center overflow-hidden">
        <div data-layer="Month" data-node-id="5-2447" className="Month inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
          <div data-layer="Month label" data-node-id="5-2448" className="MonthLabel justify-start text-[#0a3622] text-lg font-extrabold font-['Plus_Jakarta_Sans']">October 2026</div>
          <div data-layer="Calendar description" data-node-id="5-2449" className="CalendarDescription justify-start text-[#6e786f] text-[11px] font-normal font-['Inter']">Your monthly delivery ledger</div>
        </div>
        <div data-layer="Month controls" data-node-id="5-2450" className="MonthControls flex justify-start items-start gap-1.5 overflow-hidden">
          <div data-layer="Change month" data-node-id="5-2451" className="ChangeMonth w-7 h-8 bg-[#faf9f5] rounded-2xl flex justify-center items-center overflow-hidden">
            <div data-layer="chevron-left" data-node-id="5-2641" className="ChevronLeft w-[15px] h-[15px] relative overflow-hidden">
              <img data-layer="Vector" data-node-id="5-2642" className="Vector w-[3.75px] h-[7.50px] left-[5.63px] top-[3.75px] absolute" src="/assets/5-2642.svg" />
            </div>
          </div>
          <div data-layer="Change month" data-node-id="5-2453" className="ChangeMonth w-7 h-8 bg-[#faf9f5] rounded-2xl flex justify-center items-center overflow-hidden">
            <div data-layer="chevron-right" data-node-id="5-2644" className="ChevronRight w-[15px] h-[15px] relative overflow-hidden">
              <img data-layer="Vector" data-node-id="5-2645" className="Vector w-[3.75px] h-[7.50px] left-[5.63px] top-[3.75px] absolute" src="/assets/5-2645.svg" />
            </div>
          </div>
        </div>
      </div>
      <div data-layer="Calendar grid" data-node-id="5-2455" className="CalendarGrid self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
        <div data-layer="Weekdays" data-node-id="5-2456" className="Weekdays self-stretch inline-flex justify-start items-start gap-1.5 overflow-hidden">
          <div data-layer="Weekday" data-node-id="5-2457" className="Weekday flex-1 text-center justify-start text-[#6e786f] text-[10px] font-semibold font-['Inter']">Mon</div>
          <div data-layer="Weekday" data-node-id="5-2458" className="Weekday flex-1 text-center justify-start text-[#6e786f] text-[10px] font-semibold font-['Inter']">Tue</div>
          <div data-layer="Weekday" data-node-id="5-2459" className="Weekday flex-1 text-center justify-start text-[#6e786f] text-[10px] font-semibold font-['Inter']">Wed</div>
          <div data-layer="Weekday" data-node-id="5-2460" className="Weekday flex-1 text-center justify-start text-[#6e786f] text-[10px] font-semibold font-['Inter']">Thu</div>
          <div data-layer="Weekday" data-node-id="5-2461" className="Weekday flex-1 text-center justify-start text-[#6e786f] text-[10px] font-semibold font-['Inter']">Fri</div>
          <div data-layer="Weekday" data-node-id="5-2462" className="Weekday flex-1 text-center justify-start text-[#6e786f] text-[10px] font-semibold font-['Inter']">Sat</div>
          <div data-layer="Weekday" data-node-id="5-2463" className="Weekday flex-1 text-center justify-start text-[#6e786f] text-[10px] font-semibold font-['Inter']">Sun</div>
        </div>
        <div data-layer="Calendar week" data-node-id="5-2464" className="CalendarWeek self-stretch inline-flex justify-start items-start gap-1.5 overflow-hidden">
          <div data-layer="Calendar day" data-node-id="5-2465" className="CalendarDay flex-1 h-[43px] p-1 bg-black/0 rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1" />
          <div data-layer="Calendar day" data-node-id="5-2466" className="CalendarDay flex-1 h-[43px] p-1 bg-black/0 rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1" />
          <div data-layer="Calendar day" data-node-id="5-2467" className="CalendarDay flex-1 h-[43px] p-1 bg-black/0 rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1" />
          <div data-layer="Calendar day" data-node-id="5-2468" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2469" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2470" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">1</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2471" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2472" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2473" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">2</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2474" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2475" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2476" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">3</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2477" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2478" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2479" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">4</div>
            </div>
          </div>
        </div>
        <div data-layer="Calendar week" data-node-id="5-2480" className="CalendarWeek self-stretch inline-flex justify-start items-start gap-1.5 overflow-hidden">
          <div data-layer="Calendar day" data-node-id="5-2481" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2482" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2483" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">5</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2484" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2485" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2486" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">6</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2487" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2488" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2489" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">7</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2490" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2491" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2492" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">8</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2493" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2494" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2495" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">9</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2496" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2497" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2498" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">10</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2499" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2500" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2501" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">11</div>
            </div>
          </div>
        </div>
        <div data-layer="Calendar week" data-node-id="5-2502" className="CalendarWeek self-stretch inline-flex justify-start items-start gap-1.5 overflow-hidden">
          <div data-layer="Calendar day" data-node-id="5-2503" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2504" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2505" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">12</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2506" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2507" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2508" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">13</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2509" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2510" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2511" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">14</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2512" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2513" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2514" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">15</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2515" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2516" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2517" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">16</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2518" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2519" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2520" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">17</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2521" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2522" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2523" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">18</div>
            </div>
          </div>
        </div>
        <div data-layer="Calendar week" data-node-id="5-2524" className="CalendarWeek self-stretch inline-flex justify-start items-start gap-1.5 overflow-hidden">
          <div data-layer="Calendar day" data-node-id="5-2525" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2526" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2527" className="Date justify-start text-[#a7ada7] text-xs font-medium font-['Inter']">19</div>
            </div>
          </div>
          <div role="button" tabIndex="0" aria-label="Select October 20, 2026" aria-pressed={selectedDay === 20} onClick={() => setSelectedDay(20)} data-layer="Calendar day" data-node-id="5-2528" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl outline outline-2 outline-offset-[-2px] outline-[#f4b41a] inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2529" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2530" className="Date justify-start text-[#0a3622] text-xs font-bold font-['Inter']">20</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2531" className="CalendarDay flex-1 h-[43px] p-1 bg-[#fff1e7] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2532" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2533" className="Date justify-start text-[#0a3622] text-xs font-bold font-['Inter']">21</div>
              <div data-layer="lock-keyhole" data-node-id="5-2647" className="LockKeyhole w-2.5 h-2.5 relative overflow-hidden">
                <img data-layer="Vector" data-node-id="5-2648" className="Vector w-[7.50px] h-[8.33px] left-[1.25px] top-[0.83px] absolute" src="/assets/5-2648.svg" />
              </div>
            </div>
          </div>
          <div role="button" tabIndex="0" aria-label="Select October 22, 2026" aria-pressed={selectedDay === 22} onClick={() => setSelectedDay(22)} data-layer="Calendar day" data-node-id="5-2535" className="CalendarDay flex-1 h-[43px] p-1 bg-[#0a3622] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2536" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2537" className="Date justify-start text-white text-xs font-bold font-['Inter']">22</div>
            </div>
            <div data-layer="Scheduled marker" data-node-id="5-2538" className="ScheduledMarker w-1 h-[3px] bg-[#f4b41a] rounded-2xl" />
          </div>
          <div data-layer="Calendar day" data-node-id="5-2539" className="CalendarDay flex-1 h-[43px] p-1 bg-[#eceeeb] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2540" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2541" className="Date justify-start text-[#6e786f] text-xs font-medium font-['Inter'] line-through">23</div>
            </div>
          </div>
          <div role="button" tabIndex="0" aria-label="Select October 24, 2026" aria-pressed={selectedDay === 24} onClick={() => setSelectedDay(24)} data-layer="Calendar day" data-node-id="5-2542" className="CalendarDay flex-1 h-[43px] p-1 bg-[#0a3622] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2543" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2544" className="Date justify-start text-white text-xs font-bold font-['Inter']">24</div>
            </div>
            <div data-layer="Scheduled marker" data-node-id="5-2545" className="ScheduledMarker w-1 h-[3px] bg-[#f4b41a] rounded-2xl" />
          </div>
          <div data-layer="Calendar day" data-node-id="5-2546" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2547" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2548" className="Date justify-start text-[#0a3622] text-xs font-medium font-['Inter']">25</div>
            </div>
          </div>
        </div>
        <div data-layer="Calendar week" data-node-id="5-2549" className="CalendarWeek self-stretch inline-flex justify-start items-start gap-1.5 overflow-hidden">
          <div data-layer="Calendar day" data-node-id="5-2550" className="CalendarDay flex-1 h-[43px] p-1 bg-[#0a3622] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2551" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2552" className="Date justify-start text-white text-xs font-bold font-['Inter']">26</div>
            </div>
            <div data-layer="Scheduled marker" data-node-id="5-2553" className="ScheduledMarker w-1 h-[3px] bg-[#f4b41a] rounded-2xl" />
          </div>
          <div data-layer="Calendar day" data-node-id="5-2554" className="CalendarDay flex-1 h-[43px] p-1 bg-[#eceeeb] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2555" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2556" className="Date justify-start text-[#6e786f] text-xs font-medium font-['Inter'] line-through">27</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2557" className="CalendarDay flex-1 h-[43px] p-1 bg-[#0a3622] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2558" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2559" className="Date justify-start text-white text-xs font-bold font-['Inter']">28</div>
            </div>
            <div data-layer="Scheduled marker" data-node-id="5-2560" className="ScheduledMarker w-1 h-[3px] bg-[#f4b41a] rounded-2xl" />
          </div>
          <div data-layer="Calendar day" data-node-id="5-2561" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2562" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2563" className="Date justify-start text-[#0a3622] text-xs font-medium font-['Inter']">29</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2564" className="CalendarDay flex-1 h-[43px] p-1 bg-[#0a3622] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2565" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2566" className="Date justify-start text-white text-xs font-bold font-['Inter']">30</div>
            </div>
            <div data-layer="Scheduled marker" data-node-id="5-2567" className="ScheduledMarker w-1 h-[3px] bg-[#f4b41a] rounded-2xl" />
          </div>
          <div data-layer="Calendar day" data-node-id="5-2568" className="CalendarDay flex-1 h-[43px] p-1 bg-[#faf9f5] rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
            <div data-layer="Day state" data-node-id="5-2569" className="DayState inline-flex justify-start items-center gap-[3px] overflow-hidden">
              <div data-layer="Date" data-node-id="5-2570" className="Date justify-start text-[#0a3622] text-xs font-medium font-['Inter']">31</div>
            </div>
          </div>
          <div data-layer="Calendar day" data-node-id="5-2571" className="CalendarDay flex-1 h-[43px] p-1 bg-black/0 rounded-2xl border-black/0 inline-flex flex-col justify-center items-center gap-1" />
        </div>
      </div>
      <div data-layer="Divider" data-node-id="5-2572" className="Divider self-stretch h-px bg-[#dee3d9]" />
      <div data-layer="Calendar legend" data-node-id="5-2573" className="CalendarLegend self-stretch flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div data-layer="State key" data-node-id="5-2574" className="StateKey self-stretch inline-flex justify-start items-center gap-4 overflow-hidden">
          <div data-layer="Scheduled legend" data-node-id="5-2575" className="ScheduledLegend flex justify-start items-center gap-1.5 overflow-hidden">
            <div data-layer="State marker" data-node-id="5-2576" className="StateMarker w-2.5 h-2.5 bg-[#0a3622] rounded-[3px]" />
            <div data-layer="Label" data-node-id="5-2577" className="Label justify-start text-[#0a3622] text-[11px] font-normal font-['Inter']">Scheduled</div>
          </div>
          <div data-layer="Skipped legend" data-node-id="5-2578" className="SkippedLegend flex justify-start items-center gap-1.5 overflow-hidden">
            <div data-layer="Skipped marker" data-node-id="5-2579" className="SkippedMarker justify-start text-[#a7ada7] text-[11px] font-normal font-['Inter'] line-through">23</div>
            <div data-layer="Label" data-node-id="5-2580" className="Label justify-start text-[#6e786f] text-[11px] font-normal font-['Inter']">Skipped</div>
          </div>
        </div>
        <div data-layer="Cutoff legend" data-node-id="5-2581" className="CutoffLegend inline-flex justify-start items-center gap-1.5 overflow-hidden">
          <div data-layer="lock-keyhole" data-node-id="5-2650" className="LockKeyhole w-[13px] h-[13px] relative overflow-hidden">
            <img data-layer="Vector" data-node-id="5-2651" className="Vector w-[9.75px] h-[10.83px] left-[1.63px] top-[1.08px] absolute" src="/assets/5-2651.svg" />
          </div>
          <div data-layer="Label" data-node-id="5-2583" className="Label justify-start text-[#e65100] text-[11px] font-normal font-['Inter']">Past 6 PM Cutoff</div>
          <div data-layer="Today legend" data-node-id="5-2584" className="TodayLegend justify-start text-[#6e786f] text-[11px] font-normal font-['Inter']">· Today: 20 Oct</div>
        </div>
      </div>
    </div>
    <div data-layer="Cutoff reminder" data-node-id="5-2585" className="CutoffReminder self-stretch inline-flex justify-start items-start gap-2 overflow-hidden">
      <div data-layer="clock-3" data-node-id="5-2653" className="Clock3 w-4 h-4 relative overflow-hidden">
        <img data-layer="Vector" data-node-id="5-2654" className="Vector w-[13.33px] h-[13.33px] left-[1.33px] top-[1.33px] absolute" src="/assets/5-2654.svg" />
      </div>
      <div data-layer="Cutoff policy" data-node-id="5-2587" className="CutoffPolicy flex-1 justify-start text-[#e65100] text-[11px] font-normal font-['Inter']">Make changes before 6 PM for the next morning’s delivery. Locked dates can’t be changed.</div>
    </div>
  </div>
</div>
  )
}
