# AUV Telemetry Dashboard Challenge

https://github.com/user-attachments/assets/73440bbc-73a4-4d1b-bd3c-701119653955

# Quick Start Guide

## Prerequisites
- Node 22 or higher

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tritonminingco/AUV-Luna.git

2. `cd` into the project directory:
   ```bash
   cd AUV-Luna
   ```

3. Install the dependencies:
   ```bash
    npm install
    ```

## Running the Application

To start the application, run:
   ```bash
   npm start dev
   ```
It will start the development server and open the application in your default web browser at `http://localhost:5173`.

# Architecture Overview

## Mock Engine

- `useAUVSimulation` is the mock engine which simulates the AUV telemetry data. It generates random telemetry data for the AUV, including position, battery level, status etc...

## Components

- `AUVSimulator` is the main dashboard component that displays the telemetry data.
- `AUVCard` is the component that displays individual telemetry points, one for each AUV.
- `AUVMap` is the component that displays the AUV's position on a map.
- `AUVDevButton` is a quick access button to trigger a sample Alert Dialog.
- `alerts/*.jsx` contains the Alert Dialog components including the System and the reusable Alert Dialog.





