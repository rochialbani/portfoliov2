import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export const metadata = {
  title: 'Rocío Albani | Front End Developer',
  description: 'Rocío Albani personal website'

}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' className='h-full' suppressHydrationWarning>

      <body>

        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='flex flex-col h-full '>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
