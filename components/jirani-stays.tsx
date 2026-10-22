"use client"

import { FormEvent, useState } from "react"

type Stay = {
  name: string
  place: string
  type: string
  guests: number
  beds: number
  baths: number
  price: string
  rating: string
  tag: string
  image: string
}

const stay: Stay = {
  name: "Salt & Sea House",
  place: "Diani Beach",
  type: "Villa",
  guests: 6,
  beds: 3,
  baths: 2,
  price: "18,000",
  rating: "4.98",
  tag: "Beach days",
  image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=85",
}

const types = ["Villa", "Cabin", "Apartment", "Cottage", "Any kind of stay"]

export function JiraniStays() {
  const [activeType, setActiveType] = useState("Villa")
  const [isSaved, setIsSaved] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  function openEnquiry() {
    setEnquiryOpen(true)
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    document.getElementById("stays")?.scrollIntoView({ behavior: "smooth" })
  }

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = `Hi Jirani Stays! I'd like to ask about availability.\n\nStay: ${stay.name}\nName: ${form.get("name")}\nMy contact: ${form.get("contact")}\nCheck-in: ${form.get("checkin")}\nCheck-out: ${form.get("checkout")}\nGuests: ${form.get("guests")}\n\nCould you please check if this stay is available?`
    window.open(`https://wa.me/254182163802?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
    setEnquiryOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="wrap nav">
          <a className="brand" href="#top"><span className="mark">j.</span> Jirani Stays</a>
          <nav className="navlinks" aria-label="Main navigation">
            <a href="#stays">Explore stays</a><a href="#how">How it works</a><a className="nav-cta" href="#stays">Find your stay ↗</a>
          </nav>
        </div>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-inner wrap">
            <div className="hero-copy">
              <div className="eyebrow">Your Diani beach escape</div>
              <h1>Find your<br />place by the<br /><em>ocean.</em></h1>
              <p>Wake up to warm coastal days and make yourself at home in Diani. Browse our stays, share your dates, and we’ll check availability for you.</p>
              <form className="search" onSubmit={submitSearch}>
                <label><small>HOME TYPE</small><select value={activeType} onChange={(event) => setActiveType(event.target.value)}>{types.map((type) => <option key={type}>{type}</option>)}</select></label>
                <button type="submit">Explore Diani →</button>
              </form>
            </div>
            <div className="hero-art"><div className="sun" /><img className="hero-img" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85" alt="A welcoming coastal holiday home" /><div className="hero-note"><strong>Take it slow.<br />You’re in Diani.</strong><span>Find your coast-side stay</span></div></div>
          </div>
        </section>
        <div className="trust"><div className="wrap trust-inner"><strong>Your coast-side stay, made simple</strong><div className="trustbits"><span>Diani stays selected with care</span><span>Local recommendations</span><span>Here to help</span></div></div></div>
        <section className="wrap stays" id="stays">
          <div className="section-head"><div><div className="eyebrow">Jirani Stays · Diani</div><h2>Find your place by the sea</h2></div><p>Found a favourite? Send us your dates and we’ll check availability.</p></div>
          <div className="filters"><button className="filter active" type="button">All Diani stays</button></div>
          <article className="card"><div className="photo"><img src={stay.image} alt={`${stay.name}, ${stay.place}`} /><span className="badge">{stay.tag}</span><button className={`heart ${isSaved ? "saved" : ""}`} type="button" aria-label={`Save ${stay.name}`} onClick={() => setIsSaved(!isSaved)}>{isSaved ? "♥" : "♡"}</button></div><div className="details"><div className="loc">{stay.place} · {stay.type}</div><div className="titleline"><h3>{stay.name}</h3><span className="rating">★ <b>{stay.rating}</b></span></div><div className="meta">Up to {stay.guests} guests · {stay.beds} beds · {stay.baths} baths</div><div className="card-bottom"><span className="price"><b>KSh {stay.price}</b> / night</span><button className="ask" type="button" onClick={openEnquiry}>Ask about dates ↗</button></div></div></article>
        </section>
        <section className="wrap" id="how"><div className="how"><div><h2>We’ll check your Diani dates with you.</h2><p>Send us an enquiry with your stay details. We’ll check with the host and get back to you. Your booking is confirmed only after availability and booking details are agreed.</p></div><div className="steps"><div className="step"><span className="step-num">01</span><h3>Choose a stay</h3><p>Browse Diani homes and pick a place that suits your trip.</p></div><div className="step"><span className="step-num">02</span><h3>Share your plans</h3><p>Fill in your dates and guest details to send an enquiry.</p></div><div className="step"><span className="step-num">03</span><h3>We confirm</h3><p>We’ll check availability and reply with the next steps.</p></div></div></div></section>
      </main>
      <footer><div className="wrap foot"><a className="brand" href="#top"><span className="mark">j.</span> Jirani Stays</a><span>Diani stays by the coast</span><span>Availability is checked before a booking is confirmed.</span></div></footer>
      {enquiryOpen && <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setEnquiryOpen(false)}><form className="modal" onSubmit={submitEnquiry}><div className="modal-top"><div><div className="eyebrow">Ask about this stay</div><h2>{stay.name}</h2></div><button className="close" type="button" onClick={() => setEnquiryOpen(false)} aria-label="Close enquiry">×</button></div><p>Continue to WhatsApp to send your enquiry. We’ll check availability and reply with the next steps.</p><div className="fields"><label>Your name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Your phone or email<input required name="contact" autoComplete="email" placeholder="Contact details" /></label><label>Check-in<input required type="date" name="checkin" /></label><label>Check-out<input required type="date" name="checkout" /></label><label className="wide">Number of guests<select name="guests" defaultValue="2 guests"><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5 guests</option><option>6+ guests</option></select></label></div><button className="primary" type="submit">Continue to WhatsApp ↗</button><p className="fine">Your stay is only confirmed after we’ve checked availability with you.</p></form></div>}
    </>
  )
}
