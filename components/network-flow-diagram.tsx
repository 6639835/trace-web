"use client";

import { Smartphone, Globe, Server, Database, ArrowDown } from "lucide-react";

interface FlowBoxProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  variant?: "default" | "highlight" | "terminal";
  icon?: React.ReactNode;
}

function FlowBox({ title, subtitle, children, variant = "default", icon }: FlowBoxProps) {
  const variants = {
    default: "bg-muted/50 border-border",
    highlight: "bg-foreground text-background border-foreground",
    terminal: "bg-muted/30 border-border",
  };

  return (
    <div className={`rounded-lg border p-4 ${variants[variant]}`}>
      <div className="flex items-start gap-3">
        {icon && <div className="shrink-0">{icon}</div>}
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-sm">{title}</div>
          {subtitle && (
            <div className={`text-sm mt-0.5 ${variant === "highlight" ? "text-background/70" : "text-muted-foreground"}`}>
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
      <div className="w-px h-6 bg-border" />
      <ArrowDown className="h-4 w-4 text-muted-foreground" />
      {label && <span className="text-sm text-muted-foreground mt-1">{label}</span>}
    </div>
  );
}

function FlowItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-sm text-muted-foreground">
      <div className="w-1 h-1 rounded-full bg-foreground mt-2 shrink-0" />
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
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
          <Smartphone className="h-5 w-5 text-muted-foreground" />
          <span className="font-semibold text-sm sm:text-base">iOS / macOS Device</span>
        </div>

        {/* Main Flow */}
        <div className="space-y-4">
          {/* Row 1: Apps → VPN Settings → Proxy */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Apps */}
            <FlowBox
              title="Apps"
              subtitle="Safari, URLSession, etc."
            />

            {/* VPN Proxy Settings */}
            <FlowBox
              title="VPN Proxy Settings"
              subtitle="127.0.0.1:8888"
            />

            {/* MITM Proxy Server */}
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Server className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-semibold text-sm">MITMProxyServer</div>
                  <div className="text-sm text-muted-foreground font-mono">TraceProxy/MITM/</div>
                </div>
              </div>

              {/* ProxyConnection box */}
              <div className="rounded-md border border-border bg-background p-3">
                <div className="font-medium text-sm mb-2">ProxyConnection</div>
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
          <div className="flex justify-center lg:justify-end lg:mr-[16%]">
            <FlowArrow />
          </div>

          {/* Row 2: Request Interceptor */}
          <div className="lg:ml-auto lg:w-2/3">
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="font-semibold text-sm mb-3">RequestInterceptor</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="font-medium text-sm">RewriteManager</div>
                  <div className="text-sm text-muted-foreground mt-1">block, redirect, modify, delay</div>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="font-medium text-sm">RequestMapManager</div>
                  <div className="text-sm text-muted-foreground mt-1">mock responses</div>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="font-medium text-sm">BreakpointManager</div>
                  <div className="text-sm text-muted-foreground mt-1">pause, inspect, edit</div>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="font-medium text-sm">ScriptManager</div>
                  <div className="text-sm text-muted-foreground mt-1">custom scripts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow down to Throttling */}
          <div className="flex justify-center lg:justify-end lg:mr-[16%]">
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
          <div className="grid gap-4 lg:grid-cols-2 items-start">
            {/* Left side: Trace App + VPN Management */}
            <div className="space-y-4">
              <FlowBox
                title="Trace App"
                subtitle="Main Application"
                icon={<Smartphone className="h-5 w-5 text-muted-foreground" />}
                variant="highlight"
              />

              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="text-sm text-muted-foreground font-mono mb-3 text-center">← Darwin Notify →</div>
                <FlowBox title="VPN Management" subtitle="Config & Control">
                  <div className="mt-2 text-sm text-muted-foreground font-mono">
                    Provider Messages ↔ PacketTunnelProvider
                  </div>
                </FlowBox>
              </div>
            </div>

            {/* Right side: App Group Storage */}
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Database className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-semibold text-sm">AppGroupStorage</div>
                  <div className="text-sm text-muted-foreground">Shared Container</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="font-medium text-sm font-mono">CapturedRequests/</div>
                  <div className="text-sm text-muted-foreground">NetworkRequest JSON</div>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="font-medium text-sm font-mono">WebSocketConnections/</div>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="font-medium text-sm font-mono">SSEConnections/</div>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <div className="font-medium text-sm font-mono">Configuration/</div>
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
