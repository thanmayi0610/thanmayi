import { ThemeProvider } from "next-themes";
import "./globals.css";

import React, { PropsWithChildren } from "react";

const Rootlayout = (props: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{props.children}</ThemeProvider>
      </body>
    </html>
  );
};

export default Rootlayout;
