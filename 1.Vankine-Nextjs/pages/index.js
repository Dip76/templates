import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog1 from "@/components/sections/Blog1"
import Client1 from "@/components/sections/Client1"
import Faq1 from "@/components/sections/Faq1"
import Form1 from "@/components/sections/Form1"
import Funfacts1 from "@/components/sections/Funfacts1"
import Process1 from "@/components/sections/Process1"
import Service1 from "@/components/sections/Service1"
import Service2 from "@/components/sections/Service2"
import Slider1 from "@/components/sections/Slider1"
import Testimonial1 from "@/components/sections/Testimonial1"
export default function Home1() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Slider1 />
                <Service1 />
                <About1 />
                <Service2 />
                <Faq1 />
                <Funfacts1 />
                <Form1 />
                <Process1 />
                <Testimonial1 />
                <Client1 />
                <Blog1 />
            </Layout>
        </>
    )
}