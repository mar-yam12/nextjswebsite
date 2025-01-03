'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

export default function Home() {
    const route = useRouter()
    return (
        <div className='bg-gradient'>
            <div>
                <Image src={'/logo.webp'} alt='logo' width={100} height={100} className='img-logo'/>
            </div>
            <div className='pt-20 pl-28 pb-24'>
                <b><i><h1 className='text-center'>Welcome to Radiant Skin</h1></i></b>
                <br/>
                <p className='font-light text-center'>Your journey to natural skincare starts here.</p>
                <br/>
                <button onClick={()=>route.push("/product")} className='btn-shop-now'>Shop Now</button>
                <div className='parent-container'>
                    <Image src={'/homepage.PNG'} alt='homepage picture' width={150} height={150} className='img-homepage'/>
                </div>
            </div>
        </div>
    );
}
