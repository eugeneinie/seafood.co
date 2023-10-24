import React from 'react'
import Image from 'next/image'
import styles from './components.module.css'

export default function Shop() {
  return (  
    <section className='flex flex-row items-center'>        

        <Image src="/images/houcine.jpg" alt='cashier' width={300} height={300} className='z-50 rounded-md mt-20 ml-[50px] pl-100'/>

        <div className={`${styles.shop_banner}`}>
                <div className={`${styles.details}`}>
                    <h1>Shop Local</h1>
                    <p>
                        We know that during COVID-19, a lot of folks around the city and state are feeling uneasy about the future - we’re not sure what the future holds either. <br /><br />
                        That said: we know that we love making sure you have the gear you need for your adventures, and we’re going to keep doing that - with our team - until the city tells us we can’t. <br /><br />
                        But as long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.
                        <br /><br />-------<br /><br />
                        Jane & John Doe<br />Acme Outdoors
                    </p>
                </div>
        </div>    
     </section>
  )
}
