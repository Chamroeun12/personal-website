"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  Upload,
  Image as ImageIcon,
  Download,
  RefreshCw,
  Sliders,
  CheckCircle2,
  FileCheck,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
  Maximize2
} from "lucide-react";

type FormatType = "webp" | "jpeg" | "png";

interface ImageStats {
  name: string;
  originalSize: number;
  originalWidth: number;
  originalHeight: number;
  originalType: string;
  previewUrl: string;
}

export function ImageConverter() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageStats, setImageStats] = useState<ImageStats | null>(null);
  const [targetFormat, setTargetFormat] = useState<FormatType>("webp");
  const [quality, setQuality] = useState<number>(85);
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [convertedSize, setConvertedSize] = useState<number | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(100);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file (PNG, JPG, WebP, GIF, etc.)");
      return;
    }

    setSelectedFile(file);
    setConvertedUrl(null);
    setConvertedSize(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setImageStats({
          name: file.name,
          originalSize: file.size,
          originalWidth: img.width,
          originalHeight: img.height,
          originalType: file.type,
          previewUrl: e.target?.result as string,
        });
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  }, []);

  const convertImage = () => {
    if (!imageStats) return;

    setIsConverting(true);

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageStats.previewUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const targetWidth = Math.round((img.width * scale) / 100);
      const targetHeight = Math.round((img.height * scale) / 100);

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setIsConverting(false);
        return;
      }

      // If converting to JPEG, add white background for transparent images
      if (targetFormat === "jpeg") {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, targetWidth, targetHeight);
      }

      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

      const mimeType = `image/${targetFormat}`;
      const qualityFactor = targetFormat === "png" ? undefined : quality / 100;

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            setConvertedUrl(url);
            setConvertedSize(blob.size);
          }
          setIsConverting(false);
        },
        mimeType,
        qualityFactor
      );
    };

    img.onerror = () => {
      alert("Failed to process image. Please try a different file.");
      setIsConverting(false);
    };
  };

  const downloadConvertedImage = () => {
    if (!convertedUrl || !imageStats) return;

    const baseName = imageStats.name.substring(0, imageStats.name.lastIndexOf(".")) || imageStats.name;
    const downloadName = `${baseName}-converted.${targetFormat}`;

    const link = document.createElement("a");
    link.href = convertedUrl;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetAll = () => {
    setSelectedFile(null);
    setImageStats(null);
    setConvertedUrl(null);
    setConvertedSize(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const savingsPercent =
    imageStats && convertedSize
      ? Math.round(((imageStats.originalSize - convertedSize) / imageStats.originalSize) * 100)
      : null;

  return (
    <div className="bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-2xl">
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-blue/10 dark:bg-brand-cyan/20 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/30">
              100% Free Client-Side
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Private (No Cloud Upload)
            </span>
          </div>
          <h2 className="text-xl lg:text-2xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-brand-blue dark:text-brand-cyan" />
            Image Converter & Web Optimizer
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Convert photos to WebP, PNG, or JPEG instantly. Reduce file sizes up to 90% without quality loss.
          </p>
        </div>

        {imageStats && (
          <button
            onClick={resetAll}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Upload New Image
          </button>
        )}
      </div>

      {/* Upload Zone */}
      {!imageStats ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-3xl p-10 lg:p-16 text-center cursor-pointer transition-all duration-300 ${
            dragActive
              ? "border-brand-blue bg-blue-50/50 dark:border-brand-cyan dark:bg-brand-cyan/10 scale-[1.01]"
              : "border-slate-300 hover:border-brand-blue dark:border-white/20 dark:hover:border-brand-blue/60 bg-slate-50/60 hover:bg-slate-50 dark:bg-white/5 dark:hover:bg-white/[0.07]"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/webp, image/gif, image/bmp"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileSelect(e.target.files[0]);
              }
            }}
          />

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue/15 to-sky-500/15 dark:from-brand-blue/30 dark:to-brand-cyan/30 flex items-center justify-center mx-auto mb-4 border border-brand-blue/20 dark:border-brand-cyan/30">
            <Upload className="w-8 h-8 text-brand-blue dark:text-brand-cyan animate-pulse" />
          </div>

          <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2">
            Drop your image here, or{" "}
            <span className="text-brand-blue dark:text-brand-cyan underline decoration-brand-blue/40">browse files</span>
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-4">
            Supports PNG, JPEG, WebP, GIF, and BMP. Fast browser-based conversion with zero data sent to external servers.
          </p>

          <div className="inline-flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-white/5 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
            <span>✨ WebP for Fastest Websites</span>
            <span>•</span>
            <span>🎨 PNG for Logos & Icons</span>
            <span>•</span>
            <span>📷 JPG for Photos</span>
          </div>
        </div>
      ) : (
        /* Image Converter Control Panel */
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Image Preview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/10 flex items-center justify-center p-2 min-h-[280px]">
                <img
                  src={convertedUrl || imageStats.previewUrl}
                  alt="Preview"
                  className="max-h-[340px] max-w-full object-contain rounded-xl"
                />

                <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-white/10 shadow-sm">
                  {imageStats.originalWidth} × {imageStats.originalHeight} px
                </div>

                {convertedUrl && (
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white font-bold text-xs px-2.5 py-1 rounded-md shadow-lg flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Converted
                  </div>
                )}
              </div>

              {/* File Info Bar */}
              <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 flex items-center justify-between text-xs">
                <div className="truncate max-w-[200px] text-slate-800 dark:text-slate-300 font-medium">
                  {imageStats.name}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-slate-400">Original:</span>
                  <span className="text-slate-900 dark:text-white font-mono font-semibold">
                    {formatFileSize(imageStats.originalSize)}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Conversion Options */}
            <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
              <div className="space-y-5">
                {/* Format Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    1. Select Target Format
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {(
                      [
                        { id: "webp", title: "WebP", desc: "Recommended (Web)" },
                        { id: "png", title: "PNG", desc: "Lossless / Alpha" },
                        { id: "jpeg", title: "JPEG", desc: "Universal Photo" },
                      ] as const
                    ).map((fmt) => (
                      <button
                        key={fmt.id}
                        type="button"
                        onClick={() => {
                          setTargetFormat(fmt.id);
                          setConvertedUrl(null);
                        }}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          targetFormat === fmt.id
                            ? "bg-brand-blue/10 border-brand-blue dark:bg-brand-blue/20 dark:border-brand-cyan text-brand-blue dark:text-white shadow-sm dark:shadow-glow"
                            : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100"
                        }`}
                      >
                        <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                          .{fmt.title}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {fmt.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quality Slider (for WebP & JPEG) */}
                {targetFormat !== "png" && (
                  <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" />
                        Compression Quality
                      </span>
                      <span className="text-sm font-mono font-bold text-brand-blue dark:text-brand-cyan">
                        {quality}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      step="5"
                      value={quality}
                      onChange={(e) => {
                        setQuality(Number(e.target.value));
                        setConvertedUrl(null);
                      }}
                      className="w-full accent-brand-blue dark:accent-brand-cyan cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                      <span>Smaller file size</span>
                      <span>Balanced (Recommended: 85%)</span>
                      <span>Max quality</span>
                    </div>
                  </div>
                )}

                {/* Dimension Scaling */}
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      Resolution Scaling
                    </span>
                    <span className="text-sm font-mono font-bold text-indigo-600 dark:text-indigo-300">
                      {scale}% (
                      {Math.round((imageStats.originalWidth * scale) / 100)} ×{" "}
                      {Math.round((imageStats.originalHeight * scale) / 100)} px)
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {[100, 75, 50, 25].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          setScale(s);
                          setConvertedUrl(null);
                        }}
                        className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          scale === s
                            ? "bg-indigo-600 text-white font-bold"
                            : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-transparent"
                        }`}
                      >
                        {s}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons & Results */}
              <div className="space-y-3 pt-2">
                {!convertedUrl ? (
                  <button
                    onClick={convertImage}
                    disabled={isConverting}
                    className="w-full py-3.5 px-4 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-cyan hover:opacity-95 shadow-glow transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isConverting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Converting in Browser...
                      </>
                    ) : (
                      <>
                        <span>Convert to .{targetFormat.toUpperCase()} Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                ) : (
                  <div className="space-y-3">
                    {/* Comparison Banner */}
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-emerald-700 dark:text-emerald-300 font-semibold uppercase tracking-wider">
                          Optimized Size
                        </div>
                        <div className="text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">
                          {convertedSize ? formatFileSize(convertedSize) : "Done"}
                        </div>
                      </div>
                      {savingsPercent !== null && savingsPercent > 0 && (
                        <div className="text-right">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40">
                            -{savingsPercent}% Saved
                          </span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={downloadConvertedImage}
                      className="w-full py-3.5 px-4 rounded-xl font-heading font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Converted Image</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
