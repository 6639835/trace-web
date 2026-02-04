'use client';

import { Smartphone, Globe, Server, Database, ArrowDown } from 'lucide-react';
import type { ReactNode } from 'react';

interface FlowBoxProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  variant?: 'default' | 'highlight' | 'terminal';
  icon?: ReactNode;
}

function FlowBox({ title, subtitle, children, variant = 'default', icon }: FlowBoxProps) {
  const variants = {
    default: 'bg-muted/50 border-border',
    highlight: 'bg-foreground text-background border-foreground',
    terminal: 'bg-muted/30 border-border',
  };

  return (
    <div className={`rounded-lg border p-4 ${variants[variant]}`}>
      <div className="flex items-start gap-3">
        {icon && <div className="shrink-0">{icon}</div>}
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold">{title}</div>
          {subtitle && (
            <div
              className={`mt-0.5 text-sm ${variant === 'highlight' ? 'text-background/70' : 'text-muted-foreground'}`}
            >
              {subtitle}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-3">
      <div className="h-6 w-px bg-border" />
      <ArrowDown className="h-4 w-4 text-muted-foreground" />
      {label && <span className="mt-1 text-sm text-muted-foreground">{label}</span>}
    </div>
  );
}

function FlowItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-sm text-muted-foreground">
      <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
      <span>{children}</span>
    </div>
  );
}

export function NetworkFlowDiagram() {
  return (
    <div className="w-full">
      {/* Device Container */}
      <div className="rounded-lg border-2 border-dashed border-border p-4 sm:p-6">
        {/* Device Header */}
        <div className="mb-6 flex items-center gap-2 border-b border-border pb-4">
          <Smartphone className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-semibold sm:text-base">iOS / iPadOS Device</span>
        </div>

        {/* Main Flow */}
        <div className="space-y-4">
          {/* Row 1: Apps → VPN Settings → Proxy */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Apps */}
            <FlowBox title="Apps" subtitle="Safari, URLSession, etc." />

            {/* VPN Proxy Settings */}
            <FlowBox title="VPN Proxy Settings" subtitle="127.0.0.1:8888" />

            {/* MITM Proxy Server */}
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Server className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-sm font-semibold">MITMProxyServer</div>
                  <div className="font-mono text-sm text-muted-foreground">TraceProxy/MITM/</div>
                </div>
              </div>

              {/* ProxyConnection box */}
              <div className="rounded-md border border-border bg-background p-3">
                <div className="mb-2 text-sm font-medium">ProxyConnection</div>
                <div className="space-y-1.5">
                  <FlowItem>HTTP/1.1 parsing</FlowItem>
                  <FlowItem>CONNECT / HTTPS (MITM or passthrough)</FlowItem>
                  <FlowItem>WebSocket handling</FlowItem>
                  <FlowItem>SSE handling</FlowItem>
                  <FlowItem>Hosts override</FlowItem>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow down to Interceptor */}
          <div className="flex justify-center lg:mr-[16%] lg:justify-end">
            <FlowArrow />
          </div>

          {/* Row 2: Request Interceptor */}
          <div className="lg:ml-auto lg:w-2/3">
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="mb-3 text-sm font-semibold">RequestInterceptor</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="text-sm font-medium">RewriteManager</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    block, redirect, modify, delay
                  </div>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="text-sm font-medium">RequestMapManager</div>
                  <div className="mt-1 text-sm text-muted-foreground">mock responses</div>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="text-sm font-medium">BreakpointManager</div>
                  <div className="mt-1 text-sm text-muted-foreground">pause, inspect, edit</div>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="text-sm font-medium">ScriptManager</div>
                  <div className="mt-1 text-sm text-muted-foreground">custom scripts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow down to Throttling */}
          <div className="flex justify-center lg:mr-[16%] lg:justify-end">
            <FlowArrow />
          </div>

          {/* Row 3: Throttling Controller */}
          <div className="lg:ml-auto lg:w-2/3">
            <FlowBox title="NetworkThrottlingController">
              <div className="mt-2 space-y-1.5">
                <FlowItem>Stores throttling state</FlowItem>
                <FlowItem>Tags captured requests with metadata</FlowItem>
              </div>
            </FlowBox>
          </div>

          {/* Arrow down to Storage */}
          <div className="flex justify-center">
            <FlowArrow />
          </div>

          {/* Row 4: Storage and App Communication */}
          <div className="grid items-start gap-4 lg:grid-cols-2">
            {/* Left side: Trace App + VPN Management */}
            <div className="space-y-4">
              <FlowBox
                title="Trace App"
                subtitle="Main Application"
                icon={<Smartphone className="h-5 w-5 text-muted-foreground" />}
                variant="highlight"
              />

              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="mb-3 text-center font-mono text-sm text-muted-foreground">
                  ← Darwin Notify →
                </div>
                <FlowBox title="VPN Management" subtitle="Config & Control">
                  <div className="mt-2 font-mono text-sm text-muted-foreground">
                    Provider Messages ↔ PacketTunnelProvider
                  </div>
                </FlowBox>
              </div>
            </div>

            {/* Right side: App Group Storage */}
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Database className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-sm font-semibold">AppGroupStorage</div>
                  <div className="text-sm text-muted-foreground">Shared Container</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="font-mono text-sm font-medium">CapturedRequests/</div>
                  <div className="text-sm text-muted-foreground">NetworkRequest JSON</div>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="font-mono text-sm font-medium">WebSocketConnections/</div>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="font-mono text-sm font-medium">SSEConnections/</div>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="font-mono text-sm font-medium">Configuration/</div>
                  <div className="text-sm text-muted-foreground">rules, maps, scripts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow to Internet */}
      <div className="flex justify-center">
        <FlowArrow />
      </div>

      {/* Internet */}
      <div className="flex justify-center">
        <div className="w-full max-w-xs">
          <FlowBox
            title="Internet"
            subtitle="Real Server"
            icon={<Globe className="h-5 w-5 text-muted-foreground" />}
            variant="highlight"
          />
        </div>
      </div>
    </div>
  );
}
