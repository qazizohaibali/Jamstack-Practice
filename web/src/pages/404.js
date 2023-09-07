import * as React from 'react'
import Seo from '../components/seo'
import { Layout } from '../components/Layout'
import { Heading } from '../components/Heading'
import { Button } from '../components/Button'
import bottomImage from '../images/404.png'
import '../styles/404.scss'

const NotFoundPage = () => (
  <Layout isCtaEnabled={false}>
    <div className="mt-[63.39px] lg:mt-[83px]  py-[300px] background_color_1 lg:pt-[268px] lg:pb-[448px] relative">
      <div className="max-w-[1512px] px-4 lg:px-[250px] xl:px-[385px] flex flex-col gap-6 justify-center items-center mx-auto">
        <Heading
          type="h1"
          otherClasses="font-Rubik text-[42px] font-bold text-white text-center"
        >
          404 - Page Not Found
        </Heading>
        <p className="text-white font-Inter text-base font-normal text-center">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Click the button below to
          return to the XenaTech home page.
        </p>
        <Button variant="text-link-dark" label="Go Home" />
        <img
          src={bottomImage}
          alt=""
          className="absolute -bottom-20 lg:-bottom-[155px] w-[260px] lg:w-[570px] rotate_image"
        />
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found | Camberlayne-Inc" />

export default NotFoundPage
