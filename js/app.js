* { box-sizing: border-box; }
html {
  scroll-behavior: smooth;
  font-size: 16px;
}
body {
  margin: 0;
  background: #fff;
  color: #403b38;
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 400;
  line-height: 1.75;
  overflow-x: hidden;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
a {
  color: inherit;
}
button, input, textarea {
  font: inherit;
}

.section {
  padding: 82px 6vw;
}

.section-paper {
  position: relative;
  padding: 82px 6vw;
  background: linear-gradient(180deg, #fff 0%, #fbf7f4 48%, #fff 100%);
}

.section-paper::after {
  content: "";
  position: absolute;
  inset: 18px;
  border: 1px solid #eee1da;
  border-radius: 28px;
  pointer-events: none;
}

.section > *, .section-paper > * {
  position: relative;
  z-index: 1;
}

.script, .hero-script, .thanks-script {
  font-family: "Dancing Script", cursive;
  font-weight: 600;
}

.floating {
  position: fixed;
  z-index: 50;
  border: 0;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  cursor: pointer;
  color: #fff;
  background: rgba(63, 56, 52, 0.7);
  backdrop-filter: blur(8px);
  box-shadow: 0 7px 22px rgba(0, 0, 0, 0.15);
}
.menu-toggle {
  right: 15px;
  bottom: 17px;
  display: grid;
  place-content: center;
  gap: 4px;
}
.menu-toggle span {
  display: block;
  width: 16px;
  height: 1px;
  background: #fff;
}
.music-toggle {
  left: 15px;
  bottom: 17px;
  font-size: 20px;
}

.drawer {
  position: fixed;
  right: 16px;
  bottom: 70px;
  z-index: 49;
  width: 205px;
  padding: 13px;
  background: #fff;
  border: 1px solid #e5d9d2;
  border-radius: 14px;
  box-shadow: 0 14px 45px rgba(109, 81, 67, 0.16);
  display: none;
}
.drawer.open {
  display: block;
}
.drawer a {
  display: block;
  text-decoration: none;
  font-size: 11px;
  letter-spacing: .08em;
  padding: 8px 10px;
  border-bottom: 1px solid #f1ebe7;
  color: #4b3d39;
}
.drawer a:last-child {
  border: 0;
}

.hero {
  position: relative;
  height: 100svh;
  min-height: 650px;
  overflow: hidden;
  background: #eee;
}
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.hero-wash {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.20), rgba(0,0,0,0.10) 35%, rgba(0,0,0,0.48));
}
.hero-vignette {
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.25);
}
.hero-copy {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8%;
  text-align: center;
  color: #fff;
  text-shadow: 0 2px 18px rgba(0,0,0,0.35);
}
.hero-save {
  font-size: 10px;
  letter-spacing: 0.42em;
  text-transform: uppercase;
}
.hero-date {
  font: 500 48px "Quicksand", sans-serif;
  letter-spacing: 0.18em;
}
.hero-script {
  font-size: 82px;
  line-height: 1.05;
  letter-spacing: 0;
}
.hero-line {
  width: 70px;
  height: 1px;
  background: rgba(255,255,255,0.8);
  margin: 17px auto;
}
.hero-sub {
  font-size: 11px;
  letter-spacing: .18em;
  margin-top: 6px;
}

.section-heading {
  text-align: center;
  margin: 0 auto 55px;
  max-width: 720px;
}
.section-heading span {
  font-size: 9px;
  letter-spacing: .32em;
  color: #a58f86;
  text-transform: uppercase;
}
.section-heading h2 {
  font: 500 36px "Quicksand", sans-serif;
  letter-spacing: .06em;
  margin: 8px 0 0;
}
.section-heading i {
  font-style: normal;
  color: #c79689;
  font-size: 23px;
}

.paper-card {
  max-width: 900px;
  margin: auto;
  text-align: center;
  position: relative;
  z-index: 1;
}
.ornament-top, .ornament-bottom {
  font: 28px "Quicksand", sans-serif;
  color: #c9998e;
}
.parents {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 720px;
  margin: 35px auto 60px;
}
.parents div {
  display: flex;
  flex-direction: column;
}
.parents small {
  font-size: 9px;
  letter-spacing: .25em;
  color: #a28e85;
}
.parents strong {
  font: 500 23px "Quicksand", sans-serif;
}
.parents p {
  font-size: 11px;
  line-height: 1.65;
  margin: 3px 0;
}

