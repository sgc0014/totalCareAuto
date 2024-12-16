import React from 'react'

function Stat() {
  return (
    <div className="bg-gold">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
       
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col bg-white/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-gray-300">Established</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white">2001</dd>
          </div>
          <div className="flex flex-col bg-white/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-gray-300">Car fixed</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white">500+</dd>
          </div>
          <div className="flex flex-col bg-white/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-gray-300">Regular Customers</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white">600+</dd>
          </div>
          <div className="flex flex-col bg-white/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-gray-300">Trust</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white">100%</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  )
}

export default Stat