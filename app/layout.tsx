import { ThemeRegistry } from "app/ThemeRegistry";
import { Children } from "app/types/commonProps";

import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Several custom button hover animations showcasing my proficiency in CSS animations. These animations create an engaging user experience, demonstrating my creativity and attention to detail in web development.",
  title: "Hover Animations",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