.tiny-heading {
  font: 13px "Quicksand", sans-serif;
  letter-spacing: .12em;
}
.paper-card h1 {
  font: 500 34px "Quicksand", sans-serif;
  letter-spacing: .08em;
  line-height: 1.1;
  margin: 10px 0;
}
.paper-card h1 em {
  font-style: normal;
  font-size: 24px;
}
.couple-names {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
  margin: 33px 0 9px;
  color: #9d635b;
}
.couple-names span {
  font-size: clamp(42px, 5vw, 58px);
  letter-spacing: 0;
}
.couple-names b {
  font: normal 22px serif;
  color: #514943;
}
.roman {
  font: 14px "Quicksand", sans-serif;
  letter-spacing: .08em;
}
.rule {
  width: 80px;
  height: 1px;
  background: #e1d2cb;
  margin: 30px auto;
}
.ceremony-label {
  font-size: 10px;
  letter-spacing: .13em;
}
.date-lockup {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 5px 0;
}
.date-lockup span {
  font: 500 17px "Quicksand", sans-serif;
  letter-spacing: .1em;
}
.date-lockup b {
  font: 500 61px "Quicksand", sans-serif;
  color: #aa6259;
}
.lunar0, .lunar {
  font: 16px "Quicksand", sans-serif;
  letter-spacing: .06em;
}

.couple-pair {
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}
.person {
  text-align: center;
}
.polaroid {
  background: #fff;
  padding: 11px 11px 25px;
  box-shadow: 0 12px 35px rgba(107,81,64,0.12);
  transform: rotate(-2.2deg);
}
.polaroid.tilt-right {
  transform: rotate(2.2deg);
}
.polaroid img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
}
.person-role {
  font: 500 12px "Quicksand", sans-serif;
  letter-spacing: .2em;
  margin-top: 25px;
}
.person h3 {
  font: 500 32px "Quicksand", sans-serif;
  margin: 0;
}
.person p {
  font-size: 11.5px;
  color: #766b66;
  max-width: 360px;
  margin: 6px auto;
}

.family-strip {
  max-width: 760px;
  margin: 70px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #e8ddd8;
  border-bottom: 1px solid #e8ddd8;
}
.family-strip > div {
  text-align: center;
  padding: 22px;
  border-right: 1px solid #e8ddd8;
}
.family-strip > div:last-child {
  border-right: 0;
}
.family-strip span,
.family-strip small {
  display: block;
  font-size: 8px;
  letter-spacing: .18em;
}
.family-strip b {
  font: 500 21px "Quicksand", sans-serif;
}

.story-grid {
  max-width: 930px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 65px 45px;
}
.story-item {
  text-align: center;
}
.story-photo {
  background: #fff;
  padding: 7px;
  box-shadow: 0 10px 30px rgba(125,102,83,0.15);
}
.story-photo img {
  width: 100%;
  aspect-ratio: 1.55;
  object-fit: cover;
}
.story-copy span {
  font: 12px "Quicksand", sans-serif;
  color: #b58a80;
}
.story-copy h3 {
  font: 500 20px "Quicksand", sans-serif;
  letter-spacing: .12em;
  margin: 4px 0;
}
.story-copy p {
  font-size: 11.5px;
  color: #756b66;
  margin: 0 auto;
  max-width: 390px;
}

.gallery {
  max-width: 1120px;
  margin: auto;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 180px;
  gap: 10px;
}
.gallery-grid figure {
  margin: 0;
  overflow: hidden;
}
.gallery-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .7s ease;
}
.gallery-grid figure:hover img {
  transform: scale(1.035);
}
.gallery-grid figure:nth-child(1),
.gallery-grid figure:nth-child(6) {
  grid-row: span 2;
}
.gallery-grid figure:nth-child(2),
.gallery-grid figure:nth-child(7) {
  grid-column: span 2;
}

