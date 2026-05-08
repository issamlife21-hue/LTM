# Catalina Landing Signage

Self-contained Node.js server that drives the Catalina Landing lobby/TV
signage. No npm packages — only Node.js built-in modules.

## What it shows

A single rotating display with five modes (Weather, Directory, CNN,
Bloomberg, Property) layered over a continuous slideshow of property
photos.

## Setup

### 1. Install Node.js

Download and install the **LTS** version from
[nodejs.org](https://nodejs.org). Accept the defaults during install. No
other packages are required.

### 2. Start the server

In the `catalina-signage` folder, double-click **`start.bat`**.

A terminal window will open and print something like:

```
catalina-signage server listening
  Local:    http://localhost:3000
  Network:  http://192.168.1.42:3000
```

Leave this window open — closing it stops the signage server.

### 3. Open the display on each TV

On each TV / display PC connected to the same network:

1. Open a web browser (Chrome or Edge recommended).
2. Navigate to the **Network URL** printed above (e.g.
   `http://192.168.1.42:3000`).
3. Press **F11** to enter fullscreen.

The signage will start cycling through the five modes immediately.

## Configuration

### News API key

The CNN and Bloomberg panels call the Anthropic API to generate live
headlines. Open `public/index.html`, find the comment marker
`INSERT_API_KEY`, and paste a key into the `API_KEY` constant on the
next line. Without a key, the panels render static fallback content.

### Display sleep

The browser keeps the page awake on its own, but the operating system
may still dim or sleep the screen. On the TV PC, set **Power Options →
Screen / Sleep** to **Never** while plugged in.

## Files

```
catalina-signage/
  server.js          Node.js HTTP server (port 3000) + /api/weather
  package.json       npm start script
  start.bat          Double-click launcher for Windows
  public/
    index.html       Single-page signage UI
```

## Troubleshooting

- **Page never loads**: confirm the firewall on the host PC allows
  inbound connections on port 3000.
- **Weather panel shows `--`**: the host PC has no internet access, or
  Open-Meteo is unreachable. Weather refreshes every 10 minutes.
- **Wrong time on the clock**: the clock uses the browser's local
  timezone. Set the TV PC's timezone to Pacific.
