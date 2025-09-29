# AUV Luna - Seabed Mapper Telemetry Dashboard

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/tritonminingco/AUV-Luna)
[![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)](https://github.com/tritonminingco/AUV-Luna)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/tritonminingco/AUV-Luna/blob/main/LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-22%2B-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-19.0.0--rc.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-7.0.4-purple.svg)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9.30.1-red.svg)](https://eslint.org/)
[![Depth Rating](https://img.shields.io/badge/depth%20rating-4000m-blue.svg)](https://github.com/tritonminingco/AUV-Luna)
[![ISA Compliance](https://img.shields.io/badge/ISA%20Compliance-ENV--1%20%7C%20ENV--2-green.svg)](https://github.com/tritonminingco/AUV-Luna)
[![Operational Zone](https://img.shields.io/badge/zone-Clarion--Clipperton%20Zone%20(CCZ)-orange.svg)](https://github.com/tritonminingco/AUV-Luna)

**Luna** is a high-resolution bathymetry, habitat mapping, and compliance geotagging AUV optimized for CCZ operations to 4000m depth. Manufactured by Triton Mining Co., this autonomous underwater vehicle provides real-time telemetry monitoring with ISA compliance reporting capabilities.

![AUV Luna Dashboard](https://github.com/user-attachments/assets/73440bbc-73a4-4d1b-bd3c-701119653955)

## 🚀 Key Features

- **Real-time Telemetry Monitoring**: Position, power, environmental, and mission status tracking
- **ISA Compliance Reporting**: Automated environmental monitoring with sediment discharge limits
- **Interactive Mapping**: Live AUV position tracking with mapping swath visualization
- **Alert System**: Critical alerts for battery, sediment violations, and protected species proximity
- **Mission Management**: Progress tracking and completion monitoring
- **Environmental Monitoring**: pH, temperature, dissolved oxygen, and turbidity sensors
- **Communication Status**: Link quality and uplink status monitoring

## 🎯 Primary Functions

- **Bathymetry**: High-resolution seabed mapping
- **Habitat Mapping**: Detailed environmental feature identification
- **Geotagging**: Precise location and compliance reporting
- **Compliance Reporting**: ISA standards adherence monitoring

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

## 🏗️ System Architecture

The AUV Luna telemetry dashboard is built with a modular React architecture optimized for real-time marine operations monitoring.

## 📊 Telemetry Engine

- **`useAUVSimulation`**: Core simulation engine that generates realistic AUV telemetry data including:
  - **Position**: GPS coordinates, depth, heading, and speed
  - **Power**: Battery percentage and estimated remaining time
  - **Environmental**: Sediment levels, turbidity, pH, temperature, and dissolved oxygen
  - **Mission**: Status, progress, and completion tracking
  - **Communications**: Link quality and uplink status
  - **Performance**: Mapping area coverage and feature identification

## 🧩 Core Components

- **`AUVSimulator`**: Main dashboard orchestrating all telemetry displays and controls
- **`AUVCard`**: Individual telemetry badge components for each data category
- **`AUVMap`**: Interactive Leaflet-based map with AUV position, mapping swath, and plume overlays
- **`AUVDevButton`**: Development utility for testing alert systems
- **`AlertSystem`**: Real-time alert management with ISA compliance monitoring
- **`AlertDialog`**: Reusable alert notification components

## 🚨 Alert System

The system monitors critical conditions including:
- **Battery Warnings**: Below 40% (medium), below 20% (critical)
- **Sediment Violations**: ISA environmental threshold breaches
- **Protected Species Proximity**: Distance-based environmental protection
- **Communication Loss**: Link quality degradation or uplink failure

## 🗺️ Mapping Features

- **Live Position Tracking**: Real-time AUV location with heading indicators
- **Mapping Swath Visualization**: Circular sector display of survey coverage
- **Plume Overlay**: Environmental disturbance visualization
- **Compliance Monitoring**: ISA standard adherence tracking

## 📋 Technical Specifications

### AUV Luna Specifications
- **Manufacturer**: Triton Mining Co.
- **Depth Rating**: 4000m
- **Operational Zone**: Clarion-Clipperton Zone (CCZ)
- **Autonomy Modes**: Teleop, Semi-autonomous, Autonomous
- **Primary Functions**: Bathymetry, Habitat Mapping, Geotagging, Compliance Reporting

### Environmental Monitoring
- **Sediment Threshold**: Configurable ISA compliance limits
- **Protected Species Distance**: 150m minimum separation
- **Sensor Suite**: pH, temperature, dissolved oxygen, turbidity, sediment concentration

### Technology Stack
- **Frontend**: React 19.0.0-rc.1 with Vite 7.0.4
- **Mapping**: Leaflet with React-Leaflet integration
- **Styling**: CSS3 with modern responsive design
- **Linting**: ESLint 9.30.1 with React-specific rules
- **Build Tool**: Vite for fast development and optimized production builds

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint code analysis

### Project Structure
```
src/
├── components/          # React components
│   ├── alerts/         # Alert system components
│   ├── AUVCard.jsx     # Telemetry display cards
│   ├── AUVMap.jsx      # Interactive mapping component
│   └── AUVSimulator.jsx # Main dashboard component
├── styles/             # CSS styling files
└── useAUVSimulation.js # Telemetry simulation hook
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions about AUV Luna operations, please contact Triton Mining Co. technical support.

