"use client";

import { personalInfo } from "@/lib/data";
import { useI18n } from "@/lib/i18n/context";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CvDownloadButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

export function CvDownloadButton({
  children,
  className,
  ...props
}: CvDownloadButtonProps) {
  const { locale, t } = useI18n();

  const handleDownload = () => {
    const fileName = locale === "tr" ? "/trCV.pdf" : "/enCV.pdf";
    const link = document.createElement("a");

    link.href = fileName;
    link.download = fileName.split("/").pop() ?? fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      type="button"
      onClick={handleDownload}
      className={cn(className)}
      {...props}
    >
      {children ?? t.hero.downloadCv}
    </Button>
  );
}
