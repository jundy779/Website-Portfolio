import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'
import Script from 'next/script'
import { useRouter } from 'next/router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
// Load components
import PageLoader from '../components/ui/PageLoader'

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-W13WDMCV3Q'; 

export default function App({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const nextRouter = useRouter();

  useEffect(() => {
    // Handling page loading state
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    nextRouter.events.on('routeChangeStart', handleStart);
    nextRouter.events.on('routeChangeComplete', handleComplete);
    nextRouter.events.on('routeChangeError', handleComplete);

    return () => {
      nextRouter.events.off('routeChangeStart', handleStart);
      nextRouter.events.off('routeChangeComplete', handleComplete);
      nextRouter.events.off('routeChangeError', handleComplete);
    };
  }, [nextRouter]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
      // Menambahkan opsi disable untuk perangkat mobile jika diperlukan
      // disable: window.innerWidth < 768
    })

    // Re-inisialisasi AOS pada resize window
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, [])

  return (
    <>
      {/* Page Loading Indicator */}
      <PageLoader isLoading={isLoading} />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      
      <DefaultSeo
        titleTemplate="%s | Muhammad Jundy Rabbani"
        defaultTitle="Portfolio & Resume | Muhammad Jundy Rabbani"
        description="Selamat datang di website portfolio Muhammad Jundy Rabbani. Student, Gamer, and Business Development specialist dengan keahlian di bidang web development, mobile apps, dan digital marketing."
        canonical="https://muh-jundy-rabbani.vercel.app/"
        openGraph={{
          type: 'website',
          locale: 'id_ID',
          url: 'https://muh-jundy-rabbani.vercel.app/',
          siteName: 'Muhammad Jundy Rabbani Portfolio',
          images: [
            {
              url: 'https://kappa.lol/ljAtM',
              width: 1200,
              height: 630,
              alt: 'Muhammad Jundy Rabbani',
            },
          ],
        }}
        twitter={{
          handle: '@iky_ynd',
          site: '@iky_ynd',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'portfolio, software engineer, web developer, android developer, Muhammad Jundy Rabbani, digital business, fullstack developer',
          },
          {
            name: 'author',
            content: 'Muhammad Jundy Rabbani',
          }
        ]}
      />
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      
      {/* Vercel Speed Insights */}
      <SpeedInsights />
      
      {/* Vercel Analytics */}
      <Analytics />
    </>
  )
}