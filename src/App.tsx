import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import Header from './Components/Layout/Header';
import Hero from './Components/Layout/Hero';
import Features from './Components/Layout/Features/Features';
import Process from './Components/Layout/Process';
import Comment from './Components/Layout/Comments/Comment';
import FAQs from './Components/Layout/FAQs';
import CTA from './Components/Layout/CTA';
import Footer from './Components/Layout/Footer';

const App = () => {

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));  
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
       <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
       <div className='container mx-auto px-10 max-w-7xl'>
        <Header/>
        <Hero/>
        <Features/>
        <Process/>
        <Comment/>
        <FAQs/>
        <CTA/>
        <Footer/>
       </div>


    </MantineProvider>
    </ColorSchemeProvider>
   
  )
}
export default App 