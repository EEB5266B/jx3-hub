import * as React from 'react';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-toolpad-color-scheme="light">
        <body>
        <AppRouterCacheProvider options={{enableCssLayer: true}}>{children}</AppRouterCacheProvider>
        </body>
        </html>
    );
}
