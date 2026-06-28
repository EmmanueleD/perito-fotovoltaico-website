#!/usr/bin/env node

import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const [, , command, ...args] = process.argv;

if (!command) {
  console.error("Usage: node scripts/with-env.mjs <command> [...args]");
  process.exit(1);
}

loadEnvFile(".env.local");
loadEnvFile(".env");
prependLocalBinToPath();

const child = spawn(command, args, {
  stdio: "inherit",
  shell: process.platform === "win32",
  env: process.env
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  const lines = readFileSync(filePath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (!key || process.env[key] !== undefined) {
      continue;
    }

    process.env[key] = unquote(value);
  }
}

function unquote(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

function prependLocalBinToPath() {
  const pathKey = process.platform === "win32" ? "Path" : "PATH";
  const localBin = `${process.cwd()}/node_modules/.bin`;
  process.env[pathKey] = process.env[pathKey]
    ? `${localBin}:${process.env[pathKey]}`
    : localBin;
}