.countdown-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}
.countdown-box {
  background: rgba(255,255,255,0.7);
  border: 1px solid #e6d6ce;
  padding: 28px 22px;
  box-shadow: 0 8px 25px rgba(90, 55, 45, 0.06);
}
.countdown-label {
  font: 600 13px "Montserrat", sans-serif;
  letter-spacing: .18em;
  color: #8e756b;
  text-transform: uppercase;
}
.countdown-date {
  font: 500 17px "Montserrat", sans-serif;
  letter-spacing: .12em;
  color: #a66b61;
  margin: 10px 0 24px;
}
.countdown-numbers {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.countdown-numbers div {
  background: #fff;
  border: 1px solid #e6d6ce;
  padding: 17px 6px;
  text-align: center;
}
.countdown-numbers strong {
  display: block;
  font: 500 36px "Quicksand", sans-serif;
  color: #9f5f57;
  line-height: 1;
}
.countdown-numbers span {
  display: block;
  margin-top: 7px;
  font: 500 9px "Montserrat", sans-serif;
  letter-spacing: .16em;
  color: #8e756b;
  text-transform: uppercase;
}

.event-wrap {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 55px;
  align-items: center;
}
.event-art {
  min-height: 450px;
  display: grid;
  place-items: center;
  position: relative;
  border-radius: 50%;
  background: radial-gradient(circle, #f4e3dd 0 29%, transparent 30%), linear-gradient(145deg, #fff, #f8efeb);
}
.art-ring {
  width: 230px;
  height: 230px;
  border: 1px solid #d9b7ad;
  border-radius: 50%;
  display: grid;
  place-content: center;
  text-align: center;
  font: 500 39px "Quicksand", sans-serif;
  line-height: .8;
  letter-spacing: .05em;
  transform: rotate(-7deg);
}
.art-ring em {
  font-style: normal;
  font-size: 30px;
}
.art-leaf {
  position: absolute;
  font-size: 75px;
  color: #b99a8f;
  bottom: 65px;
  right: 25%;
}
.event-list {
  display: grid;
  gap: 18px;
}
.event-card {
  background: #fff;
  border: 1px solid #e4d9d3;
  border-radius: 12px;
  padding: 24px 28px;
  box-shadow: 0 12px 35px rgba(118,88,73,0.07);
}
.event-card > span {
  font-size: 8px;
  letter-spacing: .2em;
  color: #a48e85;
  text-transform: uppercase;
}
.event-card h3 {
  font: 500 30px "Quicksand", sans-serif;
  margin: 2px 0 4px;
}
.event-time {
  display: flex;
  gap: 25px;
  align-items: center;
  border-top: 1px solid #eee6e1;
  border-bottom: 1px solid #eee6e1;
  padding: 10px 0;
  margin: 8px 0;
}
.event-time b {
  font: 500 25px "Quicksand", sans-serif;
}
.event-time small {
  font-size: 8px;
  letter-spacing: .1em;
  line-height: 1.6;
}
.event-card p {
  font-size: 11px;
  margin: 9px 0;
}
.event-card a {
  font-size: 8px;
  letter-spacing: .15em;
  text-decoration: none;
  border-bottom: 1px solid #b8978d;
}

.wish-layout {
  max-width: 920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  align-items: start;
}
.wish-form {
  display: grid;
  gap: 12px;
  background: #fff;
  border: 1px solid #e9ddd8;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 12px 30px rgba(123,92,80,0.04);
}
.wish-form input,
.wish-form textarea {
  border: 1px solid #ded2cc;
  padding: 13px 14px;
  background: #fff;
  outline: none;
  font-size: 11px;
}
.wish-form input:focus,
.wish-form textarea:focus {
  border-color: #b8968d;
}
.wish-form button {
  border: 0;
  background: #3f3936;
  color: #fff;
  padding: 13px;
  letter-spacing: .16em;
  font-size: 9px;
  cursor: pointer;
}
.wish-honeypot {
  position: absolute !important;
  left: -9999px !important;
  width: 1px !important;
  height: 1px !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
.wish-status {
  min-height: 1.5em;
  font-size: .82rem;
  letter-spacing: .02em;
  text-align: center;
}
.wish-status.success { color: #337d4c; }
.wish-status.error { color: #b5594c; }

.wish-card {
  background: #fff;
  border: 1px solid #e9ddd8;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 12px 30px rgba(123,92,80,0.04);
}
.wish-card-title {
  margin-bottom: 14px;
  text-align: center;
  font: 500 18px "Quicksand", sans-serif;
  letter-spacing: .08em;
  color: #5f4c45;
}
.wish-list-box {
  display: grid;
  gap: 10px;
}
.wish-item {
  background: #faf6f2;
  border: 1px solid #f2e7e1;
  border-radius: 10px;
  padding: 12px 14px;
}
.wish-item strong {
  display: block;
  font-size: 12px;
  color: #4e3a35;
  letter-spacing: .04em;
  margin-bottom: 4px;
}
.wish-item p {
  margin: 0;
  color: #685d59;
  font-size: 11px;
  line-height: 1.6;
}
.wish-placeholder {
  text-align: center;
  color: #8e756b;
  font-size: 13px;
  padding: 18px 8px;
}

.thanks {
  min-height: 650px;
  display: grid;
  place-items: center;
  text-align: center;
}
.thanks-inner {
  max-width: 560px;
}
.thanks-flower {
  font-size: 30px;
  color: #bd9185;
}
.thanks-script {
  font-size: 88px;
  letter-spacing: 0;
}
.thanks-inner p {
  font-size: 11.5px;
  color: #756a65;
}
.thanks-names {
  font: 500 25px "Quicksand", sans-serif;
  letter-spacing: .22em;
  margin-top: 35px;
}
.thanks-date {
  font-size: 9px;
  letter-spacing: .25em;
  margin-top: 4px;
}

footer {
  text-align: center;
  background: #faf6f2;
  padding: 17px;
  font-size: 8px;
  letter-spacing: .18em;
  color: #998a83;
}

.preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;
  background: #fffaf8;
  transition: opacity .5s ease, visibility .5s ease;
}
.preloader.hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.preloader-badge {
  font-size: 11px;
  letter-spacing: .35em;
  color: #a88c82;
  text-transform: uppercase;
}
.preloader-name {
  font-family: "Dancing Script", cursive;
  font-size: clamp(54px, 8vw, 88px);
  color: #9f5f57;
  line-height: .9;
}
.preloader-date {
  font: 500 14px "Montserrat", sans-serif;
  letter-spacing: .3em;
  color: #806b63;
  text-transform: uppercase;
}
.preloader-button {
  background: #9f5f57;
  color: #fff;
  border: 0;
  border-radius: 999px;
  padding: 16px 38px;
  font: 600 12px "Montserrat", sans-serif;
  letter-spacing: .15em;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(159, 95, 87, 0.32);
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .7s ease, transform .7s ease;
}
.reveal.show {
  opacity: 1;
  transform: none;
}

@media (max-width: 700px) {
  .section, .section-paper { padding: 62px 5vw; }
  .section-paper::after { inset: 12px; border-radius: 20px; }
  .hero { min-height: 600px; }
  .hero-date { font-size: 38px; }
  .hero-script { font-size: 61px; }
  .parents, .couple-pair, .story-grid, .event-wrap, .wish-layout, .countdown-grid {
    grid-template-columns: 1fr;
  }
  .parents { gap: 22px; margin-bottom: 45px; }
  .couple-names { gap: 13px; }
  .date-lockup { gap: 14px; }
  .date-lockup b { font-size: 48px; }
  .family-strip { grid-template-columns: 1fr; }
  .family-strip > div {
    border-right: 0;
    border-bottom: 1px solid #e8ddd8;
  }
  .family-strip > div:last-child { border-bottom: 0; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 155px; }
  .gallery-grid figure:nth-child(1),
  .gallery-grid figure:nth-child(6) { grid-row: span 2; }
  .gallery-grid figure:nth-child(2),
  .gallery-grid figure:nth-child(7) { grid-column: span 1; }
  .event-art { min-height: 310px; }
  .thanks-script { font-size: 63px; }
  .section-heading h2 { font-size: 30px; }
}
