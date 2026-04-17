"use client";
import { useState, useEffect, useRef } from "react";

const E = {
  fire: String.fromCodePoint(0x1F525),
  chart: String.fromCodePoint(0x1F4CA),
  chartUp: String.fromCodePoint(0x1F4C8),
  people: String.fromCodePoint(0x1F465),
  zap: String.fromCodePoint(0x26A1),
  map: String.fromCodePoint(0x1F5FA, 0xFE0F),
  vote: String.fromCodePoint(0x1F5F3, 0xFE0F),
  drink: String.fromCodePoint(0x1F379),
  megaphone: String.fromCodePoint(0x1F4E2),
  gear: String.fromCodePoint(0x2699, 0xFE0F),
  battery: String.fromCodePoint(0x1F50B),
  dot: String.fromCodePoint(0x00B7),
  check: String.fromCodePoint(0x2713),
  rocket: String.fromCodePoint(0x1F680),
  beer: String.fromCodePoint(0x1F37B),
  eyes: String.fromCodePoint(0x1F440),
  phone: String.fromCodePoint(0x1F4F1),
  money: String.fromCodePoint(0x1F4B0),
  handshake: String.fromCodePoint(0x1F91D),
  party: String.fromCodePoint(0x1F389),
  location: String.fromCodePoint(0x1F4CD),
};

const SC = {
  packed:   { label: "PACKD",    color: "#FF3B5C", bg: "rgba(255,59,92,0.14)",   icon: E.fire },
  building: { label: "BUILDING", color: "#FFB800", bg: "rgba(255,184,0,0.14)",   icon: E.chartUp },
  chill:    { label: "CHILL",    color: "#00D4AA", bg: "rgba(0,212,170,0.14)",    icon: String.fromCodePoint(0x1F60C) },
  dead:     { label: "DEAD",     color: "#555",    bg: "rgba(100,100,100,0.14)",  icon: String.fromCodePoint(0x1F4A4) },
};

const BARS = [
  { name: "Sky Bar", status: "packed", count: 247, cap: 300, cover: 10, special: "$4 Tito's & Soda", event: "DJ Night", trend: "up", friends: 4 },
  { name: "Southeastern", status: "packed", count: 198, cap: 250, cover: 5, special: "$3 Wells til 11", event: null, trend: "up", friends: 2 },
  { name: "1716", status: "building", count: 112, cap: 200, cover: 0, special: "Half price pitchers", event: "Live Band", trend: "up", friends: 1 },
  { name: "Moe's", status: "building", count: 89, cap: 180, cover: 0, special: "$6 Margs", event: null, trend: "up", friends: 0 },
  { name: "Bunkers", status: "chill", count: 43, cap: 150, cover: 5, special: "$2 PBR tallboys", event: null, trend: "steady", friends: 0 },
  { name: "Avondale", status: "dead", count: 12, cap: 100, cover: 0, special: "BOGO drafts", event: null, trend: "steady", friends: 0 },
];

