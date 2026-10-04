# SheerID Doc Generator

**Description**: A React-based identity verification document generator supporting student and teacher/employee document templates for UI testing, verification flow development, and educational purposes.

**🔗 Live Demo**: [https://acagen.suck-dick.tech/](https://acagen.suck-dick.tech/)

## 📖 Introduction

This is a modern web application built with **React** + **Vite** + **HeroUI** for rapidly generating identity verification document templates.

### Student Documents
1.  **Tuition Statement**
2.  **Transcript**
3.  **Schedule**
4.  **Admission Letter**
5.  **Enrollment Certificate**
6.  **Student ID Card** - Front & Back

### Teacher/Employee Documents
7.  **Employment Letter**
8.  **Salary Statement**
9.  **Teacher ID Card** - Front & Back
10. **Teaching Certificate**

Supports one-click random data generation, custom university logos, and multiple export formats (Stitched Image, ZIP Archive).

## ✨ Features

*   **Modern UI**: Built with [HeroUI (NextUI)](https://heroui.com), featuring dark mode support and a smooth interface.
*   **Infinite Canvas**: A draggable, zoomable workspace powered by **Framer Motion**, with dual view modes (Standard/Extra).
*   **One-Click Generation**: Integrated with Faker.js to generate realistic names, addresses, dates, GPAs, credits, and course data instantly.
*   **Custom Logo**: Upload your own university logo, which updates in real-time across documents.
*   **Flexible Export**:
    *   **Horizontal Stitch**: Stitches the 3 core documents (Tuition/Transcript/Schedule) into one long horizontal image.
    *   **Grid Stitch**: Stitches documents in a grid layout.
    *   **ZIP Archive**: Exports all documents as separate images in a ZIP file.
    *   **Standalone Download**: Download Admission Letters and Enrollment Certificates individually.
    *   **Clean Export**: Automatically handles background transparency to ensure exported images have a crisp white background without artifacts.
*   **Live Preview**: WYSIWYG document preview.

## 🛠️ Tech Stack

*   [React](https://react.dev/)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [HeroUI](https://heroui.com/)
*   [html2canvas](https://html2canvas.hertzen.com/)
*   [Faker.js](https://fakerjs.dev/)

## 🚀 Quick Start

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Dev Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 🌐 Deployment Guide

Recommended way to deploy: **Cloudflare Pages**

1.  Fork this repository to your GitHub.
2.  Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
3.  Go to **Workers & Pages** -> **Create Application** -> **Pages** -> **Connect to Git**.
4.  Select your repository.
5.  **Build settings** (Usually auto-detected):
    *   **Framework preset**: `Vite`
    *   **Build command**: `npm run build`
    *   **Build output directory**: `dist`
6.  **Important**: Add Environment Variable:
    *   `NPM_FLAGS` = `--legacy-peer-deps`
7.  Click **Save and Deploy**.

## ⚠️ Disclaimer

**Please read carefully before using this software:**

1.  **Educational & Testing Use Only**: This tool is intended for developers to test UI layouts, verify upload flows, and system integration.
2.  **No Illegal Use**: **DO NOT** use this tool to create fraudulent documents, misrepresent your identity, or bypass verification systems (e.g., SheerID, Unidays).
3.  **No Validity**: The documents generated are fictitious templates and hold no legal validity or official certification power.
4.  **Liability**: The authors assume no liability for any misuse of this software. Using this software implies you agree to bear all legal responsibilities and risks associated with its use.

## 📄 License

[MIT License](LICENSE)
