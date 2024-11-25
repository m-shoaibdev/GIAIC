import Content from "@/components/Content";
import HeroSection from "@/components/Hero-section";
import RoundCircle from "../public/WorkTogetherImage.png";
import Sponsor from "@/components/Sponsor-section";

export default function Home() {
  return (
    <>
    <HeroSection />
    <div className="bg-white pt-8 md:pt-20 lg:pt-24">
      <Content heading="Project Management" paragraph="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note." textColor="dark" btn="Get Started" alignImage="right"/>
    </div>

    <div className="bg-white pb-5 md:pb-8">
      <Content heading="Work together" paragraph="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others." btn="Try it now" alignImage="left" imgUrl={RoundCircle} textColor="dark"/>
    </div>

    <div className="py-8 md:py-20 lg:py-24">
      <Content heading="Use as Extension" paragraph="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."  btn="Lets Go" alignImage="right" />
    </div>

    <div className="bg-white py-8 md:py-20 lg:py-24">
      <Content heading="Customise it to your needs" paragraph="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API." textColor="dark" btn="Lets go" alignImage="left"/>
    </div>

    <div className="py-8 md:py-20 lg:py-24">
      <Content heading="Your work, everywhere you are" paragraph="Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!" btn="Try Taskey" imgBox={false}/>
    </div>
    <Sponsor />
    </>
  );
}