const trendArrow = { up: String.fromCodePoint(0x2191), steady: String.fromCodePoint(0x2192), down: String.fromCodePoint(0x2193) };

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function PhoneMockup() {
  return (
    <div style={{
      width: 280, minHeight: 560,
      background: "#111118",
      borderRadius: 32,
      border: "2.5px solid #252530",
      padding: "8px 0 0",
      position: "relative",
      boxShadow: "0 40px 80px rgba(0,0,0,.6), 0 0 60px rgba(255,59,92,0.06)",
      overflow: "hidden",
      flexShrink: 0,
    }}>
      <div style={{
        width: 90, height: 22, background: "#08080D", borderRadius: "0 0 14px 14px",
        margin: "0 auto 4px",
      }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#1A1A24", position: "relative", left: 60, top: 7 }} />
      </div>
      <div style={{ padding: "0 12px 12px", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "2px 2px 6px", fontSize: 9, color: "#555" }}>
          <span style={{ fontWeight: 600 }}>9:47 PM</span>
          <span style={{ letterSpacing: 1 }}>||||</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
          <span style={{
            fontSize: 20, fontWeight: 800, letterSpacing: "-0.04em",
            fontFamily: "'Syne', sans-serif",
            background: "linear-gradient(135deg, #FF3B5C, #FFB800)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>PACKD</span>
          <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#34D399", animation: "pulse2 2s infinite" }} />
            <span style={{ fontSize: 8, color: "#555" }}>Live</span>
          </div>
        </div>
        <p style={{ margin: "0 0 8px", fontSize: 8, color: "#3B3B4B" }}>{`Auburn, AL ${E.dot} Thursday Night`}</p>

        <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
          {[
            { val: "2", label: "PACKD", c: "#FF3B5C" },
            { val: "729", label: "TONIGHT", c: "#FFB800" },
            { val: "7", label: "FRIENDS", c: "#00D4AA" },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, background: `${s.c}0F`, borderRadius: 7, padding: "5px 3px", textAlign: "center",
              border: `1px solid ${s.c}1A`,
            }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: s.c, fontFamily: "'Syne', sans-serif" }}>{s.val}</div>
              <div style={{ fontSize: 6, color: "#777", fontWeight: 700, letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {BARS.map((bar, i) => {
          const s = SC[bar.status];
          const pct = Math.round((bar.count / bar.cap) * 100);
          return (
            <div key={i} style={{
              background: "rgba(255,255,255,0.025)", borderRadius: 9,
              padding: "7px 9px", marginBottom: 4,
              border: "1px solid rgba(255,255,255,0.035)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#E5E7EB" }}>{bar.name}</span>
                    {bar.event && <span style={{ fontSize: 6, color: "#A78BFA", background: "rgba(167,139,250,0.14)", padding: "1px 4px", borderRadius: 6, fontWeight: 800 }}>LIVE</span>}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 7, fontWeight: 800, color: s.color, background: s.bg, padding: "1px 5px", borderRadius: 6 }}>
                      {s.icon} {s.label}
                    </span>
                    <span style={{ fontSize: 10, color: "#E5E7EB", fontWeight: 800, fontFamily: "'Syne', sans-serif" }}>{`~${bar.count}`}</span>
                    {bar.cover > 0
                      ? <span style={{ fontSize: 8, color: "#F9FAFB", fontWeight: 600, background: "rgba(255,255,255,0.07)", padding: "1px 4px", borderRadius: 4 }}>${bar.cover}</span>
                      : <span style={{ fontSize: 8, color: "#34D399", fontWeight: 700 }}>Free</span>
                    }
                  </div>
                  <div style={{ fontSize: 8, color: "#D1D5DB", marginTop: 2 }}>{`${E.drink} ${bar.special}`}</div>
                </div>
                <div style={{ textAlign: "right", minWidth: 30 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: s.color, fontFamily: "'Syne', sans-serif", lineHeight: 1 }}>{pct}%</div>
                  <div style={{ fontSize: 6, color: "#444" }}>full</div>
                </div>
              </div>
              <div style={{ marginTop: 4, height: 2, background: "rgba(255,255,255,0.04)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: `${pct}%`, height: "100%", borderRadius: 2, background: `linear-gradient(90deg, ${s.color}, ${s.color}aa)`, boxShadow: `0 0 4px ${s.color}33` }} />
              </div>
            </div>
          );
        })}

        <div style={{
          display: "flex", justifyContent: "space-around", marginTop: 8, padding: "7px 0 2px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}>
          {[
            { icon: E.fire, label: "Tonight", active: true },
            { icon: E.map, label: "Map", active: false },
            { icon: E.people, label: "Friends", active: false },
            { icon: E.zap, label: "Check In", active: false },
          ].map((tab, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 13 }}>{tab.icon}</div>
              <div style={{ fontSize: 7, color: tab.active ? "#FF3B5C" : "#3B3B4B", fontWeight: tab.active ? 700 : 400, marginTop: 1 }}>{tab.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PackdLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [barEmail, setBarEmail] = useState("");
  const [barSubmitted, setBarSubmitted] = useState(false);

  const [featRef, featVis] = useInView();
  const [howRef, howVis] = useInView();
  const [barRef, barVis] = useInView();

  const handleSubmit = (e) => { e.preventDefault(); if (email.includes("@")) setSubmitted(true); };
  const handleBarSubmit = (e) => { e.preventDefault(); if (barEmail.includes("@")) setBarSubmitted(true); };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#08080D",
      color: "#F9FAFB",
      fontFamily: "'Outfit', sans-serif",
      overflowX: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes pulse2 { 0%,100%{opacity:1} 50%{opacity:.35} }
        @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        * { box-sizing:border-box; margin:0; padding:0; }
        ::-webkit-scrollbar { display: none; }
        input::placeholder { color: #555; }
        a { color: inherit; text-decoration: none; }
        .fade-section { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-section.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* ====== NAV ====== */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "16px 24px",
        background: "rgba(8,8,13,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{
          fontSize: 22, fontWeight: 800, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em",
          background: "linear-gradient(135deg, #FF3B5C, #FFB800)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>PACKD</span>
        <a href="#waitlist" style={{
          padding: "8px 20px", borderRadius: 10, border: "none",
          background: "linear-gradient(135deg, #FF3B5C, #FF6B3D)",
          color: "#fff", fontSize: 13, fontWeight: 700,
          cursor: "pointer", textDecoration: "none",
        }}>Join Waitlist</a>
      </nav>

      {/* ====== HERO ====== */}
      <section style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        textAlign: "center",
      }}>
        {/* Ambient glows */}
        <div style={{ position: "absolute", top: -100, left: "30%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,59,92,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 100, right: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,184,0,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ animation: "fadeUp 0.6s ease" }}>
          <div style={{
            display: "inline-block", padding: "6px 16px", borderRadius: 20,
            background: "rgba(255,59,92,0.1)", border: "1px solid rgba(255,59,92,0.2)",
            fontSize: 13, fontWeight: 600, color: "#FF3B5C", marginBottom: 24,
          }}>
            {`${E.location} Launching at Auburn University`}
          </div>
        </div>

        <h1 style={{
          fontSize: "clamp(42px, 8vw, 72px)", fontWeight: 800, fontFamily: "'Syne', sans-serif",
          letterSpacing: "-0.04em", lineHeight: 1.05, maxWidth: 700,
          animation: "fadeUp 0.6s ease 0.1s both",
        }}>
          <span style={{
            background: "linear-gradient(135deg, #FF3B5C, #FF6B3D, #FFB800)",
            backgroundSize: "200% 200%",
            animation: "gradientShift 4s ease infinite",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Know before</span>
          <br />you go.
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2.5vw, 20px)", color: "#9CA3AF", maxWidth: 480,
          lineHeight: 1.6, marginTop: 20, fontWeight: 400,
          animation: "fadeUp 0.6s ease 0.2s both",
        }}>
          See which bars are packed, which are dead, and where your friends are — all in real time. Stop guessing. Start going.
        </p>

        {/* Email signup */}
        <div id="waitlist" style={{ marginTop: 36, animation: "fadeUp 0.6s ease 0.3s both", width: "100%", maxWidth: 420 }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
              <input
                type="email" placeholder="Enter your email"
                value={email} onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1, padding: "14px 18px", borderRadius: 12,
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
                  color: "#F9FAFB", fontSize: 15, fontFamily: "'Outfit', sans-serif",
                  outline: "none",
                }}
              />
              <button type="submit" style={{
                padding: "14px 28px", borderRadius: 12, border: "none",
                background: "linear-gradient(135deg, #FF3B5C, #FF6B3D)",
                color: "#fff", fontSize: 15, fontWeight: 700,
                fontFamily: "'Outfit', sans-serif", cursor: "pointer",
                whiteSpace: "nowrap",
              }}>Join Waitlist</button>
            </form>
          ) : (
            <div style={{
              padding: "16px 24px", borderRadius: 12,
              background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)",
              color: "#34D399", fontSize: 15, fontWeight: 600, textAlign: "center",
            }}>
              {`${E.party} You're on the list! We'll hit you up before launch.`}
            </div>
          )}
          <p style={{ fontSize: 12, color: "#3B3B4B", marginTop: 8 }}>
            Join 0 Auburn students on the waitlist. Be first.
          </p>
        </div>

        {/* Phone mockup */}
        <div style={{ marginTop: 56, animation: "fadeUp 0.8s ease 0.4s both" }}>
          <div style={{ animation: "float 4s ease-in-out infinite" }}>
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ====== FEATURES ====== */}
      <section ref={featRef} className={`fade-section ${featVis ? "visible" : ""}`} style={{
        padding: "100px 24px",
        maxWidth: 900, margin: "0 auto",
      }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800, fontFamily: "'Syne', sans-serif",
            letterSpacing: "-0.03em",
          }}>
            {`Stop texting "what's the move?" `}
          </h2>
          <p style={{ fontSize: 17, color: "#9CA3AF", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
            Packd replaces the guessing game with real-time data.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}>
          {[
            { icon: E.fire, title: "Live Bar Status", desc: "See which spots are packed, building, chill, or dead — updated in real time from door counts." },
            { icon: E.drink, title: "Tonight's Specials", desc: "Cover prices, drink deals, and events for every bar — no more walking in blind." },
            { icon: E.people, title: "Friend Activity", desc: "See which friends are already out and where. No more \"where you at?\" texts." },
            { icon: E.vote, title: "Group Vote", desc: "Poll your friend group on where to go tonight. Majority wins, everyone knows the move." },
            { icon: E.zap, title: "Check In", desc: "One tap when you arrive. Earn points toward free cover and deals at partner bars." },
            { icon: E.eyes, title: "Trend Alerts", desc: "Get notified when your favorite bar starts popping off or when friends check in." },
          ].map((f, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.025)",
              borderRadius: 16, padding: "24px 20px",
              border: "1px solid rgba(255,255,255,0.04)",
              transition: "transform 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(255,59,92,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, fontFamily: "'Syne', sans-serif" }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section ref={howRef} className={`fade-section ${howVis ? "visible" : ""}`} style={{
        padding: "80px 24px 100px",
        maxWidth: 700, margin: "0 auto",
      }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800, fontFamily: "'Syne', sans-serif",
            letterSpacing: "-0.03em",
          }}>How it works</h2>
        </div>

        {[
          { num: "1", title: "Open Packd", desc: "Pull up the app before you go out. See every bar's live status at a glance.", color: "#FF3B5C" },
          { num: "2", title: "Pick your spot", desc: "Check crowd levels, specials, cover prices, and where your friends are. Vote with your group if you can't decide.", color: "#FFB800" },
          { num: "3", title: "Check in when you arrive", desc: "One tap at the door. Earn points toward free cover and exclusive deals.", color: "#00D4AA" },
        ].map((step, i) => (
          <div key={i} style={{
            display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 36,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, flexShrink: 0,
              background: `${step.color}15`, border: `1px solid ${step.color}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, fontWeight: 800, color: step.color, fontFamily: "'Syne', sans-serif",
            }}>{step.num}</div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6, fontFamily: "'Syne', sans-serif" }}>{step.title}</h3>
              <p style={{ fontSize: 15, color: "#9CA3AF", lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ====== BAR OWNERS ====== */}
      <section ref={barRef} className={`fade-section ${barVis ? "visible" : ""}`} style={{
        padding: "80px 24px 100px",
        maxWidth: 700, margin: "0 auto",
      }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(255,59,92,0.06), rgba(255,184,0,0.04))",
          border: "1px solid rgba(255,59,92,0.1)",
          borderRadius: 24, padding: "48px 32px", textAlign: "center",
        }}>
          <div style={{ fontSize: 36, marginBottom: 16 }}>{E.handshake}</div>
          <h2 style={{
            fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 800, fontFamily: "'Syne', sans-serif",
            letterSpacing: "-0.03em", marginBottom: 12,
          }}>Own a bar in Auburn?</h2>
          <p style={{ fontSize: 16, color: "#9CA3AF", lineHeight: 1.6, maxWidth: 460, margin: "0 auto 8px" }}>
            Packd sends more students to your bar — especially on slow nights. Get a free traffic dashboard, push deals directly to students, and see how you stack up.
          </p>
          <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 28 }}>
            Free to join. No contracts. No setup fees.
          </p>

          {!barSubmitted ? (
            <form onSubmit={handleBarSubmit} style={{ display: "flex", gap: 8, maxWidth: 420, margin: "0 auto" }}>
              <input
                type="email" placeholder="Your email"
                value={barEmail} onChange={e => setBarEmail(e.target.value)}
                style={{
                  flex: 1, padding: "14px 18px", borderRadius: 12,
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
                  color: "#F9FAFB", fontSize: 15, fontFamily: "'Outfit', sans-serif",
                  outline: "none",
                }}
              />
              <button type="submit" style={{
                padding: "14px 24px", borderRadius: 12, border: "none",
                background: "linear-gradient(135deg, #FF3B5C, #FF6B3D)",
                color: "#fff", fontSize: 14, fontWeight: 700,
                fontFamily: "'Outfit', sans-serif", cursor: "pointer",
                whiteSpace: "nowrap",
              }}>Partner With Us</button>
            </form>
          ) : (
            <div style={{
              padding: "16px 24px", borderRadius: 12, maxWidth: 420, margin: "0 auto",
              background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)",
              color: "#34D399", fontSize: 15, fontWeight: 600,
            }}>
              {`${E.check} We'll reach out to set up your free dashboard.`}
            </div>
          )}
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section style={{
        padding: "60px 24px 100px",
        textAlign: "center",
      }}>
        <h2 style={{
          fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, fontFamily: "'Syne', sans-serif",
          letterSpacing: "-0.03em", maxWidth: 500, margin: "0 auto",
        }}>
          <span style={{
            background: "linear-gradient(135deg, #FF3B5C, #FF6B3D, #FFB800)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>College nightlife</span>
          {" is about to change."}
        </h2>
        <p style={{ fontSize: 17, color: "#6B7280", marginTop: 16, marginBottom: 32 }}>
          Launching Fall 2026. Be the first to know.
        </p>
        <a href="#waitlist" style={{
          display: "inline-block",
          padding: "16px 40px", borderRadius: 14,
          background: "linear-gradient(135deg, #FF3B5C, #FF6B3D)",
          color: "#fff", fontSize: 17, fontWeight: 700,
          fontFamily: "'Outfit', sans-serif", cursor: "pointer",
          textDecoration: "none",
        }}>
          {`Join the Waitlist ${E.rocket}`}
        </a>
      </section>

      {/* ====== FOOTER ====== */}
      <footer style={{
        padding: "32px 24px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        textAlign: "center",
      }}>
        <span style={{
          fontSize: 16, fontWeight: 800, fontFamily: "'Syne', sans-serif",
          background: "linear-gradient(135deg, #FF3B5C, #FFB800)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>PACKD</span>
        <p style={{ fontSize: 12, color: "#3B3B4B", marginTop: 8 }}>
          {`${String.fromCodePoint(0x00A9)} 2026 Packd ${E.dot} Auburn, AL ${E.dot} packdapp.live`}
        </p>
      </footer>
    </div>
  );
}
