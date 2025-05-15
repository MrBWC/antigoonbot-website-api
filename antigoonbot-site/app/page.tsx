"use client";

import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import useSWR from "swr";
import "./bb.css";
import "./globals.css";

const fetcher = (url: string) => fetch(url).then(res => res.json());

function LiveStatsCard() {
  const { data } = useSWR("/api/stats", fetcher, { refreshInterval: 10000 });

  if (!data) return null;

  const statusColor = data.status === "online" ? "text-green-400" : "text-red-400";
  const statusLabel = data.status === "online" ? "Online" : "Offline";
  const lastUpdated = new Date(data.updated).toLocaleTimeString();

  return (
    <div className="w-full max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-2">📊 Live Bot Stats</h3>
      <p className="text-gray-300">
        Status: <span className={statusColor}>{statusLabel}</span>
      </p>
      <p className="text-gray-300">
        Protected Servers: <span className="font-bold text-indigo-400">{data.guilds}</span>
      </p>
      <p className="text-xs text-gray-500 mt-2">Updated: {lastUpdated}</p>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/10 hover:scale-105 transition-transform duration-300 shadow-md">
      <h3 className="font-semibold text-white text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* 🌌 Stars background */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* 💻 Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">AntigoonBot</h1>
        <section className="mt-16 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Started as a hobby, now protecting communities From Gooners.</h2>
          <p className="text-gray-300">
            AntigoonBot began as a weekend project to help moderate small Discord servers and grew into a full security tool used by
            multiple communities to detect and ban Gooners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Feature title="Automated Banning" desc="Checks a shared ban list and bans Gooner accounts." />
            <Feature title="Easy Setup" desc="Use !setup to get started automatically." />
            <Feature title="Lightweight & Fast" desc="No clutter — just focused protection." />
          </div>

          <a
            href="https://discord.com/oauth2/authorize?client_id=1367938448295596113&permissions=2052&integration_type=0&scope=bot"
            className="inline-block mt-10 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium transition"
          >
            Invite AntigoonBot
          </a>
        </section>

        <footer className="mt-24 text-xs text-gray-500">
          © 2025 AntigoonBot – Built with love by <span className="text-white">SyntaxXXX</span>
        </footer>
      </div>
    </main>
  );
}
