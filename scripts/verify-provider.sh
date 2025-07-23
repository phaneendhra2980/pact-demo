#!/bin/bash
node provider/server.js &
sleep 3
npx jest provider/provider.test.js