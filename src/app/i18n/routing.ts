import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localePrefix: {
        mode: 'always',
        prefixes: {
            'es': '/es',
            'en': '/en'
        }
    },
    pathnames: {
        '/': '/'
    }
});

export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing);