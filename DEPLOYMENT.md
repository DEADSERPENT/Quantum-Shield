# QuantumShield - Production Deployment Guide

Complete guide for deploying the QuantumShield website to production environments.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Vercel Deployment](#vercel-recommended)
3. [Netlify Deployment](#netlify)
4. [Docker Deployment](#docker)
5. [Traditional Server (VPS/Cloud)](#traditional-server)
6. [Environment Variables](#environment-variables)
7. [Performance Optimization](#performance-optimization)
8. [Troubleshooting](#troubleshooting)

---

## Quick Start

> **Important**: Never use `npm run dev` in production!

```bash
# Build for production
npm run build

# Start production server
npm start
```

Your site will run at `http://localhost:3000` in production mode.

---

## Vercel (Recommended)

Vercel is the recommended platform for Next.js applications.

### Automatic Deployment

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel automatically detects Next.js and configures build settings

### Manual Configuration (Optional)

Create `vercel.json` in project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["bom1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Environment Variables on Vercel

1. Go to Project Settings > Environment Variables
2. Add required variables (see [Environment Variables](#environment-variables))
3. Redeploy for changes to take effect

---

## Netlify

### Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"

[[redirects]]
  from = "/*"
  to = "/404"
  status = 404
```

### Deployment Steps

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Initialize: `netlify init`
4. Deploy: `netlify deploy --prod`

---

## Docker

### Dockerfile

Create `Dockerfile` in project root:

```dockerfile
# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

# Stage 2: Build
FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 3: Production
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  quantum-shield:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Build and Run

```bash
# Build image
docker build -t quantum-shield .

# Run container
docker run -p 3000:3000 quantum-shield

# Or with Docker Compose
docker-compose up -d
```

### Update next.config.ts for Standalone Output

```typescript
const nextConfig = {
  output: 'standalone',
  // ... other config
};
```

---

## Traditional Server

### VPS/Cloud Server (Ubuntu/Debian)

#### 1. Install Node.js

```bash
# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### 2. Install PM2 (Process Manager)

```bash
npm install -g pm2
```

#### 3. Clone and Build

```bash
# Clone repository
git clone https://github.com/DEADSERPENT/quantum-Shield.git
cd quantum-Shield

# Install dependencies
npm ci --only=production

# Build
npm run build
```

#### 4. Start with PM2

```bash
# Start application
pm2 start npm --name "quantum-shield" -- start

# Save PM2 configuration
pm2 save

# Setup startup script
pm2 startup
```

#### PM2 Ecosystem File

Create `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'quantum-shield',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/quantum-shield',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/pm2/quantum-shield-error.log',
    out_file: '/var/log/pm2/quantum-shield-out.log',
    time: true
  }]
};
```

### Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name quantum-shield-vert.vercel.app;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name quantum-shield-vert.vercel.app;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/quantum-shield-vert.vercel.app/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/quantum-shield-vert.vercel.app/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers off;

    # Security Headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache static assets
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 60m;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

### SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate (for custom domain)
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal
sudo certbot renew --dry-run
```

---

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port | `3000` |

### Optional Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production URL | `https://quantum-shield-vert.vercel.app` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics | `G-XXXXXXXXXX` |

### Setting Variables

```bash
# Linux/macOS
export NODE_ENV=production
export PORT=3000

# Or create .env.production.local
echo "NODE_ENV=production" >> .env.production.local
```

---

## Performance Optimization

### Build Optimization

The production build automatically:
- Minifies JavaScript and CSS
- Removes development code
- Optimizes images
- Generates static pages where possible
- Creates optimized chunks

### Caching Strategy

Next.js automatically handles caching for:
- Static assets (`/_next/static/*`)
- API routes (configurable)
- ISR pages (configurable)

### CDN Configuration

For global distribution, use a CDN:

1. **Cloudflare**: Point DNS to your server, enable proxy
2. **AWS CloudFront**: Create distribution with origin as your server
3. **Vercel Edge Network**: Automatic with Vercel deployment

---

## Troubleshooting

### Common Issues

#### 1. Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

#### 2. Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

#### 3. Memory Issues

```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

#### 4. Permission Errors

```bash
# Fix ownership
sudo chown -R $USER:$USER /var/www/quantum-shield
```

### Health Check Endpoint

Add to `src/app/api/health/route.ts`:

```typescript
export async function GET() {
  return Response.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
}
```

### Monitoring

- **PM2**: `pm2 monit`
- **Logs**: `pm2 logs quantum-shield`
- **Status**: `pm2 status`

---

## Production Checklist

Before going live, ensure:

- [ ] Environment variables are set
- [ ] SSL certificate is installed
- [ ] Security headers are configured
- [ ] Build completes without errors
- [ ] All pages load correctly
- [ ] Forms and API endpoints work
- [ ] 404 page displays properly
- [ ] Mobile responsiveness verified
- [ ] Performance tested (Lighthouse)
- [ ] Monitoring/logging configured
- [ ] Backup strategy in place

---

## Support

For deployment issues:
- **Website**: [quantum-shield-vert.vercel.app](https://quantum-shield-vert.vercel.app/)
- **Docs**: [quantum-shield-vert.vercel.app/documentation](https://quantum-shield-vert.vercel.app/documentation)

---

**© 2025 QuantumShield. All rights reserved.**
