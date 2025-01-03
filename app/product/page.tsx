import Image from 'next/image';
import React from 'react';

const Products = () => {
    return (
        <div className='bg-gradient'>
            <div className='centered-heading'>
                <b><i><h2 className='bold-italic-heading'>Our Skincare Collection</h2></i></b>
                <br />
            </div>

            <div className="product-container">
                <div className="product-column">
                    <div>
                        <button><b><h1>Hyaluronic Acid Face Serum</h1></b></button>
                        <Image src="/hyaluronicSerum.webp" alt="Hyaluronic Acid Face Serum" width={150} height={150} className='image-padding-left'/>
                    </div>
                    <div>
                        <button><b><h1>Revitalizing Night Cream</h1></b></button>
                        <Image src="/NightCream.webp" alt="Revitalizing Night Cream" width={150} height={150} className='image-padding-left'/>
                    </div>
                </div>

                <div className="center-column">
                    <div>
                        <button><b><h1>Soothing Face Cleanser</h1></b></button>
                        <Image src="/Cleaanser.webp" alt="Soothing Face Cleanser" width={150} height={150} className='image-padding-left'/>
                    </div>
                </div>

                <div className="product-column">
                    <div>
                        <button><b><h1>Micellar Water</h1></b></button>
                        <Image src="/MicellarWater.jpg" alt="Micellar Water" width={150} height={150} className='image-padding-right'/>
                    </div>
                    <div>
                        <button><b><h1>Gel Moisturizer</h1></b></button>
                        <Image src="/gelMoisturizer.webp" alt="Gel Moisturizer" width={150} height={150} className='image-padding-right'/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default Products;
