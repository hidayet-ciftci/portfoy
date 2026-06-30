import { LanguageProvider } from "@/lib/i18n/context";
import { ThemeProvider } from "@/components/theme/theme-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
