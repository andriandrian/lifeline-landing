#!/bin/bash

# Check for presence of pnpm-lock.yaml
if [ -f "pnpm-lock.yaml" ]; then
  echo "pnpm-lock.yaml found. Running pnpm install."
  exit 0
else
  echo "pnpm-lock.yaml not found. Exiting."
  exit 1
fi
