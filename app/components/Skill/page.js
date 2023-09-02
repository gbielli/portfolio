import React from 'react'

const Skill = () => {
  return (
    <section className='py-40 px-10 z-1 relative'>
        <div className=''>
            <div>
            <h2 className='font-clash text-[46px]'>Je peux vous aider sur ...</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20">
                <div className='item font-archivo'>
                    <p className='border-b border-b-[#BFBFC0] pb-4 mb-6 text-[#BFBFC0] text-lg'>01</p>
                    <h3 className='text-[28px] font-clash pb-4'>Acquisition</h3>
                    <p>With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.</p>
                </div>

                <div className='item font-archivo'>
                    <p className='border-b border-b-[#BFBFC0] pb-4  mb-6 text-[#BFBFC0]  text-lg'>02</p>
                    <h3 className='text-[28px] font-clash pb-4'>User expérience</h3>
                    <p>With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.</p>
                </div>
                <div className='item font-archivo'>
                    <p className='border-b border-b-[#BFBFC0] pb-4  mb-6 text-[#BFBFC0]  text-lg'>03</p>
                    <h3 className='text-[28px] font-clash pb-4'>Web analytics</h3>
                    <p>With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.</p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Skill